const editTask = require('../editTask.js');
const localStorageMock = require('../__mocks__/mockupStorage.js');

const testObject = [{
  description: 'wash dishes',
  completed: false,
  index: 1,

}];
// localStorageMock.setItem('key', testObject);
let localStorage = [];
describe('a function for editing the task description', () => {
  test('Edit item to the list', () => {
    const str = 'complete assignment';
    localStorage = editTask(testObject, 0, str);
    localStorageMock.setItem('key', localStorage);
    expect(localStorageMock.getItem('key')[0].description).toEqual('complete assignment');
  });

  test('Edit list description on Dom', () => {
    document.body.innerHTML = `<ul>
      <li class="list">${localStorageMock.getItem('key')[0].description}</li>
     </ul>
     `;
    const listLi = document.querySelectorAll('.list');
    expect(listLi[0].textContent).toEqual('complete assignment');
  });
});