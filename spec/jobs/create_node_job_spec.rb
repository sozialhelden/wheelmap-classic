require 'spec_helper'

describe CreateNodeJob do

  before do
    User.delete_all
  end

  let :user do
    Factory(:authorized_user)
  end

  it "should create a Node" do
    job = CreateNodeJob.enqueue(52.4, 13.0, { 'wheelchair' => 'yes', 'amenity' => 'bar', 'name' => 'White horse' }, user)

    api = mock()

    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:create) do |node|
      node.lat.should eql 52.4
      node.lon.should eql 13.0
      node.tags['wheelchair'].should eq 'yes'
      node.tags['amenity'].should eq 'bar'
      node.tags['name'].should eq 'White horse'
    end
    job.perform
  end
end
