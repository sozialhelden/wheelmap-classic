class UpdatingJob < Struct.new(:node, :user_id)
  
  def perform
    user = User.find(user_id)
    if user.application_authorized?
      oauth = OpenStreetMap::Oauth.new(user.access_token)
      OpenStreetMap.update_node(node, oauth)
    else
      OpenStreetMap.update_node(node)
    end
  end
  
  def on_permanent_failure
    #TODO 
  end
end