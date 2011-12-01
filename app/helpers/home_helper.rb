# encoding: UTF-8
module HomeHelper

  def minimize_overlay(id)
    if cookies["minimized_#{id}"] == 'true'
      link_to '»', '#', :style => 'margin-top:-5px;float:right;display:block;', :class => 'maximize'
    else
      link_to '«', '#', :style => 'margin-top:-5px;float:right;display:block;', :class => 'minimize'
    end
  end
end
