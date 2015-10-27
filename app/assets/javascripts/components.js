//= require_self
//= require react_ujs
//= require i18n.js

global.React          = require('react');
global.ReactDOM       = require('react-dom');

global.Translation    = require('./components/common.i18n.js.jsx');
global.Select       = require('./components/common.select.js.jsx');

global.Photon         = require('./components/photon.js.jsx');

global.WidgetForm     = require('./components/widget.form.js.jsx');
global.WidgetEmbed    = require('./components/widget.embed.js.jsx');
global.WidgetPreview  = require('./components/widget.preview.js.jsx');
global.Widget         = require('./components/widget.js.jsx');
