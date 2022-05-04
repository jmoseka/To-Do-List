/* eslint-disable no-restricted-syntax */
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

/* eslint-disable no-restricted-syntax */
export function updateCompletedData(numberIndex, completedMark) {
  const list = JSON.parse(window.localStorage.getItem('taskData'));
  list[numberIndex].completed = completedMark;
  window.localStorage.setItem('taskData', JSON.stringify(list));
  updateCompletedDisplay();
}

export function clearTaskItem() {
  const taskListItem = document.querySelectorAll('.task-inner-box');
  const optionBtn = document.querySelectorAll('.optionBtn');
  const removeBtn = document.querySelectorAll('.removeBtn');

  for (const task of [...Object(taskListItem)]) {
    task.classList.remove('selected');
    const index = parseInt(task.getAttribute('data-index'), 10);
    optionBtn[index].classList.remove('hidden');
    removeBtn[index].classList.add('hidden');
  }
}

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