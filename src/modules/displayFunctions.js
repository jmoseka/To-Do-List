/* eslint-disable no-restricted-syntax */
import {
  clearTaskItem, updateCompletedData, updateCompletedDisplay, resetIndex,
} from './helperFunctions.js';

const displayList = () => {
  const listItemObject = JSON.parse(window.localStorage.getItem('taskData') || '[]');
  const listPlaceholder = document.querySelector('.task-list-placeholder');

  // eslint-disable-next-line no-restricted-syntax
  listPlaceholder.innerHTML = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const listIndex of [...Object.keys(listItemObject)]) {
    const element = document.createElement('li');
    element.setAttribute('data-index', listIndex);
    element.classList.add('task-list');
    element.innerHTML = `
                    <div data-index=${listIndex} class="task-inner-box"  id="${listItemObject[listIndex].index}">
                      <div data-index=${listIndex} class="task-list-item">
                        <div class="task-div line-through ${listItemObject[listIndex].index}">
                            <input data-index=${listIndex} class="checkbox ${listItemObject[listIndex].index}" type="checkbox"/>    
                            <div data-index=${listIndex} id="${listItemObject[listIndex].index}" class="label">${listItemObject[listIndex].description}</div>
                            
                          </div>
                          <div data-index=${listIndex} class="group-Btn optionBtn ${listItemObject[listIndex].index}" id="${listItemObject[listIndex].index}">
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                          </div>
                          <div data-index=${listIndex} class="group-Btn removeBtn ${listItemObject[listIndex].index} hidden" id="${listItemObject[listIndex].index}">
                          <i class="fa-solid fa-trash-can"></i>
                          </div>
                      </div>
                      </div>
                  `;
    listPlaceholder.appendChild(element);
  }

  // eslint-disable-next-line no-use-before-define
  addEventListeners();
};

const addEventListeners = () => {
  const list = JSON.parse(window.localStorage.getItem('taskData'));
  const optionBtn = document.querySelectorAll('.optionBtn');
  const removeBtn = document.querySelectorAll('.removeBtn');
  const taskListItem = document.querySelectorAll('.task-inner-box');
  const label = document.querySelectorAll('.label');
  const checkbox = document.querySelectorAll('.checkbox');

  //* *******************************CLICK EVENT FUNCTIONS **********************/

  for (const taskItem of [...Object(taskListItem)]) {
    taskItem.addEventListener('click', () => {
      clearTaskItem();
      taskItem.classList.add('selected');
      const index = parseInt(taskItem.getAttribute('data-index'), 10);
      optionBtn[index].classList.add('hidden');
      removeBtn[index].classList.remove('hidden');
    });
  }

  for (const btn of [...Object(removeBtn)]) {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-index'), 10);
      list.splice(id, 1);
      resetIndex(list);
      displayList();
    });
  }

  for (const indexCheckbox of [...Object(checkbox)]) {
    indexCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        const index = parseInt(indexCheckbox.getAttribute('data-index'), 10);
        updateCompletedData(index, true);
      } else {
        const index = parseInt(indexCheckbox.getAttribute('data-index'), 10);
        updateCompletedData(index, false);
      }
    });
  }

  for (const lbl of [...Object(label)]) {
    lbl.addEventListener('dblclick', () => {
      lbl.contentEditable = 'true';
    });

    lbl.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        lbl.contentEditable = 'false';
        const str = lbl.textContent;
        const id = parseInt(lbl.getAttribute('data-index'), 10);
        list[id].description = str;
        window.localStorage.setItem('taskData', JSON.stringify(list));
        displayList();
        updateCompletedDisplay();
      }
    });
  }
};

export default displayList;