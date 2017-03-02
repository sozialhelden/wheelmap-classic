# encoding: UTF-8
include ActionDispatch::TestProcess
FactoryGirl.define do
  factory :photo do
    caption ''
    image { fixture_file_upload('spec/fixtures/placeholder.jpg') }
    association :user
    association :poi
  end
end
