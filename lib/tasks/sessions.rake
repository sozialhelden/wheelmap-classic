

namespace :db do  
  namespace :sessions do
    desc 'Cleanup all old session'
    task :expire => :environment do
      class Session < ActiveRecord::Base; end
      old_sessions = Session.find(:all, :conditions =>  "updated_at < '#{6.hours.ago.to_s(:db)}' OR created_at < '#{2.days.ago.to_s(:db)}'")
      puts "Found #{old_sessions.size} expired sessions"
      Session.delete(old_sessions)
    end
  end
end