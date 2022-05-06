const localStorageMock = require('../__mocks__/mockupStorage.js');
const updateCompletedData = require('../updateCompletedData.js');

const testObject = [{
  description: 'wash dishes',
  completed: false,
  index: 1,
},
{
  description: 'complete assignment',
  completed: false,
  index: 1,
},

];
localStorageMock.setItem('key', testObject);
describe('a function for updating an item \'s \'completed\' status ', () => {
  test('update an item to the list', () => {
    updateCompletedData(testObject, 0, true);
    localStorageMock.setItem('key', testObject);
    expect(localStorageMock.getItem('key')[0].completed).toEqual(true);
    expect(localStorageMock.getItem('key')[1].completed).toEqual(false);
  });

  test('Update completed on li Dom', () => {
    document.body.innerHTML = `<ul>
      <li><input class="checkbox" type="checkbox"/></li>
      <li><input class="checkbox" type="checkbox"/></li>
     </ul>
     `;

    const checkbox = document.querySelectorAll('.checkbox');
    const list = localStorageMock.getItem('key');
    // eslint-disable-next-line no-restricted-syntax
    for (const index of [...Object.keys(list)]) {
      if (list[index].completed === true) {
        checkbox[index].checked = true;
      } else {
        checkbox[index].checked = false;
      }
    }
    expect(checkbox[0].checked).toEqual(true);
    expect(checkbox[1].checked).toEqual(false);
  });
});