require 'spec_helper'

describe UpdatingJob do

  before do
    Poi.delete_all
    User.delete_all
  end

  let :poi do
    Factory.create(:poi, :lat => 52.0, :lon => 13.0)
  end

  let :node do
    OpenStreetMap::Node.new(poi.to_osm_attributes)
  end

  let :user do
    Factory(:authorized_user)
  end

  it "should not update lat attribute in updating job" do
    node.lat = 45
    node.lon = 10
    job = UpdatingJob.enqueue(node, user)

    unedited_node = OpenStreetMap::Node.new(poi.to_osm_attributes)
    OpenStreetMap.should_receive(:get_node).and_return(unedited_node)
    OpenStreetMap.any_instance.should_receive(:update_node_with_changeset) { |node, user| node.lat.should eql 52.0; node.lon.should eql 13.0 }
    update_node = job.perform
  end

  it "updates the tags" do
    node.tags['addr:housenumber'] = 99
    job = UpdatingJob.enqueue(node, user)

    unedited_node = OpenStreetMap::Node.new(poi.to_osm_attributes)
    OpenStreetMap.should_receive(:get_node).and_return(unedited_node)
    OpenStreetMap.any_instance.should_receive(:update_node_with_changeset) { |node, user| node.tags['addr:housenumber'].should eql 99 }
    update_node = job.perform
  end

end
