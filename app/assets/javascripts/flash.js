/* eslint no-var: "off" */
// refactoring from https://github.com/leonid-shevtsov/cacheable-flash-jquery
var Flash = {};

Flash.data = {};

Flash.transferFromCookies = function () {
  var data = JSON.parse(unescape($.cookie('flash')));

  if (!data) {
    data = {};
  }

  Flash.data = data;

  $.cookie('flash', null, { path: '/' });
};

Flash.writeDataTo = function (name, element, callback) {
  var message;

  element = $(element);

  if (Flash.data[name]) {
    message = Flash.data[name].toString().replace(/\+/g, ' ');

    element.prepend(message);

    if (callback && typeof (callback) === 'function') {
      callback(element);
    } else {
      element.show();
    }
  }
};
