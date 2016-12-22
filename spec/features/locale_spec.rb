require 'rails_helper'

SUPPORTED_LANGUAGES = "ar;bg;cs;da;de;el;en;es;fr;hu;is;it;ja;ko;lv;pl;pt;pt_BR;ru;sk;sv;tlh;tr;zh_TW"

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
    it_behaves_like "switch language manually", "en", '/en'
    it_behaves_like "switch language manually", "ar", '/ar'
    it_behaves_like "switch language manually", "bg", '/bg'
    it_behaves_like "switch language manually", "cs", '/cs'
    it_behaves_like "switch language manually", "da", '/da'
    it_behaves_like "switch language manually", "el", '/el'
    it_behaves_like "switch language manually", "es", '/es'
    it_behaves_like "switch language manually", "fr", '/fr'
    it_behaves_like "switch language manually", "hu", '/hu'
    it_behaves_like "switch language manually", "is", '/is'
    it_behaves_like "switch language manually", "it", '/it'
    it_behaves_like "switch language manually", "ja", '/ja'
    it_behaves_like "switch language manually", "ko", '/ko'
    it_behaves_like "switch language manually", "lv", '/lv'
    it_behaves_like "switch language manually", "pl", '/pl'
    it_behaves_like "switch language manually", "pt", '/pt'
    it_behaves_like "switch language manually", "pt_BR", '/pt_BR'
    it_behaves_like "switch language manually", "ru", '/ru'
    it_behaves_like "switch language manually", "sk", '/sk'
    it_behaves_like "switch language manually", "sv", '/sv'
    it_behaves_like "switch language manually", "tlh", '/tlh'
    it_behaves_like "switch language manually", "tr", '/tr'
    it_behaves_like "switch language manually", "zh_TW", '/zh_TW'
  end
end
