# encoding: utf-8

class PhotoUploader < CarrierWave::Uploader::Base

  # Include RMagick or MiniMagick support:
  include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  storage :file

  process :convert => 'jpg'

  # storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    subdirs = ("%09d" % model.id).scan(/.{1,3}/m)
    File.join('system', 'uploads', model.class.to_s.underscore, subdirs)
    # File.join('uploads', model.class.to_s.underscore, mounted_as.to_s, subdirs)
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  def default_url
    "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  end

  # Process files as they are uploaded:
  # process :scale => [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  version :thumb do
    process :fix_exif_rotation
    process :strip
    process :convert        => 'jpg'
    process :resize_to_fill => [100, 100]
    process :quality        => 70
  end

  version :gallery do
    process :fix_exif_rotation
    process :strip
    process :convert => 'jpg'
    process :resize_to_fit => [600, 600]
    process :quality        => 70
  end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    %w(jpg jpeg gif png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  def filename
    super.chomp(File.extname(super)) + '.jpg'
  end
end
