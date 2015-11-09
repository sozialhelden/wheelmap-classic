module WidgetsHelper

  def widget_data(widget)
    data = { show_categories: true, show_search: true }

    unless widget.nil?
      data[:show_search] = false;
      data[:show_categories] = @widget.categories
      if widget.provider_id
        data[:provider_id] = widget.provider_id
      end
    end

    data
  end

end
