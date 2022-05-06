class TaskClass {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  // eslint-disable-next-line class-methods-use-this
  addTask(taskStorage, taskClass) {
    // const listOfTask = [];
    taskStorage.push(taskClass);
    return taskStorage;
  }
}

function removeTask(obj, id) {
  obj.splice(id, 1);
}

module.exports = { TaskClass, removeTask };