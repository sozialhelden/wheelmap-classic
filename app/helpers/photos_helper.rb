module PhotosHelper
  def photo_tag(photo, format = :thumb_iphone_retina)
    photo = Photo.new if photo.image_processing?
    image_tag(photo.image.url(format).to_s, class: format,
                                            alt: photo.id)
  end

  def delete_button(photo)
    button_to('&times;'.html_safe, profile_photo_path(photo), confirm: t('devise.destroy.confirm'), method: :delete, class: [:btn, :'pull-right'], title: t('devise.destroy.link'), style: 'position:relative; top:-35px;left: -5px')
  end

  def link_to_photo(photo)
    html = ''
    photo = Photo.new if photo.image_processing?
    link_name = image_path(photo.image.url(:gallery_ipad).to_s)
    html << link_to(link_name, class: :thumbnail, name: photo.id, 'data-lightbox': 'gallery', title: photo.caption) do
      photo_tag(photo, :thumb_iphone_retina)
    end
    html << delete_button(photo) unless photo.new_record?
    html.html_safe
  end
end
