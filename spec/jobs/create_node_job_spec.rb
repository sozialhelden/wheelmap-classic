require 'spec_helper'

describe CreateNodeJob do

  before do
    User.delete_all
  end

  let(:user)      { Factory(:authorized_user) }
  let(:changeset) { Rosemary::Changeset.new(:id => 12345, :open? => true) }

  subject {
    CreateNodeJob.enqueue(52.4, 13.0, { 'wheelchair' => 'yes', 'amenity' => 'bar', 'name' => 'White horse' }, user, 'create_iphone')
  }

  it "should create a Node" do
    api = mock(:find_or_create_open_changeset => changeset)

    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:create) do |node, _|
      node.lat.should eql 52.4
      node.lon.should eql 13.0
      node.tags['wheelchair'].should eq 'yes'
      node.tags['amenity'].should eq 'bar'
      node.tags['name'].should eq 'White horse'
    end
    job = subject
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0
  end

  it "increments the counter" do
    api = mock(:find_or_create_open_changeset => changeset)
    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:create)
    User.any_instance.should_receive(:increment!).with(:create_counter)
    job = subject
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0
  end

  it "does not increment counter if terms not accepted" do
    user = Factory.create(:authorized_user, :terms => false)
    job = CreateNodeJob.enqueue(52.4, 13.0, { 'wheelchair' => 'yes', 'amenity' => 'bar', 'name' => 'White horse' }, user, 'create_iphone')
    api = mock(:find_or_create_open_changeset => changeset)
    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:create)
    User.any_instance.should_not_receive(:increment!)
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0
  end


  it "tries to find a changeset for the user" do
    Rosemary::Api.should_receive(:new).and_return(api = mock())

    api.should_receive(:find_or_create_open_changeset).with(user.changeset_id, anything()).and_return(changeset)
    api.should_receive(:create).with(anything(), changeset)

    job = subject
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0
  end

  it "updates the users' changeset id" do
    api = mock(:find_or_create_open_changeset => changeset)
    user.changeset_id = changeset.id + 1

    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:create)

    job = subject
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0

    user.reload.changeset_id.should == changeset.id
  end

end
