describe("React Translation component", function() {

  var component = null;
  var mockResolver = {
    t: function(key) {
      return key == 'existing.translation.key' ? "a valid translation" : "[missing \""+key+"\" translation]";
    }
  };

  window.I18n = mockResolver;

  it("loads correctly", function() {
    component = TestUtils.renderIntoDocument(
      <Translation scope={'key'}/>
    );

    expect(component).to.exist;
  });

  it("resolves translations", function() {
    var valid_key = 'existing.translation.key';
    component = TestUtils.renderIntoDocument(
      <Translation resolver={mockResolver} scope={valid_key}/>
    );
    expect(component.state['translation']).to.equal('a valid translation');
  });

  it("notifies about missing translations", function() {
    var missing_key = 'missing.key';
    component = TestUtils.renderIntoDocument(
      <Translation resolver={mockResolver} scope={missing_key}/>
    );
    expect(component.state['translation']).to.equal("[missing \""+missing_key+"\" translation]");
  });

});
