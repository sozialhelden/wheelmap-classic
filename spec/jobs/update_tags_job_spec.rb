require 'spec_helper'

describe UpdateTagsJob do

  before do
    Poi.delete_all
    User.delete_all
  end

  let(:poi)       { Factory.create(:poi, :lat => 52.0, :lon => 13.0) }
  let(:node)      { Rosemary::Node.new(poi.to_osm_attributes) }
  let(:user)      { Factory(:authorized_user) }
  let(:changeset) { Rosemary::Changeset.new(:id => 12345) }
  let(:unedited_node) { Rosemary::Node.new(:tags => { 'addr:housenumber' => 10 }) }

  subject { UpdateTagsJob.enqueue(1, 'node', { 'addr:housenumber' => 99 }, user) }


  it "should not update lat attribute in updating job" do
    node.lat, node.lon = 45, 10

    job = UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, poi.tags, user)

    unedited_node = Rosemary::Node.new(poi.to_osm_attributes)
    api = mock(:find_or_create_open_changeset => changeset)

    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).with('node', node.id.abs).and_return(unedited_node)
    api.should_receive(:save) { |node, _| node.lat.should eql 52.0; node.lon.should eql 13.0 }
    update_node = job.perform
  end

  it "updates the tags" do

    job = UpdateTagsJob.enqueue(1, 'node', { 'addr:housenumber' => 99 }, user)

    api = mock(:find_or_create_open_changeset => changeset)

    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).and_return(unedited_node)
    api.should_receive(:save) { |node, _| node.tags['addr:housenumber'].should eql 99 }
    update_node = subject.perform
  end

  it "tries to reuse the users changeset" do
    api = mock()

    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).and_return(unedited_node)

    api.should_receive(:find_or_create_open_changeset).with(user.changeset_id, anything()).and_return(changeset)

    api.should_receive(:save) do |node, another_changeset|
      node.tags['addr:housenumber'].should eql 99
      another_changeset.should == changeset
    end

    update_node = subject.perform
  end

  it "updates the users' changeset id" do
    api = mock(:find_or_create_open_changeset => changeset)
    user.changeset_id = changeset.id + 1

    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).and_return(unedited_node)
    api.should_receive(:save)

    update_node = subject.perform

    user.reload.changeset_id.should == changeset.id
  end

end
