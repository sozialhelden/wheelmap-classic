class CreatingJob < Struct.new(:node, :user_id)
  
  def perform
    user = User.find(user_id)
    oauth = OpenStreetMap::Oauth.new(user.access_token)
    OpenStreetMap.create(oauth, node)
  end
  
  def on_permanent_failure
    #TODO 
  end
end