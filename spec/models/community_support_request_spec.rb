require 'spec_helper'

describe CommunitySupportRequest do
  it "validates presence of name, email and message" do
    community_support_request = CommunitySupportRequest.new("Holger", "holger@example.com", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.")
    expect(community_support_request.valid?).to be true
  end
end
