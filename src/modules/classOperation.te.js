const { TaskClass, removeTask } = require('./classOperation.js');
const localStorageMock = require('./mockupStorage.js');

let testObject = [];

describe('Add method that adds li to DOM', () => {
  test('Add one new item to the list', () => {
    const taskClass = new TaskClass('test1', false, testObject.length + 1);
    testObject = taskClass.addTask(testObject);
    localStorageMock.setItem('key', testObject);
    expect(testObject).toHaveLength(1);
  });

  test('Add one new item to DOM using data from local storage', () => {
    document.body.innerHTML = `<div>
      <ul class="task-list-placeholder"><li>${testObject.description}</li></ul>
     </div>
     `;
    const listPlaceholder = document.querySelectorAll('.task-list-placeholder');
    expect(listPlaceholder[0].value).toEqual(testObject[0].description);
  });
});

describe('Remove item from local storage', () => {
  test('Add one new item to the list', () => {
    removeTask(testObject);
    expect(testObject).toHaveLength(0);
  });
  test('Remove an item from DOM', () => {
    document.body.innerHTML = `<div>
      <ul class="task-list-placeholder"><li>${testObject.description}</li></ul>
     </div>
     `;
    const listPlaceholder = document.querySelectorAll('.task-list-placeholder');
    expect(listPlaceholder[0].value).toEqual(undefined);
  });
});