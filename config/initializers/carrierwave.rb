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
        img.write(current_path){ self.quality = percentage }
        img = yield(img) if block_given?
        img
      end
    end

    def effectively_resize_to_fill(width, height, format = 'jpg', quality = 70)
      resize_to_fill(width, height) do |img|
        img.auto_orient!
        img.strip!
        img.write(current_path){ self.quality = quality }
        img
      end
    end

    def effectively_resize_to_limit(width, height, format = 'jpg', quality = 70)
      resize_to_limit(width, height) do |img|
        img.auto_orient!
        img.strip!
        img.write(current_path){ self.quality = quality }
        img
      end
    end

  end
end

if Rails.env.test? or Rails.env.rspec?
  CarrierWave.configure do |config|
    config.storage = :file
    config.enable_processing = false
  end
end

CarrierWave.configure do |config|
  config.permissions = 0644
#  config.directory_permissions = 0755
  config.storage = :file
end
