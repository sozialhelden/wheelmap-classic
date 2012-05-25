class Counter < ActiveRecord::Base

  def self.increment(attrib)
    Counter.transaction do
      counter = Counter.find_or_initialize_by_counter_date(Date.today)
      counter.update_attribute(attrib, counter.send(attrib) + 1)
    end
  end
end
