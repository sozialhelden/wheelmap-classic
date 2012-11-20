# encoding: UTF-8
Factory.define :photo do |photo|
  include ActionDispatch::TestProcess

  photo.caption ''
  photo.image fixture_file_upload('spec/fixtures/placeholder.jpg')
end