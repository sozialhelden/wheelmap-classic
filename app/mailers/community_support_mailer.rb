class CommunitySupportMailer < ActionMailer::Base
  default from: "noreply@wheelmap.org"

  def send_to_support_team(community_support_request)
    @community_support_request = community_support_request

    # @TODO remove after test
    mail(:to => "thuy.le@asquera.de", :subject => "Problem report from wheelmap.org")
  end
end
