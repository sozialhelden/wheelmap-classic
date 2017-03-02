Delayed::Worker.destroy_failed_jobs = false
# Delayed::Worker.destroy_successful_jobs = false
Delayed::Worker.sleep_delay = 5
Delayed::Worker.max_attempts = 20
Delayed::Worker.max_run_time = 5.minutes
Delayed::Worker.logger = Logger.new("#{Rails.root}/log/delayed_job.log")

# require 'delayed_job_plugin'
# Delayed::Worker.plugins << DelayedJobPlugin
