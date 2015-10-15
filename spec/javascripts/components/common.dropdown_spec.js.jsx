describe("React Dropdown component", function() {

  var items = [{id: 1, name: 'one'}, {id:2, name: 'two'}];

  it("loads correctly", function() {
    var component = TestUtils.renderIntoDocument(
      <Dropdown items={items} />
    );

    expect(component).to.exist;
  });

  it("renders it children as options", function() {
    var component = TestUtils.renderIntoDocument(
      <Dropdown items={items} />
    );

    var nodes = TestUtils.scryRenderedDOMComponentsWithTag(component, 'option');
    expect(nodes.length).to.equal(2);
  });

  it("triggers onSelectedOption on select", function() {
    var onSelectedOption = sinon.spy();

    var component = TestUtils.renderIntoDocument(
      <Dropdown onSelection={onSelectedOption} items={items}/>
    );

    var nodes = TestUtils.scryRenderedDOMComponentsWithTag(component, 'option');
    var node = ReactDOM.findDOMNode(nodes[0]);

    TestUtils.Simulate.click(node);

    expect(onSelectedOption).to.have.been.calledWith(items[0], 0);
  });

});
