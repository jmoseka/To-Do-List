import { divide } from 'lodash';

export default class TaskClass {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]');

export const addTask = (taskObject) => {
  const listOfTask = JSON.parse(window.localStorage.getItem('taskData') || '[]');
  listOfTask.push(taskObject);
  /** Store new book data in local storage */
  window.localStorage.setItem('taskData', JSON.stringify(listOfTask));
};

export function updateCompletedDisplay() {
  const taskDiv = document.querySelectorAll('.task-div');
  const checkbox = document.querySelectorAll('.checkbox');
  const listItemObject = JSON.parse(window.localStorage.getItem('taskData') || '[]');
  let i = 0;
  let j = 0;
  while (i < listItemObject.length) {
    if (listItemObject[i].completed === true) {
      j = listItemObject[i].index - 1;
      if (j < 0) {
        j = 1;
      }
      taskDiv[j].classList.add('line-through');
      checkbox[j].setAttribute('checked', 'checked');
      // console.log(taskDiv[j]);
      // console.log(`answer${listItemObject[i].completed}${listItemObject[i].index} ${str}`);
    } else {
      j = listItemObject[i].index - 1;
      if (j < 0) {
        j = 1;
      }
      taskDiv[j].classList.remove('line-through');
      checkbox[j].setAttribute('unchecked', 'unchecked');
    }
    i += 1;
  }
}

export const displayList = () => {
  const listItemObject = JSON.parse(window.localStorage.getItem('taskData') || '[]');
  // eslint-disable-next-line no-restricted-syntax
  for (const list of [...Object.keys(listItemObject)]) {
    const listPlaceholder = document.querySelector('.task-list-placeholder');
    const element = document.createElement('li');
    element.classList.add('task-list');
    element.innerHTML = `
                    <div class="task-list-item">
                      <div class="task-div ${listItemObject[list].index}">
                          <input class="checkbox ${listItemObject[list].index}" type="checkbox"/>    
                          <label class="label">${listItemObject[list].description}</label>
                        </div>
                        <div class="optionBtn editBtn ${listItemObject[list].index}">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        <div class="optionBtn removeBtn ${listItemObject[list].index} hidden">
                        <i class="fa-solid fa-trash-can"></i>
                        </div>
        
                    </div>
                `;
    listPlaceholder.appendChild(element);
  }

  /** *****************CLICK EVENTS ON INNER HTML ELEMENTS***********************
   * Checkbox
   * Button
   * Elipse
   */

  const removeEditBtn = document.querySelectorAll('.removeEditBtn');

  removeEditBtn.addEventListener('click', () => {

  });

  function updateCompletedData(numberIndex, completedMark) {
    listItemObject[numberIndex].completed = completedMark;
    window.localStorage.setItem('taskData', JSON.stringify(listItemObject));
    updateCompletedDisplay();
  }

  const checkbox = document.querySelectorAll('.checkbox');
  let indexCheckBox = 0;
  while (indexCheckBox < checkbox.length) {
    checkbox[indexCheckBox].addEventListener('change', (e) => {
      if (e.target.checked) {
      // get the index class of the clicked checkbox and convert to integer
        let number = parseInt(e.target.classList[1], 10) - 1;

        if (number < 0) {
          number = 1;
        }
        updateCompletedData(number, true);
      } else {
        let number = parseInt(e.target.classList[1], 10) - 1;
        if (number < 0) {
          number = 1;
        }
        updateCompletedData(number, false);
      }
    });
    indexCheckBox += 1;
  }
};