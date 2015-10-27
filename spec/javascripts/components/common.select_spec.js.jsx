describe("React select component", function() {

  var items = [{value: 1, label: 'one'}, {value:2, label: 'two'}];

  it("loads correctly", function() {
    var component = TestUtils.renderIntoDocument(
      <Select options={items} />
    );

    expect(component).to.exist;
  });

  it("renders it children as options", function() {
    var component = TestUtils.renderIntoDocument(
      <Select options={items} />
    );

    var nodes = TestUtils.scryRenderedDOMComponentsWithTag(component, 'option');
    expect(nodes.length).to.equal(2);
  });

});
