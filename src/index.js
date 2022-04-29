import './style.css';
import TaskClass, {
  displayList, addTask, updateCompletedDisplay, resetIndex,
} from './modules/taskFunctions.js';

const inputTask = document.querySelector('#input-task');
const taskListPlaceholder = document.querySelector('.task-list-placeholder');
const clearBtn = document.querySelector('#clear-btn');

displayList();
updateCompletedDisplay();

// Execute a function when the user presses a key on the keyboard
inputTask.addEventListener('keypress', (event) => {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter') {
    const toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]');
    // Cancel the default action, if needed
    event.preventDefault();
    const index = toDoListData.length + 1;
    const toDoClass = new TaskClass(inputTask.value.trim(), false, index);
    addTask(toDoClass);
    taskListPlaceholder.innerHTML = '';
    displayList();
    inputTask.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  const toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]');
  const clearItems = toDoListData.filter((completeList) => completeList.completed === false);
  window.localStorage.setItem('bookData', JSON.stringify(clearItems));
  resetIndex(clearItems);
  taskListPlaceholder.innerHTML = '';
  displayList();
});
