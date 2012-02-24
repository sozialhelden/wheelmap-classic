class UpdateSingleWayAttributeJob < Struct.new(:way_id, :user, :client, :attribute_hash)
  def self.enqueue(node_id, user, attributes)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = OldOsm::OauthClient.new(user.access_token)
    new(node_id, user, client, attributes).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    raise ArgumentError.new("Client cannot be nil") if client.blank?
    raise ArgumentError.new("User cannot be nil") if user.blank?
    begin
      OldOsm.logger = Delayed::Worker.logger
      Delayed::Worker.logger.info "UpdateSingleWayAttributeJob ------------->"
      Delayed::Worker.logger.info "User: #{user.try(:id)}"

      old_way = OldOsm.get_way(way_id)
      Delayed::Worker.logger.info("OLD WHEELCHAIR STATUS: #{old_way.wheelchair}")

      new_way = old_way.clone

      attribute_hash.each do |key,value|
        new_way.send("#{key}=", value)
      end

      Delayed::Worker.logger.info("NEW WHEELCHAIR STATUS: #{new_way.wheelchair}")

      # quit if all attributes hash are the same in old and new way
      if attribute_hash.all?{|key,value| old_way.send(key) == new_way.send(key)}
        Delayed::Worker.logger.info("Ignoring, ways are the same!")
        return
      end

      client = OldOsm::OauthClient.new(user.access_token)
      osm = OldOsm.new(client)

      changeset = osm.find_or_create_changeset(user.changeset_id, "Modified wheelchair tag on wheelmap.org")
      user.update_attribute('changeset_id', changeset.id) if user.changeset_id != changeset.id

      osm.update_way(new_way, user.changeset_id)
    rescue OldOsm::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :action => 'perform', :component => 'UpdateSingleWayAttributeJob', :parameters => {:user => user.inspect, :new_way => new_way.inspect, :client => client.inspect, :attributes => attribute_hash})
    rescue Exception => e
      HoptoadNotifier.notify(e, :action => 'perform', :component => 'UpdateSingleWayAttributeJob', :parameters => {:user => user.inspect, :way_id => way_id, :client => client.inspect, :attributes => attribute_hash})
      raise e
    end

  end

  def on_permanent_failure
    #TODO
  end

end
