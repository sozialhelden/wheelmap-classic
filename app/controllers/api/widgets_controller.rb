class Api::WidgetsController < Api::ApiController

  def show
    @widget = current_user.widget
    show! do |format|
      # format.html { render :template => 'api/widgets/show' }
      format.xml  {render_for_api :api_simple, :xml  => @widget}
      format.json {render_for_api :api_simple, :json => @widget}
    end
  end

end
