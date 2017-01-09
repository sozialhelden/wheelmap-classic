require 'rails_helper'

describe CreateNodeJob do

  before do
    User.delete_all
  end

  let(:user)      { FactoryGirl.create(:authorized_user) }
  let(:changeset) { Rosemary::Changeset.new(:id => 12345, :open? => true) }

  subject {
    CreateNodeJob.enqueue(52.4, 13.0, { 'wheelchair' => 'yes', 'amenity' => 'bar', 'name' => 'White horse', 'operator' => 'Adolf Präg GmbH & Co. KG' }, user, 'create_iphone')
  }

  it "should create a Node" do
    api = double(:find_or_create_open_changeset => changeset)

    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:create) do |node, _|
      expect(node.lat).to eql 52.4
      expect(node.lon).to eql 13.0
      expect(node.tags['wheelchair']).to eq 'yes'
      expect(node.tags['amenity']).to eq 'bar'
      expect(node.tags['name']).to eq 'White horse'
      expect(node.tags['operator']).to eq 'Adolf Präg GmbH &amp; Co. KG'
    end
    job = subject
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0
  end

  it "increments the counter" do
    api = double(:find_or_create_open_changeset => changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:create)
    expect_any_instance_of(User).to receive(:increment!).with(:create_counter)
    job = subject
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0
  end

  it "does not increment counter if terms not accepted" do
    user = FactoryGirl.create(:authorized_user, :terms => false)
    job = CreateNodeJob.enqueue(52.4, 13.0, { 'wheelchair' => 'yes', 'amenity' => 'bar', 'name' => 'White horse' }, user, 'create_iphone')
    api = double(:find_or_create_open_changeset => changeset)
    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:create)
    expect_any_instance_of(User).not_to receive(:increment!)
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0
  end


  it "tries to find a changeset for the user" do
    expect(Rosemary::Api).to receive(:new).and_return(api = double())

    expect(api).to receive(:find_or_create_open_changeset).with(user.changeset_id, anything()).and_return(changeset)
    expect(api).to receive(:create).with(anything(), changeset)

    job = subject
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0
  end

  it "updates the users' changeset id" do
    api = double(:find_or_create_open_changeset => changeset)
    user.changeset_id = changeset.id + 1

    expect(Rosemary::Api).to receive(:new).and_return(api)
    expect(api).to receive(:create)

    job = subject
    successes, failures = Delayed::Worker.new.work_off
    expect(successes).to eql 1
    expect(failures).to eql 0

    expect(user.reload.changeset_id).to eq(changeset.id)
  end

  context "unknown value" do

    subject {
      CreateNodeJob.enqueue(52.4, 13.0, { 'wheelchair' => 'unknown', 'toilets:wheelchair' => 'unknown', 'amenity' => 'bar', 'name' => 'White horse' }, user, 'create_iphone')
    }

    it "does not save wheelchair and toilet:wheelchair tag" do

      api = double(:find_or_create_open_changeset => changeset)
      expect(Rosemary::Api).to receive(:new).and_return(api)

      expect(api).to receive(:create) do |node, _|
        expect(node.lat).to eql 52.4
        expect(node.lon).to eql 13.0
        expect(node.tags['wheelchair']).to be_nil
        expect(node.tags['toilets:wheelchair']).to be_nil
        expect(node.tags['amenity']).to eq 'bar'
        expect(node.tags['name']).to eq 'White horse'
      end
      job = subject
      successes, failures = Delayed::Worker.new.work_off
      expect(successes).to eql 1
      expect(failures).to eql 0
    end


  end


end
