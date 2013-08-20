require 'librato-rails'
require 'delayed_job'

class DelayedJobPlugin < Delayed::Plugin

  def initialize
    @metrics = Librato::Rails
  end

  callbacks do |lifecycle|

    lifecycle.before(:invoke_job) do |job, *args, &block|
      Rails.logger.warn "BEFORE INVOKE"
      @metrics.increment "delayed_job.total", :sporadic => true
    end

    lifecycle.around(:invoke_job) do |job, *args, &block|
      @metrics.check_worker
      @metrics.timing "delayed_job.time" do
        Rails.logger.warn "DURING INVOKE"
        # Forward the call to the next callback in the callback chain
        block.call(job, *args)
      end
    end

    lifecycle.after(:invoke_job) do |job, *args, &block|
      Rails.logger.warn "DURING INVOKE"
      @metrics.flush
    end

    lifecycle.after(:perform) do |job, *args, &block|
      Rails.logger.warn "AFTER PERFORM"
      @metrics.increment "delayed_job.success"
    end

    lifecycle.after(:error) do |job, *args, &block|
      Rails.logger.warn "AFTER ERROR"
      @metrics.increment "delayed_job.error"
    end



  end
end