//= require react_ujs
//= require i18n.js

window.React = require('react');
window.TestUtils = require('react/addons').addons.TestUtils;
window.ReactDOM = require('react-dom');

window.Translation = require('./components/common.i18n.js.jsx');
window.Select = require('./components/common.select.js.jsx');

window.Photon = require('./components/photon.js.jsx');

window.EmbedWidgetForm = require('./components/embed.widget.form.js.jsx');
window.EmbedWidgetCode = require('./components/embed.widget.code.js.jsx');
window.EmbedWidgetPreview = require('./components/embed.widget.preview.js.jsx');
window.EmbedWidget = require('./components/embed.widget.js.jsx');

window.NodesNewWidget = require('./components/nodes.new_widget.js.jsx');
window.NodesNewWidgetHeader = require('./components/nodes.new_widget.header.js.jsx');