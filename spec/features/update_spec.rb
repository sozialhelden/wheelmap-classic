require 'rails_helper'
require 'shared_context/omniauth'

describe 'Find, update and create nodes via API' do
  include_context 'OmniAuth'
  let(:poi) { create(:poi, name: 'horst', osm_id: 345, region: nil, tags: { 'foo' => 'bar' }) }
  let!(:user) { create(:authorized_user, email: 'editor@wheelmap.org', password: '123456', password_confirmation: '123456', confirmed_at: '10.10.1999', osm_id: '174', oauth_token: 'oauth_token', oauth_secret: 'oauth_secret') }
  let(:new_node_values) do
    {
      node_street: 'Hühnerpfad',
      node_housenumber: 99,
      node_postcode: 11_122,
      node_city: 'Wienerwald',
      node_website: 'http://wienerwald.de',
      node_phone: '+49 800 123344'
    }
  end

  before do
    Poi.delete_all

    visit new_user_session_path
    visit '/users/auth/osm'
    visit '/users/auth/osm/callback'
    visit node_path(poi)
  end

  describe 'update a node' do
    before do
      first(:link, 'Bearbeiten').click
      new_node_values.each do |field, value|
        fill_in(field, with: value)
      end
      click_button 'node_submit'
    end

    specify "the current page is poi's page" do
      expect(page.current_path).to eq node_path(poi)
    end

    specify 'an update tags job has been enqueued' do
      expect(Delayed::Job.count).to be > 0
    end

    describe 'the job' do
      let(:job) { YAML.load(Delayed::Job.last.handler) }

      it 'has element id' do
        expect(job.send('element_id')).to eq 345
      end

      it 'has type' do
        expect(job.send('type')).to eq 'node'
      end

      it 'has addr:street' do
        expect(job.tags['addr:street']).to eq 'Hühnerpfad'
      end

      it 'has addr:housenumber' do
        expect(job.tags['addr:housenumber']).to eq '99'
      end

      it 'has addr:city' do
        expect(job.tags['addr:city']).to eq 'Wienerwald'
      end

      it 'has addr:postcode' do
        expect(job.tags['addr:postcode']).to eq '11122'
      end

      it 'has website' do
        expect(job.tags['website']).to eq 'http://wienerwald.de'
      end

      it 'has phone' do
        expect(job.tags['phone']).to eq '+49 800 123344'
      end

      it 'has foo' do
        expect(job.tags['foo']).to eq 'bar'
      end
    end
  end
end
