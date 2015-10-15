describe("React WidgetPreview component", function() {

  it("loads correctly", function() {
    var component = TestUtils.renderIntoDocument(
      <WidgetPreview height={100} width={400} src={'http://some.src'}/>
    );

    expect(component).to.exist;
  });

});
