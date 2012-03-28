class CreateNodeJob < Struct.new(:lat, :lon, :tags, :user, :client)
  def self.enqueue(lat, lon, tags, user)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = Rosemary::OauthClient.new(user.access_token)
    new(lat, lon, tags, user, client).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    raise ArgumentError.new("Client cannot be nil") if client.nil?
    raise ArgumentError.new("User cannot be nil") if user.nil?

    begin
      logger.info "CreateNodeJob -------------------------->"
      logger.info "User: #{user.try(:id)}"

      osm = Rosemary::Api.new(client)
      node = Rosemary::Node.new(:lat => lat, :lon => lon, :tag => tags)
      osm.create(node)
    rescue Exception => e
      HoptoadNotifier.notify(e, :action => 'perform',
                                :component => 'CreateNodeJob',
                                :parameters => {
                                  :node => node.inspect,
                                  :user => user.inspect,
                                  :client => client.inspect
                                })
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
