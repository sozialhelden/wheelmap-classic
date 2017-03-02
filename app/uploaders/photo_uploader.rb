# encoding: utf-8

class PhotoUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  include CarrierWave::RMagick
  # include CarrierWave::MiniMagick
  include CarrierWave::Meta
  include CarrierWave::Backgrounder::Delay

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog

  process convert: 'jpg'
  process :store_meta

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    File.join('system', 'uploads', model.class.to_s.underscore, subdirs)
    # File.join('uploads', model.class.to_s.underscore, mounted_as.to_s, subdirs)
  end

  def subdirs
    ('%09d' % model.id).scan(/.{1,3}/m)
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  def default_url
    "/assets/fallback/#{version_name}_default.png"
  end

  # Create different versions of your uploaded files:

  # Chain all blocks to effectively transform a
  version :thumb do
    process effectively_resize_to_fill: [100, 100]
    process convert: 'jpg'
    process :store_meta

    def full_filename(_for_file = model.image.file)
      'thumb.jpg'
    end
  end

  version :thumb_iphone do
    process effectively_resize_to_fill: [80, 56]
    process convert: 'jpg'
    process :store_meta

    def full_filename(_for_file = model.image.file)
      'thumb_iphone.jpg'
    end
  end

  version :thumb_iphone_retina do
    process effectively_resize_to_fill: [160, 112]
    process convert: 'jpg'
    process :store_meta

    def full_filename(_for_file = model.image.file)
      'thumb_iphone_retina.jpg'
    end
  end

  version :gallery do
    process effectively_resize_to_limit: [600, 600]
    process convert: 'jpg'
    process :store_meta

    def full_filename(_for_file = model.image.file)
      'gallery.jpg'
    end
  end

  version :gallery_preview do
    process effectively_resize_to_fill: [180, 180]
    process convert: 'jpg'
    process :store_meta

    def full_filename(_for_file = model.image.file)
      'gallery_preview.jpg'
    end
  end

  version :gallery_iphone do
    process effectively_resize_to_limit: [480, 320]
    process convert: 'jpg'
    process :store_meta

    def full_filename(_for_file = model.image.file)
      'gallery_iphone.jpg'
    end
  end

  version :gallery_iphone_retina do
    process effectively_resize_to_limit: [960, 640]
    process convert: 'jpg'
    process :store_meta

    def full_filename(_for_file = model.image.file)
      'gallery_iphone_retina.jpg'
    end
  end

  version :gallery_ipad do
    process effectively_resize_to_limit: [1024, 768]
    process convert: 'jpg'
    process :store_meta

    def full_filename(_for_file = model.image.file)
      'gallery_ipad.jpg'
    end
  end

  version :gallery_ipad_retina do
    process effectively_resize_to_limit: [2048, 1536]
    process convert: 'jpg'
    process :store_meta

    def full_filename(_for_file = model.image.file)
      'gallery_ipad_retina.jpg'
    end
  end

  def dimension(version = :thumb)
    [send(version).width, send(version).height]
  end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    ['jpg', 'jpeg', 'gif', 'png', '']
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  def filename
    'original.jpg'
  end
end
