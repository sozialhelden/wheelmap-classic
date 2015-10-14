
// require 'components/translations.js.jsx'

var React = require('react');
var TestUtils = require('react/addons').addons.TestUtils;
var Translations = require('../../../app/assets/javascripts/components/translations.js.jsx');

console.log(Translations);

describe("My great feature", function() {

  var component = null;

  beforeEach(function(){
    var component = TestUtils.renderIntoDocument(
      <Translations defaultKey="some.translation"/>
    );
  });


  it("will change the world", function() {
    expect(component).not.toBe(null);
  });

});
