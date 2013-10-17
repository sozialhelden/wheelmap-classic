# encoding: UTF-8
module CategoriesHelper

  def render_json_list
    Category.all.map do |catgory|
      catgory.as_json(:only => [:id, :identifier])
    end.to_json
  end
end