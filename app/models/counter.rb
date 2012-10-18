class Counter < ActiveRecord::Base

  def self.increment(attrib)
    counter = today
    Counter.transaction do
      counter.update_attribute(attrib, counter.read_attribute(attrib) + 1)
    end
    counter.read_attribute(attrib)
  end

  def self.today
    Counter.find_or_create_by_counter_date(Date.today)
  end

  def changed_within?(t)
    self.updated_at > t.minutes.ago
  end
end
