require 'spec_helper'

describe User do

  subject do
    Factory.create(:user)
  end

  context "validations" do

    subject do
      Factory(:user, :email => "foo@bar.org", :password => "secret", :password_confirmation => "secret")
    end

    it { should be_valid }

    it "should be valid without password" do
      subject.password = nil
      subject.password_confirmation = nil
      subject.should be_valid
    end

    it "should be valid without email" do
      subject.password = nil
      subject.password_confirmation = nil
      subject.email = nil
      subject.should be_valid
    end

    it "should not be valid with password but no email" do
      @user = Factory.build(:user, :email => nil, :password => 'password')
      @user.should_not be_valid
      @user.should have(1).error_on(:email)
    end

    it "should not be possible to save a user with a short password" do
      subject.password = 'short'
      subject.password_confirmation = 'short'
      subject.should_not be_valid
    end

  end

  it "should revoke the oauth credentials" do
    @user = Factory.create(:authorized_user)
    @user.revoke_oauth_credentials
    @user.reload
    @user.oauth_token.should be_nil
    @user.oauth_secret.should be_nil
  end

  context "confirmation" do

    subject do
      Factory.create(:user, :email => 'horst@wheelmap.de')
    end

    before do
      ActionMailer::Base.deliveries.clear
    end

    it "should not send confirmation instructions on create" do
      @user = Factory.create(:user, :email => 'horst@wheelmap.de')
      ActionMailer::Base.deliveries.size.should eql 0
    end

    it "should send confirmation instructions after changing the email" do
      subject.should_receive(:send_email_confirmation)
      subject.update_attribute(:email, 'newemail@example.com')
      subject.should_not be_confirmed
    end

    it "should not send confirmation instructions if email has not been changed" do
      subject.should_not_receive(:send_email_confirmation)
      subject.update_attribute(:first_name, 'Horst')
    end

    it "should not send confirmation instructions if email is blank" do
      subject.should_receive(:send_email_confirmation)
      subject.update_attribute(:email, nil)
      ActionMailer::Base.deliveries.size.should eql 0
      subject.should_not be_confirmed
    end

    it "should send an actual mail when calling send_email_confirmation and email set" do
      subject.send_email_confirmation
      ActionMailer::Base.deliveries.size.should eql 1
    end

    it "should not send an mail when email is missing" do
      subject.email = nil
      subject.send_email_confirmation
      ActionMailer::Base.deliveries.size.should eql 0
    end

    it "should have subject line in confirmation email" do
      subject.send_email_confirmation
      ActionMailer::Base.deliveries.first.subject.should eql I18n.t('devise.mailer.confirmation_instructions.subject')
    end

    it "should send email to users email address" do
      subject.email.should_not be_nil
      subject.send_email_confirmation
      ActionMailer::Base.deliveries.first.to.first.should eql subject.email
    end
  end

  context "authentication" do

    subject do
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

  context "methods" do

    subject do
      Factory.build(:user)
    end

    it "should show first and last name when given" do
      subject.first_name = 'Chris'
      subject.last_name = 'Tucker'
      subject.full_name.should eql 'Chris Tucker'
    end

    it "should show first name when given" do
      subject.first_name = 'Chris'
      subject.full_name.should eql 'Chris'
    end


    it "should show last name when given" do
      subject.last_name = 'Tucker'
      subject.full_name.should eql 'Tucker'
    end

    it "should show id if name is mising" do
      subject.id = 123
      subject.full_name.should eql 123
    end


  end
end
