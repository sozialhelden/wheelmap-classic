class User < ActiveRecord::Base
  acts_as_authentic
  
  def just_activated?
    @just_activated
  end

  def activated?
    activated_at != nil
  end

  def activate!
    write_attribute(:activated_at, Time.now)
    save!
    @just_activated = true
  end
end
