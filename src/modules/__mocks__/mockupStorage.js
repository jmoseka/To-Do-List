// eslint-disable-next-line func-names
const localStorageMock = (function () {
  const store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },
  };
}());

module.exports = localStorageMock;