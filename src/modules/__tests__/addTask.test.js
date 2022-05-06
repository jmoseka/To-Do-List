const addTask = require('../addTask.js');
const localStorageMock = require('../__mocks__/mockupStorage.js');

const testObject = [
  {
    description: 'wash dishes',
    completed: false,
    index: 1,
  },
];
const localStorage = [];

describe('Add list to local storage', () => {
  test('Add one new item to the list', () => {
    localStorageMock.setItem('key', addTask(localStorage, testObject));
    expect(localStorageMock.getItem('key')).toHaveLength(1);
  });

  test('Add one new item to DOM using data from local storage', () => {
    document.body.innerHTML = `<div>
      <ul class="task-list-placeholder"><li>${localStorageMock.getItem('key')[0].description}</li></ul>
     </div>
     `;
    const listPlaceholder = document.querySelectorAll('.task-list-placeholder');
    expect(listPlaceholder[0].value).toEqual(localStorageMock.getItem('key')[0].description);
  });
});