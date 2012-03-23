class UpdateSingleAttributeJob < Struct.new(:node_id, :user, :client, :attribute_hash)
  def self.enqueue(node_id, user, attributes)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = Rosemary::OauthClient.new(user.access_token)
    new(node_id, user, client, attributes).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    raise ArgumentError.new("Client cannot be nil") if client.blank?
    raise ArgumentError.new("User cannot be nil") if user.blank?
    begin
      osm = Rosemary::Api.new(client)

      logger.info "UpdateSingleAttributeJob ------------->"
      logger.info "User: #{user.try(:id)}"

      node = osm.find_node(node_id)
      logger.info "OLD WHEELCHAIR STATUS: #{node.wheelchair}"

      if node.update_attributes(attribute_hash)
        osm.save(node)
      else
        logger.info "No change. No op."
      end
    rescue Rosemary::Conflict => conflict
      # These changes have already been made, so dismiss this update!
      HoptoadNotifier.notify(conflict, :action => 'perform', :component => 'UpdateSingleAttributeJob', :parameters => {:user => user.inspect, :new_node => node.inspect, :client => client.inspect, :attributes => attribute_hash})
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
