class WayUpdatingJob < Struct.new(:way, :user, :client)
  def self.enqueue(way, user)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = Rosemary::OauthClient.new(user.access_token)
    new(way, user, client).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    begin
      raise ArgumentError.new("Client cannot be nil") if client.nil?
      raise ArgumentError, "Node is no way" unless way.is_a? Rosemary::Way

      logger.info "WayUpdatingJob -------------------------->"
      logger.info "User: #{user.try(:id)}"

      osm = Rosemary::Api.new(client)
      new_way = osm.find_node(way.id)
      # unify this with the other updater jobs. transport data in a hash, not a ::Way or ::Node, doesnt make sense
      new_way.tags.merge!(way.tags)
      osm.save(new_way)
    rescue Rosemary::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :component => 'WayUpdatingJob#perform', :parameters => {:user => user.inspect, :old_way => old_way.inspect, :way => way.inspect, :client => client})
    rescue Exception => e
      HoptoadNotifier.notify(e, :component => 'WayUpdatingJob#perform', :action => 'perform', :parameters => {:user => user.inspect, :way => way.inspect, :client => client.inspect})
      raise e
    end
  end


  def logger
    Delayed::Worker.logger
  end

  def on_permanent_failure
    #TODO
  end
end

