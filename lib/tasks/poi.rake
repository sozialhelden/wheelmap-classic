namespace :poi do  

  desc 'Recalculate poi status'
  task :recalculate => :environment do
    Poi.find_in_batches(:batch_size => 1000) do |batch|
      batch.each do |poi|
        poi.save!
      end
      putc('.')
      STDOUT.flush
    end
  end
end