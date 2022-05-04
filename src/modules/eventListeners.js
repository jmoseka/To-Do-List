import displayList, { updateCompletedDisplay } from './displayFunctions.js';
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
export function resetIndex(list) {
  let sum = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const listId of [...list]) {
    sum += 1;
    listId.index = sum;
  }
  window.localStorage.setItem('taskData', JSON.stringify(list));
}

const addEventListeners = () => {
  const list = JSON.parse(window.localStorage.getItem('taskData'));
  const optionBtn = document.querySelectorAll('.optionBtn');
  const removeBtn = document.querySelectorAll('.removeBtn');
  const taskListItem = document.querySelectorAll('.task-inner-box');
  const label = document.querySelectorAll('.label');
  const checkbox = document.querySelectorAll('.checkbox');

  function updateCompletedData(numberIndex, completedMark) {
    list[numberIndex].completed = completedMark;
    window.localStorage.setItem('taskData', JSON.stringify(list));
    updateCompletedDisplay();
  }

  function clearTaskItem() {
    for (const task of [...Object(taskListItem)]) {
      task.classList.remove('selected');
      const index = parseInt(task.getAttribute('data-index'), 10);
      optionBtn[index].classList.remove('hidden');
      removeBtn[index].classList.add('hidden');
    }
  }

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

export default addEventListeners;