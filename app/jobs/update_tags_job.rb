class UpdateTagsJob < Struct.new(:element_id, :type, :tags, :user, :client, :source, :tags_to_delete)
  def self.enqueue(element_id, type, tags, user, source, tags_to_delete={})
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    # Do not enqeue job if not in production or test environment
    return unless Rails.env.production? || Rails.env.test?

    # Remove wheelchair tag if value is "unknown"
    tags.delete("wheelchair") if tags["wheelchair"] == 'unknown'

    # Remove wheelchair tag if value is "unknown"
    tags.delete("toilets:wheelchair") if tags["toilets:wheelchair"] == 'unknown'

    client = Rosemary::OauthClient.new(user.access_token)
    new(element_id, type, tags, user, client, source, tags_to_delete).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    raise ArgumentError.new("Client cannot be nil") if client.nil?

    logger.info "UpdateTagsJob -------------------------->"
    logger.info "User DB ID: #{user.try(:id)} - User OSM ID: #{user.try(:osm_id)} - Element: #{element_id} - Tags: #{tags}"

    begin
      element_to_compare = api.find_element(type, element_id)

      element = element_to_compare.dup
      element.tags.merge!(tags)
      tags_to_delete.each do |delete_key,delete_value|
        element.tags.reject! do |key,value|
          key == delete_key &&
          value == delete_value
        end
      end

      # This loop is only here to make tests fail, actually.
      element.tags.each do |key,value|
        tags_to_delete.each do |delete_key,delete_value|
          raise "Tags to be deleted are still to be found." if element.tags.include?(delete_key) && element.tags[delete_key] == delete_value
        end
      end

      # Use spaceship operator for comparision:
      # as "element == element_to_compare" is false because of object_id
      comparison_value = (element_to_compare <=> element)

      # Ignore this job, as there are no changes to be saved
      if comparison_value == 0
        logger.info "IGNORE: #{type}:#{element_id} nothing has changed! (value comparison)"
        return
      end

      changeset = api.find_or_create_open_changeset(user.changeset_id, "Modified via wheelmap.org")
      user.update_attribute(:changeset_id, changeset.id)

      api.save(element, changeset)

      Counter.increment(source)
      if update_wheelchair?
        user.increment!(:tag_counter) if user.terms?
        update_poi!
      elsif update_toilet?
        user.increment!(:toilet_counter) if user.terms?
        update_poi!
      else
        user.increment!(:edit_counter) if user.terms?
      end
    rescue Rosemary::Conflict => conflict
      logger.info "IGNORE: #{type}:#{element_id} nothing has changed! (conflict)"
      # These changes have already been made, so dismiss this update!
      Airbrake.notify(conflict, :component => 'UpdateTagsJob#perform', :parameters => {:user => user.inspect, :element => element.inspect, :client => client})
    end
  end

  def api
    @api ||= Rosemary::Api.new(client)
  end

  def logger
    Delayed::Worker.logger
  end

  def enqueue(job)
  end

  def before(job)
  end

  def success(job)
  end

  def error(job, e)
    logger.error "ERROR: "
    Airbrake.notify(e, :action => 'perform',
                              :component => 'UpdateTagsJob',
                              :parameters => {
                                :user => user.inspect,
                                :element_id => element_id.inspect,
                                :type => type.inspect,
                                :client => client.inspect
                              })
  end

  def after(job)
  end

  def update_wheelchair?
    # Check if the job updates the wheelchair tag only
    tags.keys == ['wheelchair']
  end

  def update_toilet?
    # Check if the job updates the wheelchair tag only
    tags.keys == ['toilets:wheelchair']
  end

  def update_poi!
    begin
      logger.info "SET poi to new wheelchair status: #{tags["wheelchair"]}"
      osm_id = element_id
      osm_id = osm_id * -1 if type == 'way'
      p = Poi.find osm_id
      p.wheelchair = tags["wheelchair"]
      p.wheelchair_toilet = tags["toilets:wheelchair"]
      p.save(:validate => false)
    rescue Exception => e
      logger.error e.message
      logger.error e.backtrace
    end
  end
end
