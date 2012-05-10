
ActiveSupport::Notifications.subscribe "process_action.action_controller" do |name, start, finish, id, payload|
  duration = (finish - start) * 1000
  LIBRATO_QUEUE.add(:"requests_#{Rails.env}" => { :measure_time => start.to_i, :value => duration, :source => name })
end
