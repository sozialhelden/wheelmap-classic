describe("React WidgetForm component", function() {

  it("loads correctly", function() {
    var component = TestUtils.renderIntoDocument(
      <WidgetForm
        defaultWidth={300}
        defaultHeight={400}
        providers={[]}
        categories={[]}
      />
    );

    expect(component).to.exist;
  });

  it("validates dimensions", function() {
    var onWidthChange = sinon.spy(),
      onHeightChange = sinon.spy();

    var component = TestUtils.renderIntoDocument(
      <WidgetForm
        defaultWidth={300}
        defaultHeight={400}
        onWidthChange={onWidthChange}
        onHeightChange={onHeightChange}
        minWidth={300}
        maxWidth={800}
        minHeight={300}
        maxHeight={800}
        providers={[]}
        categories={[]}
        />
    );

    var { width, height } = component.refs;

    width.value = 200;
    TestUtils.Simulate.change(width);

    width.value = 900;
    TestUtils.Simulate.change(width);

    height.value = 200;
    TestUtils.Simulate.change(height);

    height.value = 900;
    TestUtils.Simulate.change(height);

    expect(onWidthChange).to.have.not.been.called;
    expect(onHeightChange).to.have.not.been.called;
  });

});
