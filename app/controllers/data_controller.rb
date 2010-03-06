require 'csv'
 
class DataController < ApplicationController
  
  def data
    file = "#{Rails.root}/db/VBB_Berlin_Koordinaten.csv"
    data = "lat	lon	title	description	icon	iconSize	iconOffset"
    # Ccsv.foreach(file) do |rows|
    #   
    #   data << "\n\n\n>>>>#{rows.join(';;;')}<<<<<\n\n\n"
    #   #rows.each do |r|
    #   #  #if r[6] == params[:type]
    #   #    data << "\n\n\n"
    #   #    data << r#[r[1], r[2], r[0], "#{r[3]} #{r[4]}", "/images/#{params[:type]}.png", "28,34", "-8,-8"].join(" ")
    #   #  #end
    #   #end
    # end
    
    CSV.open(file, 'r', ',') do |r|
      if r[6] == params[:type]
        data << "\n"
        data << [r[2], r[1], r[0], "#{r[3]} #{r[4]}", "/images/#{params[:type]}.png", "28,34", "-15,-34"].join("	")
      end
    end
    render :text => data
  end
  
end
