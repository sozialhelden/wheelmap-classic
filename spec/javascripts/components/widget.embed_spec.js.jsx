describe("React WidgetEmbed component", function() {

  it("loads correctly", function() {
    var component = TestUtils.renderIntoDocument(
      <WidgetEmbed height={100} width={200} src={'http://some.src'}/>
    );

    expect(component).to.exist;
  });

});
