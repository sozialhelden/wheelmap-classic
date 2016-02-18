require 'rails_helper'

SUPPORTED_LANGUAGES = "de;en;es;fr;it;is"

shared_examples "switch language manually" do |language, url|
  describe "Switch language manually to #{language}" do
    before do
      Capybara.current_session.driver.header("Accept-Language", SUPPORTED_LANGUAGES)
      visit url
    end
    it "has #{language} locale" do
      expect(I18n.locale).to eq language.to_sym
    end
  end
end

describe "Locale feature" do
  before do
    supported_languages = SUPPORTED_LANGUAGES.split(';')
    I18n.available_locales = supported_languages
  end

  after do
    I18n.locale = I18n.default_locale
  end

  describe "Languages in wheelmap" do
    before do
      Capybara.current_session.driver.header("Accept-Language", SUPPORTED_LANGUAGES)
      visit '/map'
    end

    describe "sets preferred language" do
      let(:languages)  { "de-DE;de;en" }

      it "has locale :de" do
        expect(I18n.locale).to eq :de
      end
    end

    describe "has a fallback for default language when supported language is not available" do
      let(:languages) { "be;pt" }

      it "has locale :de" do
        expect(I18n.locale).to eq :de
      end
    end

    it_behaves_like "switch language manually", "de", '/map'
    it_behaves_like "switch language manually", "es", '/es'
    it_behaves_like "switch language manually", "en", '/en'
  end
end
