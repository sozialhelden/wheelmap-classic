module NodeHelper
      
  def options_for_wheelchair_status(current_value)
    html = ''
    WheelchairStatus.each do |key,value|
      if key.to_s == current_value.to_s
        html << "<option selected='selected' value='#{key}'>#{I18n.t('wheelchairstatus.' + key)}</option>"
      else
        html << "<option value='#{key}'>#{I18n.t('wheelchairstatus.' + key)}</option>"
      end
    end
    html
  end
end
