const activeSection = jest.genMockFromModule('../activeSection').default
  .mockImpl(section => section);

export default activeSection;