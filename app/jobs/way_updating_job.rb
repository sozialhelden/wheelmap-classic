class WayUpdatingJob < Struct.new(:way, :user, :client)
  def self.enqueue(way, user)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = OpenStreetMap::OauthClient.new(user.access_token)
    new(way, user, client).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    begin
      raise ArgumentError.new("Client cannot be nil") if client.nil?
      raise ArgumentError, "Node is no way" unless way.is_a? OpenStreetMap::Way

      OpenStreetMap.logger = Delayed::Worker.logger
      Delayed::Worker.logger.info "WayUpdatingJob -------------------------->"
      Delayed::Worker.logger.info "User: #{user.try(:id)}"

      old_way = OpenStreetMap.get_way(way.id)
      old_tags = old_way.tags
      Delayed::Worker.logger.info("OLD TAGS: #{old_tags.to_yaml}")

      new_tags = way.tags.reverse_merge(old_tags)
      Delayed::Worker.logger.info("NEW TAGS: #{new_tags.to_yaml}")

      new_way = old_way.clone
      new_way.tags = new_tags

      osm = OpenStreetMap.new(client)

      changeset = osm.find_or_create_changeset(user.changeset_id, "Modified way on wheelmap.org")
      user.update_attribute('changeset_id', changeset.id) if user.changeset_id != changeset.id

      updated_way = osm.update_way(new_way, user.changeset_id)
    rescue OpenStreetMap::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :component => 'WayUpdatingJob#perform', :parameters => {:user => user.inspect, :old_way => old_way.inspect, :way => way.inspect, :client => client})
    rescue Exception => e
      HoptoadNotifier.notify(e, :component => 'WayUpdatingJob#perform', :action => 'perform', :parameters => {:user => user.inspect, :way => way.inspect, :client => client.inspect})
      raise e
    end

  end

  def on_permanent_failure
    #TODO
  end
end

