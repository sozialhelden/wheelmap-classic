module CarrierWave
  module RMagick
    # Rotates the image based on the EXIF Orientation
    def fix_exif_rotation
      manipulate! do |img|
        img.auto_orient!
        img = yield(img) if block_given?
        img
      end
    end

    # Strips out all embedded information from the image
    def strip
      manipulate! do |img|
        img.strip!
        img = yield(img) if block_given?
        img
      end
    end

    # Reduces the quality of the image to the percentage given
    def quality(percentage)
      manipulate! do |img|
        img.write(current_path) { self.quality = percentage }
        img = yield(img) if block_given?
        img
      end
    end

    def effectively_resize_to_fill(width, height, _format = 'jpg', quality = 70)
      resize_to_fill(width, height) do |img|
        img.auto_orient!
        img.strip!
        img.write(current_path) { self.quality = quality }
        img
      end
    end

    def effectively_resize_to_limit(width, height, _format = 'jpg', quality = 70)
      resize_to_limit(width, height) do |img|
        img.auto_orient!
        img.strip!
        img.write(current_path) { self.quality = quality }
        img
      end
    end
  end
end

  CarrierWave.configure do |config|
    config.permissions = 0o644
    config.storage = :file

    if Rails.env.production? || Rails.env.staging?
      config.enable_processing = true
    else
      # Change to true to see the images immediately in dev and test mode (comment out :process_in_background 'app/models/photo.rb' as well)
      config.enable_processing = false
    end
  end
