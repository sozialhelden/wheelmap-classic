namespace :log do
  desc 'parses the logfile'
  task parse: :environment do
    count = 0
    IP_REGEXP = /(?:[0-9]{1,3}\.){3}[0-9]{1,3}/
    buffer = []
    STDIN.each_line do |line|
      if count > 0
        buffer << line
        if !buffer.empty? && buffer.any? { |l| l.match(/^Completed 401/) }
          puts buffer.join(' ')
          buffer = []
        end
        count -= 1
        next
      else
        buffer = [] unless buffer.empty?
      end
      next unless line =~ /^Started/
      unless line.match(%r{^Started POST \"\/nodes\" for #{IP_REGEXP} at Fri Jun 15}).nil?
        buffer << line
        count = 5
      end
    end
  end
end
