describe("React Widget component", function() {

  it("loads correctly", function() {
    var component = TestUtils.renderIntoDocument(
      <Widget
        width={100}
        height={400}
        lat={50}
        lon={50}
        providers={[]}
        categories={[]}
        src={'http://src.src'}
        resource={'http://resource.src'}
      />
    );

    expect(component).to.exist;
  });

});
