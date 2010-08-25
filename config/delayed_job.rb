Delayed::Job.destroy_failed_jobs = false
Delayed::Job.destroy_successful_jobs = false
silence_warnings do
  Delayed::Job.const_set("MAX_ATTEMPTS", 25)
  Delayed::Job.const_set("MAX_RUN_TIME", 5.minutes)
end