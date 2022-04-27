import './style.css';
import { displayList } from './task.js';

const toDoTask = [
  {
    description: 'wash dishes',
    completed: 'false',
    index: 1,
  },

  {
    description: 'finish homework',
    completed: 'false',
    index: 2,
  },

  {
    description: 'attend meeting',
    completed: 'false',
    index: 3,
  },
];

displayList(toDoTask);
