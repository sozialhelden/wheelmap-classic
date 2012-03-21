require 'spec_helper'

describe UpdateSingleAttributeJob do
  let(:user) { Factory.create(:authorized_user) }

  context "enqueue class method" do

    it "creates and enqueues a job" do
      attributes = mock()
      node_id = 1
      lambda {
        UpdateSingleAttributeJob.enqueue(node_id, user, attributes)
      }.should change(Delayed::Job, :count).by(1)
    end
  end

  context "perform" do
    it "saves the node if data changes" do
      client = mock()
      @api = mock()
      job = UpdateSingleAttributeJob.new(1, user, client, { 'wheelchair' => 'yes' })
      OpenStreetMap::Api.should_receive(:new).with(client).and_return(@api)

      node = OpenStreetMap::Node.new(:tag => { 'wheelchair' => 'no' })

      @api.should_receive(:find_node).with(1).and_return(node)
      @api.should_receive(:save).with(node)

      job.perform
    end

    it "does not save the node if data is not changed" do
      client = mock()
      @api = mock()
      job = UpdateSingleAttributeJob.new(1, user, client, { 'wheelchair' => 'no' })
      OpenStreetMap::Api.should_receive(:new).with(client).and_return(@api)

      node = OpenStreetMap::Node.new(:tag => { 'wheelchair' => 'no' })

      @api.should_receive(:find_node).with(1).and_return(node)
      @api.should_not_receive(:save).with(node)

      job.perform
    end
  end

  # context "integration" do
  #   xit "does not update the node if wheelchair state is same" do
  #     client = OpenStreetMap::OauthClient.new(user.access_token)
  #     attributes = { 'wheelchair' => 'yes' }
  #     job = UpdateSingleAttributeJob.new(1, user, client, attributes)
  #     stub_request(:get, "http://api06.dev.openstreetmap.org/api/0.6/node/1").
  #              to_return(:status => 200, :body => '<?xml version="1.0" encoding="UTF-8"?>
  #              <osm version="0.6" generator="OpenStreetMap server">
  #                <node id="1" lat="68.3893433" lon="16.8725128" version="1" changeset="14" user="Petter Reinholdtsen" uid="24" visible="true" timestamp="2005-05-03T11:14:13Z">
  #                <tag k="wheelchair" v="yes"/></node></osm>', :headers => { "Content-Type" => "text/xml; charset=utf-8" })
  #     job.perform
  #   end
  #
  #   xit "updates the node if wheelchair state is different, no cs open" do
  #     client = OpenStreetMap::OauthClient.new(user.access_token)
  #     attributes = { 'wheelchair' => 'no' }
  #     job = UpdateSingleAttributeJob.new(1, user, client, attributes)
  #     stub_request(:get, "http://api06.dev.openstreetmap.org/api/0.6/node/1").
  #       to_return(:status => 200, :body => '<?xml version="1.0" encoding="UTF-8"?>
  #       <osm version="0.6" generator="OpenStreetMap server">
  #       <node id="1" lat="68.3893433" lon="16.8725128" version="1" changeset="14" user="Petter Reinholdtsen" uid="24" visible="true" timestamp="2005-05-03T11:14:13Z">
  #       <tag k="wheelchair" v="yes"/></node></osm>', :headers => { "Content-Type" => "text/xml; charset=utf-8" })
  #
  #     stub_request(:get, "http://api06.dev.openstreetmap.org/api/0.6/user/details").
  #       to_return(:status => 200, :body => '<osm version="0.6" generator="OpenStreetMap server">
  #       <user display_name="freundchen" account_created="2012-02-08T13:29:09Z" id="605">
  #       <description/>
  #       <contributor-terms agreed="true" pd="false"/>
  #       <languages>
  #       <lang>de-DE</lang>
  #       <lang>de</lang>
  #       <lang>en-US</lang>
  #       <lang>en</lang>
  #       </languages>
  #       </user>
  #       </osm>', :headers => { "Content-Type" => "text/xml; charset=utf-8" })
  #
  #     stub_request(:get, "http://api06.dev.openstreetmap.org/api/0.6/changesets?open=true&user=605").
  #       to_return(:status => 200, :body => '<?xml version="1.0" encoding="UTF-8"?>
  #       <osm version="0.6" generator="OpenStreetMap server"/>', :headers => { "Content-Type" => "text/xml; charset=utf-8" })
  #
  #     changeset_id = 111
  #     stub_request(:put, "http://api06.dev.openstreetmap.org/api/0.6/changeset/create").
  #       with(:body => "<?xml version=\"1.0\" encoding=\"UTF-8\"?><osm><changeset min_lat=\"0.0\" min_lon=\"0.0\" max_lat=\"0.0\" max_lon=\"0.0\" uid=\"0\"><tag k=\"created_by\" v=\"osm for ruby\"/></changeset></osm>").
  #       to_return(:status => 200, :body => "#{changeset_id}", :headers => { "Content-Type" => "text/plain; charset=utf-8" })
  #
  #     stub_request(:get, "http://api06.dev.openstreetmap.org/api/0.6/changeset/#{changeset_id}").
  #       to_return(:status => 200, :body => '<osm version="0.6" generator="OpenStreetMap server">
  #       <changeset id="14702" user="freundchen" uid="605" created_at="2012-03-21T16:44:10Z" open="true">
  #       <tag k="created_by" v="osm for ruby"/></changeset></osm>', :headers => { "Content-Type" => "text/xml; charset=utf-8" })
  #
  #     stub_request(:put, "http://api06.dev.openstreetmap.org/api/0.6/node/1").
  #       to_return(:status => 200, :body => "", :headers => { "Content-Type" => "text/plain; charset=utf-8" })
  #     job.perform
  #   end
  # end

end
