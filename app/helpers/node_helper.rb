module NodeHelper
      
  def options_for_wheelchair_status(current_value)
    html = ''
    WheelchairStatus.each do |status|
      if status == current_value.to_s
        html << "<option selected='selected' value='#{status}'>#{I18n.t('wheelchairstatus.' + status)}</option>"
      else
        html << "<option value='#{status}'>#{I18n.t('wheelchairstatus.' + status)}</option>"
      end
    end
    html
  end
end
