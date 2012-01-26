class WaysController < ApplicationController
  inherit_resources

  actions :index, :show

  layout 'nodes'

  def show
    @node = @way = resource
    show! do |format|
      format.html{ render :template => 'nodes/show' }
    end
  end
end