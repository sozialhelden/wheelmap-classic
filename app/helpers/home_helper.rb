# encoding: UTF-8
module HomeHelper

  def minimize_overlay(id)
    if cookies["minimized_#{id}"] == 'true'
      link_to '»', '#', :style => 'margin-top:-5px;float:right;display:block;', :class => 'maximize'
    else
      link_to '«', '#', :style => 'margin-top:-5px;float:right;display:block;', :class => 'minimize'
    end
  end

  def bbox_feature(bbox)
    {
        :type       => 'Feature',
        :geometry   => {
            :type => 'Polygon',
            :coordinates  => [
                [
                    [ bbox[0], bbox[1] ],
                    [ bbox[2], bbox[1] ],
                    [ bbox[2], bbox[3] ],
                    [ bbox[0], bbox[3] ]
                ]
            ]
        },
        properties: {}
    }
  end
end
