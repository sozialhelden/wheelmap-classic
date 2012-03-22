class UpdateSingleWayAttributeJob < Struct.new(:way_id, :user, :client, :attribute_hash)
  def self.enqueue(way_id, user, attributes)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = OpenStreetMap::OauthClient.new(user.access_token)
    new(way_id, user, client, attributes).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    raise ArgumentError.new("Client cannot be nil") if client.blank?
    raise ArgumentError.new("User cannot be nil") if user.blank?
    begin
      osm = OpenStreetMap::Api.new(client)

      logger.info "UpdateSingleWayAttributeJob ------------->"
      logger.info "User: #{user.try(:id)}"

      way = osm.find_way(way_id)
      logger.info "OLD WHEELCHAIR STATUS: #{way.wheelchair}"

      if way.update_attributes(attribute_hash)
        osm.save(way)
      else
        logger.info "No change. No op."
      end
    rescue OldOsm::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :action => 'perform', :component => 'UpdateSingleWayAttributeJob', :parameters => {:user => user.inspect, :new_way => new_way.inspect, :client => client.inspect, :attributes => attribute_hash})
    rescue Exception => e
      HoptoadNotifier.notify(e, :action => 'perform', :component => 'UpdateSingleWayAttributeJob', :parameters => {:user => user.inspect, :way_id => way_id, :client => client.inspect, :attributes => attribute_hash})
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
