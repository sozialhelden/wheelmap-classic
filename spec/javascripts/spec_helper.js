// Teaspoon includes some support files, but you can use anything from your own support path too.

// PhantomJS (Teaspoons default driver) doesn't have support for Function.prototype.bind, which has caused confusion.
// Use this polyfill to avoid the confusion.

// https://github.com/modeset/teaspoon/commit/c8bbd53b6aba34b0cc768f0b5cb8acbdbc45347e
//= require support/phantomjs-shims.js

//
// You can require your own javascript files here. By default this will include everything in application, however you
// may get better load performance if you require the specific files that are being used in the spec that tests them.
// require app
//
// Deferring execution
// If you're using CommonJS, RequireJS or some other asynchronous library you can defer execution. Call
// Teaspoon.execute() after everything has been loaded. Simple example of a timeout:
//
// Teaspoon.defer = true
// setTimeout(Teaspoon.execute, 1000)
//
// Matching files
// By default Teaspoon will look for files that match _spec.{js,js.coffee,.coffee}. Add a filename_spec.js file in your
// spec path and it'll be included in the default suite automatically. If you want to customize suites, check out the
// configuration in teaspoon_env.rb
//
// Manifest
// If you'd rather require your spec files manually (to control order for instance) you can disable the suite matcher in
// the configuration and use this file as a manifest.
//
// For more information: http://github.com/modeset/teaspoon

//= require 'components.js'

// Configure some more testing goodies.
var chai = require("chai");
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;
