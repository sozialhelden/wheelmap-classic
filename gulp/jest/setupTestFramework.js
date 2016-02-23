global.expectGen = (generator) => {
  return {
    next(object = null) {
      const { value, done } = generator.next(object);

      return {
        value: expect(value),
        done: expect(done)
      };
    },

    throw(object = null) {
      const { value, done } = generator.throw(object);

      return {
        value: expect(value),
        done: expect(done)
      };
    }
  };
};