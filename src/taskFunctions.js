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

export function resetIndex(objectListIndex) {
  let sum = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const indexData of [...objectListIndex]) {
    sum += 1;
    indexData.index = sum;
  }
  window.localStorage.setItem('taskData', JSON.stringify(objectListIndex));
}

export function updateCompletedDisplay() {
  const checkbox = document.querySelectorAll('.checkbox');
  const label = document.querySelectorAll('.label');
  const listItemObject = JSON.parse(window.localStorage.getItem('taskData') || '[]');
  // eslint-disable-next-line no-restricted-syntax
  for (const element of [...listItemObject]) {
    if (element.completed === true) {
      const id = parseInt(element.index, 10) - 1;
      label[id].classList.add('line-through');
      checkbox[id].setAttribute('checked', 'checked');
    } else {
      const id = parseInt(element.index, 10) - 1;
      label[id].classList.remove('line-through');
      checkbox[id].setAttribute('unchecked', 'unchecked');
    }
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
                  <div class="task-inner-box"  id="${listItemObject[list].index}">
                    <div class="task-list-item">
                      <div class="task-div line-through ${listItemObject[list].index}">
                          <input class="checkbox ${listItemObject[list].index}" type="checkbox"/>    
                          <div id="${listItemObject[list].index}" class="label">${listItemObject[list].description}</div>
                          
                        </div>
                        <div class="optionBtn editBtn ${listItemObject[list].index}" id="${listItemObject[list].index}">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        <div class="optionBtn deleteBtn removeBtn ${listItemObject[list].index} hidden" id="${listItemObject[list].index}">
                        <i class="fa-solid fa-trash-can"></i>
                        </div>
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

  const editBtn = document.querySelectorAll('.editBtn');
  const removeBtn = document.querySelectorAll('.removeBtn');
  const taskInnerBox = document.querySelectorAll('.task-inner-box');
  const label = document.querySelectorAll('.label');
  const taskListPlaceholder = document.querySelector('.task-list-placeholder');

  const clearSelection = () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const boxClassList of [...Object(taskInnerBox)]) {
      if (boxClassList.classList.contains('selected')) {
        boxClassList.classList.remove('selected');
      }
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const btn of [...Object(removeBtn)]) {
      btn.classList.add('hidden');
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const btn of [...Object(editBtn)]) {
      btn.classList.remove('hidden');
    }
  };

  editBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const indexEdit = parseInt(btn.id, 10) - 1;
      // if (indexEdit < 0) { indexEdit = 1; }
      btn.classList.add('hidden');
      removeBtn[indexEdit].classList.remove('hidden');
    });
  });

  const list = JSON.parse(window.localStorage.getItem('taskData'));
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.id, 10) - 1;
      list.splice(id, 1);
      resetIndex(list);
      taskListPlaceholder.innerHTML = '';
      displayList();
    });
  });

  taskInnerBox.forEach((box) => {
    box.addEventListener('click', () => {
      clearSelection(taskInnerBox);
      box.classList.add('selected');
      const id = parseInt(box.id, 10) - 1;
      removeBtn[id].classList.remove('hidden');
      editBtn[id].classList.add('hidden');
    });
  });

  label.forEach((lbl) => {
    lbl.addEventListener('dblclick', () => {
      lbl.contentEditable = 'true';
    });
    lbl.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        lbl.contentEditable = 'false';
        const str = lbl.textContent;
        let id = lbl.id - 1;
        if (id < 0) { id = 0; }
        toDoListData[id].description = str;
        window.localStorage.setItem('taskData', JSON.stringify(toDoListData));
        taskListPlaceholder.innerHTML = '';
        displayList();
      }
    });
  });

  // remove selection color styling upon clicking anywhere

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
        if (number < 0) { number = 0; }
        updateCompletedData(number, true);
      } else {
        let number = parseInt(e.target.classList[1], 10) - 1;
        if (number < 0) { number = 0; }
        updateCompletedData(number, false);
      }
    });
    indexCheckBox += 1;
  }
};