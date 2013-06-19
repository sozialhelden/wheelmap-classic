# encoding: UTF-8
class UserMailer < ActionMailer::Base
  default :from => "noreply@wheelmap.org"

  def user_destroyed(user)
    @email = user.email
    mail( :to => "raul@sozialhelden.de",
          :reply_to => @email,
          :subject => "Wheelmap: Benutzer gelöscht"
        )
  end

end
