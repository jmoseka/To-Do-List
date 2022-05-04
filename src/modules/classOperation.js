import displayList from './displayFunctions.js';

export default class TaskClass {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  // eslint-disable-next-line class-methods-use-this
  addTask(taskObjectClass) {
    const listOfTask = JSON.parse(window.localStorage.getItem('taskData') || '[]');
    listOfTask.push(taskObjectClass);
    window.localStorage.setItem('taskData', JSON.stringify(listOfTask));
    displayList();
  }
}