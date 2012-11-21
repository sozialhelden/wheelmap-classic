# encoding: UTF-8
Factory.define :photo do |p|
  include ActionDispatch::TestProcess

  p.caption ''
  p.image fixture_file_upload('spec/fixtures/placeholder.jpg')
  p.association :user
  p.association :poi
end