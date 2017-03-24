# encoding: UTF-8
class UserMailer < ActionMailer::Base
  default from: 'noreply@wheelmap.org'

  def user_destroyed(user)
    @email = user.email
    mail(to: 'raul@sozialhelden.de',
         reply_to: @email,
         subject: 'Wheelmap: Benutzer gelöscht')
  end

  def welcome(user)
    locale = I18n.locale == :de ? :de : :en
    @email = user.email
    mail(to: @email,
         subject: (locale == :de ? 'Willkommen bei wheelmap.org' : 'Welcome to wheelmap.org'),
         template_name: "welcome_#{locale}")
  end
end
