//= require react_ujs
//= require i18n.js

window.React          = require('react');
window.TestUtils      = require('react/addons').addons.TestUtils;
window.ReactDOM       = require('react-dom');

window.Translation    = require('./components/common.i18n.js.jsx');
window.Select       = require('./components/common.select.js.jsx');

window.Photon         = require('./components/photon.js.jsx');

window.WidgetForm     = require('./components/widget.form.js.jsx');
window.WidgetEmbed    = require('./components/widget.embed.js.jsx');
window.WidgetPreview  = require('./components/widget.preview.js.jsx');
window.Widget         = require('./components/widget.js.jsx');
