class ChangeAnonymousFlagForWheelmapVisitorAndWheelmapAndroid < ActiveRecord::Migration
  EMAILS = ['visitor@wheelmap.org', 'android_app@wheelmap.org'].freeze

  def up
    change_anonymous_flag(true)
  end

  def down
    change_anonymous_flag(false)
  end

  private

  def change_anonymous_flag(anonymous_flag)
    users = User.where(email: EMAILS)

    users.each do |user|
      user.anonymous = anonymous_flag
      user.save!
    end
  end
end
