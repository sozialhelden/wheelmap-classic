class UpdatingJob < Struct.new(:osmid, :wheelchair_status, :user_id)
  
  def perform
    user = User.find(user_id)
    oauth = OpenStreetMap::Oauth.new(user.oauth_token, user.oauth_secret)
    OpenStreetMap.update(osmid, oauth, wheelchair_status)
  end
  
  def on_permanent_failure
    #TODO 
  end
end