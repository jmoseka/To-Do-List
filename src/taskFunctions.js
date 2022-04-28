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
      if (j < 0) { j = 1; }
      taskDiv[j].classList.add('line-through');
      checkbox[j].setAttribute('checked', 'checked');
    } else {
      j = listItemObject[i].index - 1;
      if (j < 0) { j = 1; }
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
                  <div class="task-inner-box"  id="${listItemObject[list].index}">
                    <div class="task-list-item">
                      <div class="task-div ${listItemObject[list].index}">
                          <input class="checkbox ${listItemObject[list].index}" type="checkbox"/>    
                          <div id="${listItemObject[list].index}" class="label">${listItemObject[list].description}</div>
                          
                        </div>
                        <div class="optionBtn editBtn ${listItemObject[list].index}" id="${listItemObject[list].index}">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        <div class="optionBtn removeBtn ${listItemObject[list].index} hidden" id="${listItemObject[list].index}">
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
      let indexEdit = btn.id.toString() - 1;
      if (indexEdit < 0) { indexEdit = 1; }
      btn.classList.add('hidden');
      removeBtn[indexEdit].classList.remove('hidden');
    });
  });

  taskInnerBox.forEach((box) => {
    box.addEventListener('click', () => {
      clearSelection(taskInnerBox);
      box.classList.add('selected');
      let id = box.id.toString() - 1;
      if (id < 0) { id = 1; }
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
        console.log(id);
        if (id < 0) { id = 1; }
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
        if (number < 0) { number = 1; }
        updateCompletedData(number, true);
      } else {
        let number = parseInt(e.target.classList[1], 10) - 1;
        if (number < 0) { number = 1; }
        updateCompletedData(number, false);
      }
    });
    indexCheckBox += 1;
  }
};