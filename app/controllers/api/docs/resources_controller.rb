class Api::Docs::ResourcesController < ApplicationController
  caches_page :index, :show, gzip: :best_speed

  def show
    render template: "api/docs/resources/#{params[:id]}.html.haml"
  end
end
