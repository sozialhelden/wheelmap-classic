class OauthMailer < ActionMailer::Base
  default from: 'noreply@wheelmap.org'

  def osm_reconnect(user)
    @user = user
    @url  = edit_profile_url
    mail(to: user.email,
         reply_to: 'andi@wheelmap.org',
         subject: 'Reminder: Konto zwischen Wheelmap.org und OpenStreetMap neu verbinden')
  end

  def osm_sign_up(user)
    @user = user
    @url  = edit_profile_url
    mail(to: user.email,
         reply_to: 'andi@wheelmap.org',
         subject: 'Jetzt die Wheelmap mit dem OpenStreetMap-Account nutzen')
  end
end
