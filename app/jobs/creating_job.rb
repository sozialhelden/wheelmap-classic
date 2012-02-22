class CreatingJob < Struct.new(:node, :user, :client)
  def self.enqueue(node, user)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = OpenStreetMap::OauthClient.new(user.access_token)
    new(node, user, client).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    raise ArgumentError.new("Client cannot be nil") if client.nil?
    raise ArgumentError.new("User cannot be nil") if user.nil?

    begin
      OpenStreetMap.logger = Delayed::Worker.logger
      Delayed::Worker.logger.info "CreatingJob -------------------------->"
      Delayed::Worker.logger.info "User: #{user.try(:id)}"
      osm = OpenStreetMap.new(client)

      changeset = osm.find_or_create_changeset(user.changeset_id, "Created new node on wheelmap.org")
      user.update_attribute('changeset_id', changeset.id) if user.changeset_id != changeset.id

      osm.create_node(node, user.changeset_id)
    rescue Exception => e
      HoptoadNotifier.notify(e, :action => 'perform',
                                :component => 'CreatingJob',
                                :parameters => {
                                  :node => node.inspect,
                                  :user => user.inspect,
                                  :client => client.inspect
                                })
      raise e
    end
  end

  def on_permanent_failure
    #TODO
  end
end
