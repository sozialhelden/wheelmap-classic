# encoding: UTF-8
include ActionDispatch::TestProcess
FactoryGirl.define do
  factory :photo do |p|

    p.caption ''
    p.image fixture_file_upload('spec/fixtures/placeholder.jpg')
    p.association :user
    p.association :poi
  end
end