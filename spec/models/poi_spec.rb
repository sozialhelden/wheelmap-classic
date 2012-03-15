require 'spec_helper'
describe Poi do


  describe 'associations' do
  end

  describe 'validations' do
    subject{ Factory.build(:poi)}
    it { should be_valid }
  end

  context "inital state" do
    subject { Poi.new }
    it { should_not be_relevant }

    it "is initially nil" do
      subject.type.should be_nil
    end
  end

  context "type" do
    let (:poi) { Poi.new :name => "foo", :lat => 52.0, :lon => 13.0 }

    # check each of the types offered in the create-form leads to a valid poi
    Tags.keys.map(&:to_s).each do |k|
      it "#{k} is a valid type" do
        poi.type = k
        poi.should be_valid
      end
    end
  end


  # describe 'scopes' do
  #   should_have_scope :fully_accessible, :conditions => {:status => 1}
  #   should_have_scope :limited_accessible, :conditions => {:status => 2}
  #   should_have_scope :not_accessible, :conditions => {:status => 4}
  #   should_have_scope :unknown_accessibility, :conditions => {:status => 8}
  #
  # end
end