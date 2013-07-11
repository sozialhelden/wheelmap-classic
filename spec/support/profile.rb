RSpec.configure do |c|
  def profile
    require 'ruby-prof'
    result = RubyProf.profile { yield }
    name = example.metadata[:full_description].downcase.gsub(/[^a-z0-9_-]/, "-").gsub(/-+/, "-")
    printer = RubyProf::CallTreePrinter.new(result)
    open("tmp/performance/callgrind.#{name}.#{Time.now.to_i}.trace", "w") do |f|
      printer.print(f)
    end
  end

  c.around(:each) do |example|
    if ENV['PROFILE'] == 'all' or (example.metadata[:profile] and ENV['PROFILE'])
      profile { example.run }
    else
      example.run
    end
  end
end
