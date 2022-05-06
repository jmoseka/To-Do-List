import './style.css';
import displayList from './modules/displayFunctions.js';
import { TaskClass } from './modules/classOperation.js';
import { updateCompletedDisplay, resetIndex } from './modules/helperFunctions.js';
import clearCompleted from './modules/clearCompleted.js';
import addTask from './modules/addTask.js';

const inputTask = document.querySelector('#input-task');
const clearBtn = document.querySelector('#clear-btn');
// populate list when the page opens
displayList();
// updateCompletedDisplay();

// Execute a function when the user presses a key on the keyboard
inputTask.addEventListener('keypress', (event) => {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter') {
    const toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]');
    // Cancel the default action, if needed
    event.preventDefault();
    const index = toDoListData.length + 1;
    const toDoClass = new TaskClass(inputTask.value.trim(), false, index);
    // toDoListData = toDoClass.addTask(toDoClass);
    window.localStorage.setItem('taskData', JSON.stringify(addTask(toDoListData, toDoClass)));
    inputTask.value = '';
    displayList();
  }
});

clearBtn.addEventListener('click', () => {
  const toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]');
  // window.localStorage.setItem('bookData', JSON.stringify(clearItems));
  resetIndex(clearCompleted(toDoListData));
  displayList();
});
