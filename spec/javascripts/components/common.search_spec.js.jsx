describe("React Search component", function() {

  it("loads correctly", function() {
    var component = TestUtils.renderIntoDocument(
      <Search onSearchUpdate={function(){}} search={'query'} />
    );

    expect(component).to.exist;
  });

  it("triggers onSearchUpdate on input", function() {
    var cb = sinon.spy();

    var component = TestUtils.renderIntoDocument(
      <Search search={''} onSearchUpdate={cb} />
    );

    var node = ReactDOM.findDOMNode(
      TestUtils.findRenderedDOMComponentWithTag(component, 'input')
    );
    node.value = 'query';
    TestUtils.Simulate.change(node);
    expect(cb).to.have.been.calledWith("query");
  });

});
