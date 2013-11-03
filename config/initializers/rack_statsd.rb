current_sha = `git rev-parse HEAD`[0..8]
Rails.application.middleware.insert_before Rack::Lock, RackStatsD::ProcessUtilization, "wheelmap-#{Rails.env}", current_sha