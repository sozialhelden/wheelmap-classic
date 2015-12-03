require 'spec_helper'

describe UpdateTagsJob do

  before do
    Poi.delete_all
    User.delete_all
  end

  let(:poi)       { FactoryGirl.create(:poi, :lat => 52.0, :lon => 13.0) }
  let(:node)      { Rosemary::Node.new(poi.to_osm_attributes) }
  let(:user)      { FactoryGirl.create(:authorized_user) }
  let(:changeset) { Rosemary::Changeset.new(:id => 12345) }
  let(:unedited_node) { Rosemary::Node.new(:tag => { 'addr:housenumber' => 10, 'amenity' => 'pub' }) }

  subject { UpdateTagsJob.enqueue(poi.id.abs, 'node', { 'addr:housenumber' => 99 }, user, 'update_iphone') }

  it "should fail the job when element cannot be found" do
    job = UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, poi.tags, user, 'update_iphone')
    api = mock(:find_or_create_open_changeset => changeset)
    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).with('node', node.id.abs).and_raise(Rosemary::NotFound.new('NOT FOUND'))
    api.should_not_receive(:save)
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 0
    failures.should eql 1
  end

  it "should fail the job if api is not reachable" do
    job = UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, poi.tags, user, 'update_iphone')
    api = mock(:find_or_create_open_changeset => changeset)
    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).with('node', node.id.abs).and_raise(Rosemary::Unavailable.new('Unavailable'))
    api.should_not_receive(:save)
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 0
    failures.should eql 1

  end

  it "should not update when no changes have been made" do
    job = UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, poi.tags, user, 'update_iphone')
    unedited_node = Rosemary::Node.new(poi.to_osm_attributes)
    api = mock(:find_or_create_open_changeset => changeset)
    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).with('node', node.id.abs).and_return(unedited_node)
    api.should_not_receive(:save)
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0

  end

  it "should not update lat attribute in updating job" do
    node.lat, node.lon = 45, 10

    # change at least one tag to trigger the save action
    tags = poi.tags
    job = UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, tags.merge({'access' => 'public'}), user, 'update_iphone')

    unedited_node = Rosemary::Node.new(poi.to_osm_attributes)
    api = mock(:find_or_create_open_changeset => changeset)
    Rosemary::Api.should_receive(:new).and_return(api)

    api.should_receive(:find_element).with('node', node.id.abs).and_return(unedited_node)
    api.should_receive(:save) { |node, _| node.lat.should eql 52.0; node.lon.should eql 13.0 }
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0

  end

  it "should not update the node when nothing has been changed" do
    job = UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, poi.tags, user, 'update_iphone')

    unedited_node = Rosemary::Node.new(poi.to_osm_attributes)
    api = mock(:find_or_create_open_changeset => changeset)

    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).with('node', node.id.abs).and_return(unedited_node)
    api.should_not_receive(:save)
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0


  end

  it "increments the counter" do
    job = UpdateTagsJob.enqueue(1, 'node', { 'addr:housenumber' => 99 }, user, 'update_iphone')
    api = mock(:find_or_create_open_changeset => changeset)
    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).and_return(unedited_node)
    api.should_receive(:save) { |node, _| node.tags['addr:housenumber'].should eql 99 }
    Counter.should_receive(:increment).with('update_iphone')
    User.any_instance.should_receive(:increment!).with(:edit_counter)
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0

  end

  it "does not update tag counter when node did not change" do
    job = UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, poi.tags, user, 'update_iphone')
    unedited_node = Rosemary::Node.new(poi.to_osm_attributes)
    api = mock(:find_or_create_open_changeset => changeset)
    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).with('node', node.id.abs).and_return(unedited_node)
    Counter.should_not_receive(:increment)
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0

  end


  it "updates tag counter" do
    job = UpdateTagsJob.enqueue(poi.id.abs, 'node', { 'wheelchair' => 'no' }, user, 'update_iphone')
    api = mock(:find_or_create_open_changeset => changeset)
    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).and_return(unedited_node)
    api.should_receive(:save)
    User.any_instance.should_receive(:increment!).with(:tag_counter)
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0
  end

  it "does not update tag counter when node did not change" do
    job = UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, poi.tags, user, 'update_iphone')
    unedited_node = Rosemary::Node.new(poi.to_osm_attributes)
    api = mock(:find_or_create_open_changeset => changeset)
    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).with('node', node.id.abs).and_return(unedited_node)
    Counter.should_not_receive(:increment)
    User.any_instance.should_not_receive(:increment!)
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0
  end

  it "deletes tags from unedited node" do
    unedited_node.tags["addr:housenumber"].should_not be_blank
    job = UpdateTagsJob.enqueue(poi.id.abs, 'node', { 'wheelchair' => 'no' }, user, 'update_iphone', {"amenity" => "pub"} )
    api = mock(:find_or_create_open_changeset => changeset)
    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).and_return(unedited_node)
    api.should_receive(:save)
    successes, failures = Delayed::Worker.new.work_off
    #unedited_node.tags["amenity"].should be_blank

    successes.should eql 1
    failures.should eql 0

  end

  it "updates the tags" do

    job = UpdateTagsJob.enqueue(1, 'node', { 'addr:housenumber' => 99 }, user, 'update_iphone')

    api = mock(:find_or_create_open_changeset => changeset)

    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).and_return(unedited_node)
    api.should_receive(:save) { |node, _| node.tags['addr:housenumber'].should eql 99 }
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0

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
    job = subject
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0

  end

  it "updates the users' changeset id" do
    api = mock(:find_or_create_open_changeset => changeset)
    user.changeset_id = changeset.id + 1

    Rosemary::Api.should_receive(:new).and_return(api)
    api.should_receive(:find_element).and_return(unedited_node)
    api.should_receive(:save)

    job = subject
    successes, failures = Delayed::Worker.new.work_off
    successes.should eql 1
    failures.should eql 0


    user.reload.changeset_id.should == changeset.id
  end

  context "unknown value" do

    let(:wheelchair_node) { Rosemary::Node.new(:tags => { 'addr:housenumber' => 10 }) }

    it "does not update wheelchair tag" do
      wheelchair_node.add_tags( 'wheelchair' => 'yes')
      wheelchair_node.tags["wheelchair"].should eql 'yes'

      job = UpdateTagsJob.enqueue(1, 'node', { 'wheelchair' => 'unknown', 'addr:housenumber' => 99 }, user, 'update_iphone')

      api = mock(:find_or_create_open_changeset => changeset)

      Rosemary::Api.should_receive(:new).and_return(api)
      api.should_receive(:find_element).and_return(wheelchair_node)
      api.should_receive(:save) do |node, _|
        node.tags['wheelchair'].should eql 'yes'
      end
      successes, failures = Delayed::Worker.new.work_off
      successes.should eql 1
      failures.should eql 0

    end

    it "does not update wheelchair toilet tag" do
      wheelchair_node.add_tags( 'toilets:wheelchair' => 'yes')
      wheelchair_node.tags["toilets:wheelchair"].should eql 'yes'

      job = UpdateTagsJob.enqueue(1, 'node', { 'toilets:wheelchair' => 'unknown', 'addr:housenumber' => 99 }, user, 'update_iphone')

      api = mock(:find_or_create_open_changeset => changeset)

      Rosemary::Api.should_receive(:new).and_return(api)
      api.should_receive(:find_element).and_return(wheelchair_node)
      api.should_receive(:save) do |node, _|
        node.tags['toilets:wheelchair'].should eql 'yes'
      end
      successes, failures = Delayed::Worker.new.work_off
      successes.should eql 1
      failures.should eql 0

    end


  end

end
