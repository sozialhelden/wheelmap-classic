class UpdateSingleAttributeJob < Struct.new(:node_id, :user, :client, :attribute_hash)
  def self.enqueue(node_id, user, attributes)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = OpenStreetMap::OauthClient.new(user.access_token)
    new(node_id, user, client, attributes).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    raise ArgumentError.new("Client cannot be nil") if client.blank?
    raise ArgumentError.new("User cannot be nil") if user.blank?
    begin
      osm = OpenStreetMap::Api.new(client)
      #OldOsm.logger = Delayed::Worker.logger
      logger.info "UpdateSingleAttributeJob ------------->"
      logger.info "User: #{user.try(:id)}"


      old_node = osm.find_node(node_id)
      logger.info("OLD WHEELCHAIR STATUS: #{old_node.wheelchair}")

      new_node = old_node.dup
      logger.info("NEW NODE: #{new_node.inspect}")
      logger.info("OLD NODE 2: #{old_node.inspect}")

      attribute_hash.each do |key,value|
        logger.debug "key: #{key}"
        new_node.send("#{key}=", value)
      end
      logger.info("NEW NODE: #{new_node.inspect}")
      logger.info("OLD NODE2: #{old_node.inspect}")

      logger.info("NEW WHEELCHAIR STATUS: #{new_node.wheelchair}")

      # quit if all attributes hash are the same in old and new node
      if attribute_hash.all?{|key,value| old_node.send(key) == new_node.send(key)}
        logger.info("Ignoring, nodes are the same!")
        return
      end

      #changeset = osm.find_or_create_open_changeset
      #user.update_attribute('changeset_id', changeset.id) if user.changeset_id != changeset.id

      osm.save(new_node)
    rescue OpenStreetMap::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :action => 'perform', :component => 'UpdateSingleAttributeJob', :parameters => {:user => user.inspect, :new_node => new_node.inspect, :client => client.inspect, :attributes => attribute_hash})
    rescue Exception => e
      HoptoadNotifier.notify(e, :action => 'perform', :component => 'UpdateSingleAttributeJob', :parameters => {:user => user.inspect, :node_id => node_id, :client => client.inspect, :attributes => attribute_hash})
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
