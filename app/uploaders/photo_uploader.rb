# encoding: utf-8

class PhotoUploader < CarrierWave::Uploader::Base

  # Include RMagick or MiniMagick support:
  include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog

  process :convert => 'jpg'

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    File.join('system', 'uploads', model.class.to_s.underscore, subdirs)
    # File.join('uploads', model.class.to_s.underscore, mounted_as.to_s, subdirs)
  end

  def subdirs
    ("%09d" % model.id).scan(/.{1,3}/m)
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  def default_url
    "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  end

  # Create different versions of your uploaded files:

  # Chain all blocks to effectively transform a
  version :thumb do
    process :effectively_resize_to_fill => [100,100]
    process :convert => 'jpg'

    def full_filename(for_file = model.image.file)
      "thumb.jpg"
    end
  end

  version :gallery do
    process :effectively_resize_to_limit => [600, 600]
    process :convert => 'jpg'

    def full_filename(for_file = model.image.file)
      "gallery.jpg"
    end
  end

  version :p720 do
    process :effectively_resize_to_limit => [1280, 720]
    process :convert => 'jpg'

    def full_filename(for_file = model.image.file)
      "p720.jpg"
    end
  end

  version :p1080 do
    process :effectively_resize_to_limit => [1920, 1080]
    process :convert => 'jpg'

    def full_filename(for_file = model.image.file)
      "p1080.jpg"
    end
  end

  def dimension(version = :thumb)
    width, height = `identify -format "%wx%h" #{versions[version].file.path}`.gsub(/\n/,'').split(/x/).map(&:to_i)
  end

  def width(version = :thumb)
    if version.to_sym == :original
      ::Magick::Image::read(path).first.columns
    else
      ::Magick::Image::read(self.send(version).path).first.columns
    end
  end

  def height(version = :thumb)
    if version.to_sym == :original
      ::Magick::Image::read(path).first.rows
    else
      ::Magick::Image::read(self.send(version).path).first.rows
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
    "original.jpg"
  end



end
