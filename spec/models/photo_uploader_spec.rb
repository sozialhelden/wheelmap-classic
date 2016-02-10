require 'spec_helper'

describe PhotoUploader do

  let :photo do
    @photo ||= FactoryGirl.create(:photo, :process_image_upload => true)
  end

  before do
    PhotoUploader.enable_processing = true
    @uploader = PhotoUploader.new(photo, :image)
    @uploader.store!(File.open(Rails.root.join('spec', 'fixtures', 'placeholder.jpg')))
  end

  after do
    PhotoUploader.enable_processing = false
    @uploader.remove!
  end

  context 'the versions' do

    it "should scale down thumb to be exactly 100 by 100 pixels" do
      # It's 1x1 because of the placeholder.jpg fixture file
      expect(@uploader.thumb).to have_dimensions(100, 100)
    end

    it "should scale down galley to be no larger than 600 by 600 pixels" do
      # It's 1x1 because of the placeholder.jpg fixture file
      expect(@uploader.gallery).to be_no_larger_than(600, 600)
    end
  end
end
