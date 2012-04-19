require 'spec_helper'

describe User do

  subject do
    Factory.create(:user)
  end

  it { should be_valid }

  it "should be valid without password" do
    subject.password = nil
    subject.password_confirmation = nil
    subject.should be_valid
  end

  it "should be valid without email" do
    subject.email = nil
    subject.should be_valid
  end

  it "should revoke the oauth credentials" do
    @user = Factory.create(:authorized_user)
    @user.revoke_oauth_credentials
    @user.reload
    @user.oauth_token.should be_nil
    @user.oauth_secret.should be_nil
  end

  context "authentication" do

    before(:each) do
      @user = Factory.create(:user, :email => "foo@bar.org", :password => "secret", :password_confirmation => "secret")
    end

    it "should succeed with an existing user and a valid password" do
      User.authenticate("foo@bar.org", "secret").should eql(@user)
    end

    it "should not succeed with an existing user and an invalid password" do
      User.authenticate("foo@bar.org", "typo").should be_nil
    end

    it "should not succeed without an existing user" do
      User.authenticate("foo@bar.orx", "secret").should be_nil
    end
  end

  context "validations" do

    subject do
      Factory(:user, :email => "foo@bar.org", :password => "secret", :password_confirmation => "secret")
    end

    it "should not be possible to save a user with a short password" do
      subject.password = 'short'
      subject.password_confirmation = 'short'
      subject.should_not be_valid
    end
  end

  context "callbacks" do

    before do
      ActionMailer::Base.deliveries = []
    end

    subject do
      Factory(:user)
    end

    it "should send email after destroy" do
      subject.destroy
      ActionMailer::Base.deliveries.size.should eql 1
    end
  end
end
