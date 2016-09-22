class CommunitySupportMailer < ActionMailer::Base
  default from: "noreply@wheelmap.org"

  def send_to_support_team(community_support_request)
    @community_support_request = community_support_request

    mail( :to => "support@example.com",
          :subject => "Bugreport von wheelmap.org"
          )
  end
end
