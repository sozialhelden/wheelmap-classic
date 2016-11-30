class CommunitySupportMailer < ActionMailer::Base
  default from: "noreply@wheelmap.org"

  def send_to_support_team(community_support_request)
    @community_support_request = community_support_request

    mail(:to => "bugs@wheelmap.org", :subject => "Help request from wheelmap.org")
  end
end
