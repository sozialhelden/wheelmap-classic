class CreatingJob < Struct.new(:node, :user, :client)
  def self.enqueue(node, user)
    raise "user not app authorized" unless user.app_authorized? # implies user.access_token.present?

    client = Rosemary::OauthClient.new(user.access_token)
    new(node, user, client).tap do |job|
      Delayed::Job.enqueue(job)
    end
  end

  def perform
    raise ArgumentError.new("Client cannot be nil") if client.nil?
    raise ArgumentError.new("User cannot be nil") if user.nil?

    begin
      logger.info "CreatingJob -------------------------->"
      logger.info "User: #{user.try(:id)}"

      osm = Rosemary::Api.new(client)
      osm.create(node)
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

  def logger
    Delayed::Worker.logger
  end


  def on_permanent_failure
    #TODO
  end
end
