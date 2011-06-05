class Api::Docs::ResourcesController < ApplicationController
  def show
    render :template => "api/docs/resources/#{params[:id]}.html.haml"
  end
  
  def index
    
  end
end