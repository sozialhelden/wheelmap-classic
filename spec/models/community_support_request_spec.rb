require 'spec_helper'

describe CommunitySupportRequest do
  it 'validates presence of name, email and message' do
    community_support_request = CommunitySupportRequest.new(name: 'Holger', email: 'holger@example.com', message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.')
    expect(community_support_request.valid?).to be true
  end

  context 'with invalid attributes' do
    it 'is not valid when name is missing' do
      community_support_request = CommunitySupportRequest.new(email: 'holger@example.com', message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.')
      expect(community_support_request.valid?).to be false
    end

    it 'is not valid when email is missing' do
      community_support_request = CommunitySupportRequest.new(name: 'Holger', message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.')
      expect(community_support_request.valid?).to be false
    end

    it 'is not valid when message is missing' do
      community_support_request = CommunitySupportRequest.new(name: 'Holger', email: 'holger@example.com')
      expect(community_support_request.valid?).to be false
    end

    it 'is not valid when email has invalid format' do
      community_support_request = CommunitySupportRequest.new(name: 'Holger', email: 'holger$example.com', message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.')
      expect(community_support_request.valid?).to be false
    end
  end
end
