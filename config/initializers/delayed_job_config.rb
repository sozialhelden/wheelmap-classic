Delayed::Worker.destroy_failed_jobs = false
# Delayed::Worker.destroy_successful_jobs = false
Delayed::Worker.sleep_delay = 5
Delayed::Worker.max_attempts = 25
Delayed::Worker.max_run_time = 5.minutes
Delayed::Worker.logger = Logger.new("#{Rails.root}/log/delayed_job.log")
