class PoiLog < ActiveRecord::Base
	acts_as_api
	include Api::PoiLog
end
