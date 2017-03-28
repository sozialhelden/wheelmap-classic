# encoding: UTF-8
require 'spec_helper'

describe UserMailer do
  let :user do
    FactoryGirl.create(:user, email: 'test@example.org')
  end

  subject do
    UserMailer.welcome(user)
  end

  describe 'User signed up' do
    it { is_expected.to deliver_to 'test@example.org' }
    it { is_expected.to have_subject 'Willkommen bei wheelmap.org' }
    it { is_expected.to have_body_text(/herzlich Willkommen bei Wheelmap.org!/) }

    # it "should contain link to disable notifications." do
    #   subject.should have_body_text(/http:\/\/flatst.dev\/en\/profile\/#{user.id}\/edit/)
    # end
  end
end
