module PhotosHelper

  def photo_tag(photo, format = :thumb)
    photo = Photo.new if photo.image_processing?
    image_tag(photo.image.url(format).to_s, :class => format,
                                            :alt => photo.id,
                                            :width => photo.image.send(format).width,
                                            :height => photo.image.send(format).height
                                            )
  end

  def link_to_photo(photo)
    photo = Photo.new if photo.image_processing?
    link_name = image_path(photo.image.url(:gallery).to_s)
    link_to link_name, :class => :thumb, :name => photo.id, :'data-lightbox' => 'gallery', :title => photo.caption do
      photo_tag(photo)
    end
  end
end