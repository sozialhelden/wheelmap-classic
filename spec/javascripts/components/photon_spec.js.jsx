describe("React Photon component", function() {

  it("loads correctly", function() {
    var component = TestUtils.renderIntoDocument(
      <Photon/>
    );

    expect(component).to.exist;
  });

});
