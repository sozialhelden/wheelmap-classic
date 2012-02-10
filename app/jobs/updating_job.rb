class UpdatingJob < Struct.new(:node, :user, :client)
  def self.enqueue(node, user)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = OpenStreetMap::OauthClient.new(user.access_token)
    new(node, user, client).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    begin
      raise ArgumentError.new("Client cannot be nil") if client.nil?
      raise ArgumentError.new("Node is a way. Use WayUpdatingJob") if node.id < 0

      OpenStreetMap.logger = Delayed::Worker.logger
      Delayed::Worker.logger.info "UpdatingJob -------------------------->"
      Delayed::Worker.logger.info "User: #{user.try(:id)}"
      lat = node.lat
      lon = node.lon

      old_node = OpenStreetMap.get_node(node.id)
      old_tags = old_node.tags
      Delayed::Worker.logger.info("OLD TAGS: #{old_tags.to_yaml}")

      new_tags = node.tags.reverse_merge(old_tags)
      Delayed::Worker.logger.info("NEW TAGS: #{new_tags.to_yaml}")

      node = old_node.clone
      node.tags = new_tags
      node.lat = lat
      node.lon = lon

      osm = OpenStreetMap.new(client)

      changeset = osm.find_or_create_changeset(user.changeset_id, "Modified node on wheelmap.org")
      user.update_attribute('changeset_id', changeset.id) if user.changeset_id != changeset.id

      updated_node = osm.update_node(node, user.changeset_id)
    rescue OpenStreetMap::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :component => 'UpdatingJob#perform', :parameters => {:user => user.inspect, :old_node => old_node.inspect, :node => node.inspect, :client => client})
    rescue Exception => e
      HoptoadNotifier.notify(e, :component => 'UpdatingJob#perform', :action => 'perform', :parameters => {:user => user.inspect, :node => node.inspect, :client => client.inspect})
      raise e
    end

  end

  def on_permanent_failure
    #TODO
  end
end
