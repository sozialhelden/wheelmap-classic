//= require react_ujs
//= require js-routes
//= require i18n.js
//= require_self
//= require dist/components

I18n.defaultLocale = 'en';
I18n.mainLocale = 'de';
I18n.locale = document.getElementsByTagName('html')[0].getAttribute('lang');
I18n.fallbacks = true;