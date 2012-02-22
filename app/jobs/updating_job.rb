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

      old_node = OpenStreetMap.get_node(node.id)

      new_node = old_node.clone
      new_node.tags = node.tags.reverse_merge(old_node.tags)
      osm = OpenStreetMap.new(client)
      updated_node = osm.update_node_with_changeset new_node, user
    rescue OpenStreetMap::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :component => 'UpdatingJob#perform', :parameters => {:user => user.inspect, :old_node => old_node.inspect, :new_node => new_node.inspect, :client => client})
    rescue Exception => e
      HoptoadNotifier.notify(e, :component => 'UpdatingJob#perform', :action => 'perform', :parameters => {:user => user.inspect, :new_node => new_node.inspect, :client => client.inspect})
      raise e
    end

  end

  def on_permanent_failure
    #TODO
  end

end
