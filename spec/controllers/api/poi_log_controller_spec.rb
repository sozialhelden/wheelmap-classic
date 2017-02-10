require 'rails_helper'

describe Api::PoiLogController do
  let(:user) { FactoryGirl.create(:authorized_user) }

  describe 'changes stream' do
    def validate_schema(schema_file, json)
      schema = JSON.parse(File.read(schema_file))
      errors = JSON::Validator.fully_validate(schema, json)

      return true if errors.empty?

      errors.each { |error| STDOUT.puts error }
      false
    end

    def json_response
      JSON.parse(response.body)
    end

    context 'poi logger' do
      let(:poi) { create(:poi) }
      let(:log_entry) { PoiLog.last }

      context 'for deleted pois' do
        before do
          poi.destroy
        end

        it 'creates a new log entry for the deleted poi' do
          expect(log_entry.osm_id).to eq poi.osm_id
        end

        it 'creates a new log entry with action = deleted' do
          expect(log_entry.action).to eq('delete')
        end
      end

      context 'for updated pois' do
        before do
          poi.wheelchair = 'yes'
          poi.save
        end

        it 'creates a new log entry for the updated poi' do
          expect(log_entry.osm_id).to eq poi.osm_id
        end

        it 'creates a new log entry with action = updated' do
          expect(log_entry.action).to eq('update')
        end
      end
    end

    context 'with API key' do
      date_today = DateTime.new(2016,2,1,20,0,0)
      date_yesterday = DateTime.new(2016,1,31,20,0,0)

      before :all do
        Poi.delete_all
        PoiLog.delete_all
        Timecop.travel(date_yesterday)
        create_list(:poi_log, 5, action: "update")
        create_list(:poi_log, 5, action: "delete")
        Timecop.travel(date_today)
        create_list(:poi_log, 5, action: "update")
        create_list(:poi_log, 5, action: "delete")
        Timecop.return
      end

      context 'date in the past' do
        before do
          get(:index, { since: date_today.to_date.to_s, api_key: user.authentication_token })
        end

        it "returns 200 status code" do
          expect(response.status).to eq(200)
        end

        context "the JSON response" do
          it "has correct content-type" do
            expect(response.headers["Content-Type"]).to eql("application/json; charset=utf-8")
          end

          it "validates against node stream schema" do
            expect(validate_schema("spec/schema/node_stream.json", json_response)).to be true
          end

          it "contains five updated entries" do
            expect(json_response["pois"].count { |poi| poi["action"] == "update"}).to eq(5)
          end

          it "contains five deleted entries" do
            expect(json_response["pois"].count { |poi| poi["action"] == "delete"}).to eq(5)
          end

          it "contains node changes according to the given date" do
            timestamps = json_response["pois"].map { |poi| DateTime.parse(poi["timestamp"]) }
            expect(timestamps.all? { |timestamp| timestamp >= date_today.to_date }).to be true
          end

          it "has meta key" do
            expect(json_response["meta"]).to_not be nil
          end
        end
      end

      context 'dates in the future' do
        before do
          get(:index, { since: (Date.today + 7.days).to_s, api_key: user.authentication_token })
        end

        it "results in an empty list" do
          expect(json_response["pois"]).to be_empty
        end
      end

      context 'without a date' do
        before do
          get(:index, { api_key: user.authentication_token })
        end

        it "returns 400 status code" do
          expect(response.status).to eq 400
        end

        it "returns error message" do
          expect(json_response["error"].length).to be > 0
        end
      end
    end

    context 'without API key' do
      before do
        get(:index)
      end

      it "returns 401 status code" do
        expect(response.status).to eq(401)
      end

      it "does not return any response data" do
        expect(json_response["pois"]).to be nil
      end
    end
  end
end
