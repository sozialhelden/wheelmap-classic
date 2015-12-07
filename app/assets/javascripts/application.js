//= require react_ujs
//= require js-routes
//= require i18n.js
//= require_self
//= require dist/components

I18n.defaultLocale = 'en';
I18n.locale = $('html').attr('lang');
I18n.fallbacks = true;