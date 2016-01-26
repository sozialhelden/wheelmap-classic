require 'spec_helper'

describe User do

  subject do
    FactoryGirl.create(:user)
  end

  context "validations" do

    subject do
      FactoryGirl.create(:user, :email => "foo@bar.org", :password => "secret", :password_confirmation => "secret")
    end

    it { is_expected.to be_valid }

    it "should be valid without password" do
      subject.password = nil
      subject.password_confirmation = nil
      expect(subject).to be_valid
    end

    it "should be valid without email" do
      subject.password = nil
      subject.password_confirmation = nil
      subject.email = nil
      expect(subject).to be_valid
    end

    it "should not be valid without password but with email when saving first time" do
      subject.password = nil
      subject.password_confirmation = nil
      subject.first_time = '1'
      subject.email = 'email@example.com'

      expect(subject).not_to be_valid
    end

    it "should not be valid with password but without email" do
      subject.password = 'a_password'
      subject.password_confirmation = 'a_password'
      subject.email = ''
      expect(subject).not_to be_valid
    end


    it "should not be valid with password but no email" do
      @user = FactoryGirl.build(:user, :email => nil, :password => 'password')
      expect(@user).not_to be_valid
      expect(@user.errors[:email].size).to eq(1)
      # expect(@user).to have(1).error_on(:email)
    end

    it "should not be possible to save a user with a short password" do
      subject.password = 'short'
      subject.password_confirmation = 'short'
      expect(subject).not_to be_valid
    end

  end

  it "should revoke the oauth credentials" do
    @user = FactoryGirl.create(:authorized_user)
    @user.revoke_oauth_credentials
    @user.reload
    expect(@user.oauth_token).to be_nil
    expect(@user.oauth_secret).to be_nil
  end

  context "confirmation" do

    subject do
      FactoryGirl.create(:user, :email => 'horst@wheelmap.de')
    end

    before do
      ActionMailer::Base.deliveries.clear
    end

    it "should not send confirmation instructions on create" do
      @user = FactoryGirl.create(:user, :email => 'horst@wheelmap.de')
      expect(ActionMailer::Base.deliveries.size).to eql 0
    end

    it "should send confirmation instructions after changing the email" do
      expect(subject).to receive(:send_email_confirmation)
      subject.update_attribute(:email, 'newemail@example.com')
      expect(subject).not_to be_confirmed
    end

    it "should not send confirmation instructions if email has not been changed" do
      expect(subject).not_to receive(:send_email_confirmation)
      subject.update_attribute(:first_name, 'Horst')
    end

    it "should not send confirmation instructions if email is blank" do
      expect(subject).to receive(:send_email_confirmation)
      subject.update_attribute(:email, nil)
      expect(ActionMailer::Base.deliveries.size).to eql 0
      expect(subject).not_to be_confirmed
    end

    it "should send an actual mail when calling send_email_confirmation and email set" do
      subject.send_email_confirmation
      expect(ActionMailer::Base.deliveries.size).to eql 1
    end

    it "should not send an mail when email is missing" do
      subject.email = nil
      subject.send_email_confirmation
      expect(ActionMailer::Base.deliveries.size).to eql 0
    end

    it "should have subject line in confirmation email" do
      subject.send_email_confirmation
      expect(ActionMailer::Base.deliveries.first.subject).to eql I18n.t('devise.mailer.confirmation_instructions.subject')
    end

    it "should send email to users email address" do
      expect(subject.email).not_to be_nil
      subject.send_email_confirmation
      expect(ActionMailer::Base.deliveries.first.to.first).to eql subject.email
    end
  end

  context "authentication" do

    subject do
      @user = FactoryGirl.create(:user, :email => "foo@bar.org", :password => "secret", :password_confirmation => "secret")
    end

    it "should succeed with an existing user and a valid password" do
      expect(User.authenticate("foo@bar.org", "secret")).to eql(@user)
    end

    it "should not succeed with an existing user and an invalid password" do
      expect(User.authenticate("foo@bar.org", "typo")).to be_nil
    end

    it "should not succeed without an existing user" do
      expect(User.authenticate("foo@bar.orx", "secret")).to be_nil
    end
  end

  context "validations" do

    subject do
      FactoryGirl.create(:user, :email => "foo@bar.org", :password => "secret", :password_confirmation => "secret")
    end

    it "should not be possible to save a user with a short password" do
      subject.password = 'short'
      subject.password_confirmation = 'short'
      expect(subject).not_to be_valid
    end
  end

  context "callbacks" do

    before do
      ActionMailer::Base.deliveries = []
    end

    subject do
      FactoryGirl.create(:user)
    end

    it "should send email after destroy" do
      subject.destroy
      expect(ActionMailer::Base.deliveries.size).to eql 1
    end
  end

  context "methods" do

    subject do
      FactoryGirl.build(:user, email: nil)
    end

    it "should show first and last name when given" do
      subject.first_name = 'Chris'
      subject.last_name = 'Tucker'
      expect(subject.full_name).to eql 'Chris Tucker'
    end

    it "should show first name when given" do
      subject.first_name = 'Chris'
      expect(subject.full_name).to eql 'Chris'
    end


    it "should show last name when given" do
      subject.last_name = 'Tucker'
      expect(subject.full_name).to eql 'Tucker'
    end

    it "should show id if name is mising" do
      subject.osm_id = 123
      expect(subject.full_name).to eql "123"
    end

    it "should be true that user provided email for the first time" do
      subject.update_attributes(email: 'horst@example.com')
      expect(subject.email_provided_for_the_first_time?).to be_truthy
    end

    it "should not be true that user provided email for the first time" do
      subject.update_attributes(email: '')
      expect(subject.email_provided_for_the_first_time?).to be_falsey
    end

    it "should not be true that user provided email for the first time" do
      subject.update_attributes(first_name: 'Heinrich')
      expect(subject.email_provided_for_the_first_time?).to be_falsey
    end

  end
end
