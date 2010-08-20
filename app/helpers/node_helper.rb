module NodeHelper

  def options_for_wheelchair_status
    options = []
    WheelchairStatus.each do |status|
      options << [I18n.t('wheelchairstatus.' + status), status]
    end
    options
  end
end
