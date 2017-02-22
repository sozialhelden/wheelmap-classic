class CommunitySupportController < ApplicationController
  layout 'relaunch'
  def new
    @support_request = CommunitySupportRequest.new
    @support_request.email = current_user.email if current_user
  end

  def create
    support_params = form_params.merge(user_agent: request.user_agent,
                                       latitude: latitude,
                                       longitude: longitude,
                                       last_zoom_level: zoom_level,
                                       wheelchair_status_filters: wheelchair_status_filters,
                                       category_filters: category_filters,
                                       toilet_filters: toilet_filters)
    @support_request = CommunitySupportRequest.new(support_params)
    if current_user
      @support_request.is_logged_in = true
      @support_request.osm_username = current_user.osm_username
    end

    if @support_request.valid?
      CommunitySupportMailer.delay.send_to_support_team(@support_request)
      flash[:notice] = I18n.t('community_support_form.new.form.flash_after_submit')
      redirect_to root_path
    else
      render 'new'
    end
  end

  private

  def latitude
    request.cookies['last_lat']
  end

  def longitude
    request.cookies['last_lon']
  end

  def zoom_level
    request.cookies['last_zoom']
  end

  def wheelchair_status_filters
    filters = request.cookies['last_status_filters']
    return nil if filters.nil?
    JSON.parse(filters)
  end

  def category_filters
    filters = request.cookies['last_category_filters']
    return nil if filters.nil?
    JSON.parse(filters)
  end

  def toilet_filters
    filters = request.cookies['last_toilet_filters']
    return nil if filters.nil?
    JSON.parse(filters)
  end

  def form_params
    params.require(:community_support_request).permit(:name, :email, :message)
  end
end
