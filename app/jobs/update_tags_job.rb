class UpdateTagsJob < Struct.new(:element_id, :type, :tags, :user, :client, :source)

  def self.enqueue(element_id, type, tags, user, source)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = Rosemary::OauthClient.new(user.access_token)
    new(element_id, type, tags, user, client, source).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    begin
      raise ArgumentError.new("Client cannot be nil") if client.nil?

      logger.info "UpdateTagsJob -------------------------->"
      logger.info "User: #{user.try(:id)}"

      api = Rosemary::Api.new(client)

      element_to_compare = api.find_element(type, element_id)

      element = element_to_compare.dup
      element.tags.merge!(tags)

      # Use spaceship operator for comparision:
      # as "element == element_to_compare" is false because of object_id
      comparison_value = (element_to_compare <=> element)

      # Ignore this job, as there are no changes to be saved
      if comparison_value == 0
        logger.info "IGNORE: #{type}:#{element_id} nothing has changed!"
        HoptoadNotifier.notify(Exception.new('NotChanged'), :component => 'UpdateTagsJob#perform', :parameters => {:user => user.inspect, :element => element.inspect, :client => client})
        return
      end

      changeset = api.find_or_create_open_changeset(user.changeset_id, "Modified via wheelmap.org")
      user.update_attribute(:changeset_id, changeset.id)

      api.save(element, changeset)

      Counter.increment(source)

      # Check if the job updates the wheelchair tag only
      if tags.keys == ['wheelchair']
        user.increment!(:tag_counter)
      else
        user.increment!(:edit_counter)
      end
    rescue Rosemary::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :component => 'UpdateTagsJob#perform', :parameters => {:user => user.inspect, :element => element.inspect, :client => client})
    rescue Exception => e
      HoptoadNotifier.notify(e, :component => 'UpdateTagsJob#perform', :action => 'perform', :parameters => {:user => user.inspect, :element => element.inspect, :client => client.inspect})
      raise e
    end
  end

  def logger
    Delayed::Worker.logger
  end

  def enqueue(job)
  end

  def before(job)
  end

  def after(job)
  end

  def success(job)
  end

  def error(job, exception)
  end

  def failure
  end
end
