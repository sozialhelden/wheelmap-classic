require 'spec_helper'

describe PhotoUploader do

  let :photo do
    Factory.build(:photo)
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

  context 'the thumb version' do
    it "should scale down a landscape image to be exactly 100 by 100 pixels" do
      @uploader.thumb.should have_dimensions(100, 100)
    end
  end
end