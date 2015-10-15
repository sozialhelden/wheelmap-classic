describe("React GeoJsonList component", function () {

  var items = [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          125.6, 10.1
        ]
      },
      "properties": {
        "name": "Dinagat Islands"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          125.6, 10.1
        ]
      },
      "properties": {
        "name": "Dinagat Islands"
      }
    }
  ];

  it("loads correctly", function () {
    var component = TestUtils.renderIntoDocument(
      <GeoJsonList items={items}/>
    );

    expect(component).to.exist;
  });

  it("renders it children as a list", function () {
    var component = TestUtils.renderIntoDocument(
      <GeoJsonList items={items}/>
    );

    var nodes = TestUtils.scryRenderedDOMComponentsWithTag(component, 'li');
    expect(nodes.length).to.equal(2);
  });

  it("triggers onSelection on select", function () {
    var onSelectedOption = sinon.spy();

    var component = TestUtils.renderIntoDocument(
      <GeoJsonList items={items} onSelection={onSelectedOption}/>
    );

    var nodes = TestUtils.scryRenderedDOMComponentsWithTag(component, 'li');
    var node = ReactDOM.findDOMNode(nodes[0]);

    TestUtils.Simulate.click(node);

    expect(onSelectedOption).to.have.been.calledWith(items[0], 0);
  });

});
