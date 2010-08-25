class AddStatsToDelayedJobs < ActiveRecord::Migration
  def self.up
    add_column :delayed_jobs, :first_started_at, :datetime
    add_column :delayed_jobs, :last_started_at, :datetime
    add_column :delayed_jobs, :finished_at, :datetime
  end

  def self.down
    remove_column :delayed_jobs, :finished_at
    remove_column :delayed_jobs, :last_started_at
    remove_column :delayed_jobs, :first_started_at
  end
end