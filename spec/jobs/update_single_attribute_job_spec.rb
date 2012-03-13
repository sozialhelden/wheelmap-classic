require 'spec_helper'

describe UpdateSingleAttributeJob do
  context "enqueue class method" do
    let(:user) { create(:authorized_user) }

    it "creates and enqueues a job" do
      node_id = mock()
      attributes = mock()
      mock_job = mock()


      UpdateSingleAttributeJob.enqueue(node_id, user, attributes)
      Delayed::Job.should_receive(:enqueue)#.with(an_instance_of(UpdateSingleAttributeJob))
    end
  end
end
