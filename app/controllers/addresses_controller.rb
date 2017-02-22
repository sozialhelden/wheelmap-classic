class AddressesController < ApplicationController
  def index
    @addresses = Address.all
  end
end
