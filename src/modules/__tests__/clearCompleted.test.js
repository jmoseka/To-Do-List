const clearCompleted = require('../clearCompleted.js');
const localStorageMock = require('../__mocks__/mockupStorage.js');

let testObject = [{
  description: 'wash dishes',
  completed: false,
  index: 1,
},
{
  description: 'complete assignment',
  completed: true,
  index: 1,
},
{
  description: 'attend meeting',
  completed: true,
  index: 1,
},
];
localStorageMock.setItem('key', testObject);
describe('the "Clear all completed" function', () => {
  test('clear all list with completed set to true', () => {
    testObject = clearCompleted(testObject);
    localStorageMock.setItem('key', testObject);
    expect(testObject).toHaveLength(1);
    expect(localStorageMock.getItem('key')).toHaveLength(1);
  });

  test('clear all marked completed in DOM', () => {
    const listItems = [];
    [...localStorageMock.getItem('key')]
      .forEach(() => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
              <input class="checkbox" type="checkbox"/>
              </div>
            `;
        listItems.push(listItem);
      });

    expect(listItems).toHaveLength(1);
  });
});
