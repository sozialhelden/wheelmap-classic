namespace :metrics do
  desc 'Send user creation dates to librato'
  task user_stats: :environment do
    queue = Librato::Metrics::Queue.new
    User.order('created_at ASC').where(['created_at > ?', 4.weeks.ago]).each_with_index do |user, index|
      queue.add users: { measure_time: user.created_at.to_i, value: index, source: 'test' }
    end
    queue.submit
  end

  task sample_data: :environment do
    queue = Librato::Metrics::Queue.new
    180.downto(0) do |i|
      puts i.minutes.ago
      queue.add sample: { measure_time: i.minutes.ago.to_i, value: rand(100), source: 'test' }
    end
    queue.submit
  end

  task deploy: :environment do
    branch = ENV['BRANCH'] || master
    rev = ENV['REV'] || `git rev-parse --short #{branch}`
    start_time = ENV['START_TIME'] || Time.now
    end_time = ENV['END_TIME'] || Time.now
    source = ENV['SOURCE'] || 'staging'
    Librato::Metrics.annotate :deployments, "deployed #{rev}",
                              start_time: start_time.to_i,
                              end_time: end_time.to_i,
                              source: source,
                              description: "Deployed '#{branch}' branch with hash '#{rev}' to #{source} environment."
  end
end
