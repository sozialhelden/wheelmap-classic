require 'spec_helper'

describe UpdateSingleAttributeJob do
  context "enqueue class method" do
    let(:user) { create(:authorized_user) }

    it "creates and enqueues a job" do
      node_id = mock()
      attributes = mock()
      mock_job = mock()

      lambda {
        UpdateSingleAttributeJob.enqueue(node_id, user, attributes)
      }.should change(Delayed::Job, :count).by(1)
    end
  end
end
