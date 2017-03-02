# encoding: utf-8

class LogoUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog

  process convert: 'png'

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    File.join('system', 'uploads', model.class.to_s.underscore, mounted_as.to_s, model.id.to_s)
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/assets/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  process convert: 'png'
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  version 'iphone' do
    process effectively_resize_to_limit: [44, 44, 'png', 100]

    def full_filename(_for_file = model.image.file)
      "#{model.name.parameterize}@2x.png"
    end
  end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    %w(jpg jpeg gif png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  def filename
    "#{model.name.parameterize}.png" if original_filename
  end
end
