describe("React WidgetForm component", function() {

  it("loads correctly", function() {
    var component = TestUtils.renderIntoDocument(
      <WidgetForm
        width={100}
        height={400}
        providers={[]}
        categories={[]}
      />
    );

    expect(component).to.exist;
  });
});
