Given /^the following languages are supported "([^"]*)"$/ do |languages|
  supported_languages = languages.split(';')
  I18n.available_locales = supported_languages
end

Given /^my browser supports the following languages "([^"]*)"$/ do |languages|
  headers("Accept-Language", languages) # "en;en-us" # or whatever value you need for testing
end

Given /^my locale is "([^"]*)"$/ do |locale|
  I18n.locale = locale.to_sym
end

Given /^my locale should be "([^"]*)"$/ do |locale|
  I18n.locale.should == locale.to_sym
end