require 'rails_helper'

describe UpdateTagsJob do
  before do
    Poi.delete_all
    User.delete_all
  end

  let(:poi)       { FactoryGirl.create(:poi, lat: 52.0, lon: 13.0) }
  let(:node)      { Rosemary::Node.new(poi.to_osm_attributes) }
  let(:user)      { FactoryGirl.create(:authorized_user) }
  let(:changeset) { Rosemary::Changeset.new(id: 12_345) }
  let(:unedited_node) { Rosemary::Node.new(tag: { 'addr:housenumber' => 10, 'amenity' => 'pub' }) }
  let(:updated_poi) { FactoryGirl.create(:poi, tags: {
                        "name": "Sakana",
                        "amenity": "restaurant",
                        "cuisine": "japanese",
                        "addr:city": "Berlin",
                        "wheelchair": "no",
                        "addr:street": "Pestalozzistraße",
                        "addr:suburb": "Charlottenburg",
                        "addr:country": "DE",
                        "addr:postcode": "10625",
                        "addr:housenumber": "106",
                        "wheelchair:description": "Stufe am Eingang, aber rollstuhlgerechtes WC"
                        }
                      )
                    }
  let(:updated_node) { Rosemary::Node.new(tag: { 'wheelchair:description'=> 'Stufe am Eingang, aber rollstuhlgerechtes WC' }) }
  # let(:updated_node) { Rosemary::Node.new(tag: {}) }

  it 'should fail the job when element cannot be found' do
    UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, poi.tags, user, 'update_iphone')
    api = double(find_or_create_open_changeset: changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).with('node', node.id.abs).and_raise(Rosemary::NotFound.new('NOT FOUND'))
    expect(api).not_to receive(:save)
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 0
    expect(failures).to eql 1
  end

  it 'should fail the job if api is not reachable' do
    UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, poi.tags, user, 'update_iphone')
    api = double(find_or_create_open_changeset: changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).with('node', node.id.abs).and_raise(Rosemary::Unavailable.new('Unavailable'))
    expect(api).not_to receive(:save)
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 0
    expect(failures).to eql 1
  end

  it 'should not update the node when nothing has been changed' do
    UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, poi.tags, user, 'update_iphone')
    unedited_node = Rosemary::Node.new(poi.to_osm_attributes)
    api = double(find_or_create_open_changeset: changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).with('node', node.id.abs).and_return(unedited_node)
    expect(api).not_to receive(:save)
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql  1
    expect(failures).to eql 0
  end

  it 'should not update lat attribute in updating job' do
    node.lat = 45
    node.lon = 10

    # change at least one tag to trigger the save action
    tags = poi.tags
    UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, tags.merge('access' => 'public'), user, 'update_iphone')

    unedited_node = Rosemary::Node.new(poi.to_osm_attributes)
    api = double(find_or_create_open_changeset: changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)

    expect(api).to receive(:find_element).with('node', node.id.abs).and_return(unedited_node)
    expect(api).to receive(:save) { |node, _|
      expect(node.lat).to eql 52.0
      expect(node.lon).to eql 13.0
    }
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0
  end

  it 'increments the counter' do
    UpdateTagsJob.enqueue(1, 'node', { 'addr:housenumber' => 99 }, user, 'update_iphone')
    api = double(find_or_create_open_changeset: changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).and_return(unedited_node)
    expect(api).to receive(:save) { |node, _| expect(node.tags['addr:housenumber']).to eql 99 }
    expect(Counter).to receive(:increment).with('update_iphone')
    expect_any_instance_of(User).to receive(:increment!).with(:edit_counter)
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0
  end

  it 'updates tag counter' do
    UpdateTagsJob.enqueue(poi.id.abs, 'node', { 'wheelchair' => 'no' }, user, 'update_iphone')
    api = double(find_or_create_open_changeset: changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).and_return(unedited_node)
    expect(api).to receive(:save)
    expect_any_instance_of(User).to receive(:increment!).with(:tag_counter)
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0
  end

  it 'does not update tag counter when node did not change' do
    UpdateTagsJob.enqueue(poi.id.abs, poi.osm_type, poi.tags, user, 'update_iphone')
    unedited_node = Rosemary::Node.new(poi.to_osm_attributes)
    api = double(find_or_create_open_changeset: changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).with('node', node.id.abs).and_return(unedited_node)
    expect(Counter).not_to receive(:increment)
    expect_any_instance_of(User).not_to receive(:increment!)
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0
  end

  it 'deletes tags from unedited node' do
    expect(unedited_node.tags['addr:housenumber']).not_to be_blank
    UpdateTagsJob.enqueue(poi.id.abs, 'node', { 'wheelchair' => 'no' }, user, 'update_iphone', 'amenity' => 'pub')
    api = double(find_or_create_open_changeset: changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).and_return(unedited_node)
    expect(api).to receive(:save)
    successes, failures = Delayed::Worker.new.work_off
    # unedited_node.tags["amenity"].should be_blank

    expect(successes).to eql 1
    expect(failures).to eql 0
  end

  it 'updates the tags' do
    UpdateTagsJob.enqueue(1, 'node', { 'addr:housenumber' => 99 }, user, 'update_iphone')

    api = double(find_or_create_open_changeset: changeset)

    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).and_return(unedited_node)
    expect(api).to receive(:save) { |node, _| expect(node.tags['addr:housenumber']).to eql 99 }
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0
  end

  it 'returns wheelchair tags data from osm' do
    example_poi = FactoryGirl.build(:poi)
    example_poi.tags = { 'name' => 'name' }
    example_poi.save!

    UpdateTagsJob.enqueue(example_poi.id.abs, example_poi.osm_type, example_poi.tags, user, 'update_iphone', {'wheelchair:description' => true })
    api = double(find_or_create_open_changeset: changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).and_return(updated_node)
    expect(api).to receive(:update).and_return(changeset)
    expect(api).to receive(:save) { |node, _|
      # expect(node.tags["wheelchair:description"]).to eql 'Stufe am Eingang, aber rollstuhlgerechtes WC'
      # expect(node.id.abs).to eq(26735763)
    }
    # expect(api).to receive(:save) { |node, _| expect(node.tags['wheelchair:description']).to eql 'Stufe am Eingang, aber rollstuhlgerechtes WC' }
    successes, failures = Delayed::Worker.new.work_off
    binding.pry
    expect(successes).to eql  1
    expect(failures).to eql 0
  end

  it 'tries to reuse the users changeset' do
    api = double

    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).and_return(unedited_node)

    expect(api).to receive(:find_or_create_open_changeset).with(user.changeset_id, anything).and_return(changeset)

    expect(api).to receive(:save) do |node, another_changeset|
      expect(node.tags['addr:housenumber']).to eql 99
      expect(another_changeset).to eq(changeset)
    end

    UpdateTagsJob.enqueue(poi.id.abs, 'node', { 'addr:housenumber' => 99 }, user, 'update_iphone')

    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0
  end

  it "updates the users' changeset id" do
    api = double(find_or_create_open_changeset: changeset)
    user.changeset_id = changeset.id + 1

    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).and_return(unedited_node)
    expect(api).to receive(:save)

    UpdateTagsJob.enqueue(poi.id.abs, 'node', { 'addr:housenumber' => 99 }, user, 'update_iphone')

    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0

    expect(user.reload.changeset_id).to eq(changeset.id)
  end

  it 'updates both toilet and wheelchair tag in one pass' do
    UpdateTagsJob.enqueue(poi.osm_id, 'node', { 'wheelchair' => 'no', 'toilets:wheelchair' => 'no' }, user, 'update_iphone')
    api = double(find_or_create_open_changeset: changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:find_element).and_return(node)
    expect(api).to receive(:save)
    Delayed::Worker.new.work_off

    p = Poi.find(poi.osm_id)
    expect(p.wheelchair).to eq 'no'
    expect(p.wheelchair_toilet).to eq 'no'
  end

  context 'unknown value' do
    let(:wheelchair_node) { Rosemary::Node.new(tags: { 'addr:housenumber' => 10 }) }

    it 'does not update wheelchair tag' do
      wheelchair_node.add_tags('wheelchair' => 'yes')
      expect(wheelchair_node.tags['wheelchair']).to eql 'yes'

      UpdateTagsJob.enqueue(1, 'node', { 'wheelchair' => 'unknown', 'addr:housenumber' => 99 }, user, 'update_iphone')

      api = double(find_or_create_open_changeset: changeset)

      expect(Rosemary::Api).to receive(:new).and_return(api)
      expect(api).to receive(:find_element).and_return(wheelchair_node)
      expect(api).to receive(:save) do |node, _|
        expect(node.tags['wheelchair']).to eql 'yes'
      end
      successes, failures = Delayed::Worker.new.work_off
      expect(successes).to eql 1
      expect(failures).to eql 0
    end

    it 'does not update wheelchair toilet tag' do
      wheelchair_node.add_tags('toilets:wheelchair' => 'yes')
      expect(wheelchair_node.tags['toilets:wheelchair']).to eql 'yes'

      UpdateTagsJob.enqueue(1, 'node', { 'toilets:wheelchair' => 'unknown', 'addr:housenumber' => 99 }, user, 'update_iphone')

      api = double(find_or_create_open_changeset: changeset)

      expect(Rosemary::Api).to receive(:new).and_return(api)
      expect(api).to receive(:find_element).and_return(wheelchair_node)
      expect(api).to receive(:save) do |node, _|
        expect(node.tags['toilets:wheelchair']).to eql 'yes'
      end
      successes, failures = Delayed::Worker.new.work_off
      expect(successes).to eql 1
      expect(failures).to eql 0
    end
  end
end
