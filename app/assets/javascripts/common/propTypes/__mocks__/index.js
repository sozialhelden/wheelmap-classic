// @see https://github.com/facebook/jest/issues/880
module.exports = {
  ...jest.genMockFromModule('../index'),
  ...jest.genMockFromModule('../immutable')
};
