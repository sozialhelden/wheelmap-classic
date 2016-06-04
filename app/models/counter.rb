class Counter < ActiveRecord::Base

  def self.increment(attrib)
    today.increment!(attrib)
  end

  def self.today
    Counter.find_or_create_by(counter_date: Date.today)
  end

  def changed_within?(t)
    self.updated_at > t.minutes.ago
  end
end
