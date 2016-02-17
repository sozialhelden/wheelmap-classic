require 'rails_helper'

describe "Locale feature" do
  let(:languages) { "de;en;es;fr;it;is" }
  before do
    supported_languages = languages.split(';')
    I18n.available_locales = supported_languages
  end

  after do
    I18n.locale = I18n.default_locale
  end

  describe "wheelmap in preferred language" do
    before do
      Capybara.current_session.driver.header("Accept-Language", languages)
      visit '/map'
    end

    describe "Show wheelmap in preferred language" do
      let(:languages)  { "de-DE;de;en" }

      it "has locale de" do
        expect(I18n.locale).to eq :de
      end
    end

    describe "Fallback to default language when supported language is not available" do
      let(:languages) { "be;pt" }

      it "has locale de" do
        expect(I18n.locale).to eq :de
      end
    end

    describe "Switch language manually to german" do
      before do
        Capybara.current_session.driver.header("Accept-Language", languages)
        visit root_path
      end
      it 'has german locale' do
        expect(I18n.locale).to eq :de
      end
    end

    describe "Switch language manually to spanish" do
      before do
        Capybara.current_session.driver.header("Accept-Language", languages)
        visit '/es'
      end

      it 'has spanish locale' do
        expect(I18n.locale).to eq :es
      end
    end

    describe "Switch language manually to english" do
      before do
        Capybara.current_session.driver.header("Accept-Language", languages)
        visit '/en'
      end

      it 'has spanish locale' do
        expect(I18n.locale).to eq :en
      end
    end
  end
end
