require 'librato-rails'
require 'delayed_job'

class DelayedJobPlugin < Delayed::Plugin

  callbacks do |lifecycle|

    lifecycle.after(:enqueue) do |job, &block|
      Rails.logger.warn("enqueue")
      raise("enqueue")
      Librato::Rails.increment "delayed_job.total", :sporadic => true
    end

    lifecycle.around(:perform) do |job, *args, &block|
      Librato::Rails.timing "delayed_job.time" do
        # Forward the call to the next callback in the callback chain
        block.call(job, *args)
      end
      Rails.logger.warn("perform")
    end

    lifecycle.after(:perform) do |job, &block|
      Librato::Rails.increment "delayed_job.success", :sporadic => true
      Rails.logger.warn("success")
    end

    lifecycle.after(:error) do |job, &block|
      Librato::Rails.increment "delayed_job.error", :sporadic => true
      Rails.logger.warn("error")
    end

    lifecycle.after(:execute) do |worker|
      Librato::Rails.flush
      Rails.logger.warn("flush")
    end

  end
end