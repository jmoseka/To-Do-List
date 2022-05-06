function addTask(taskStorage, taskClass) {
  taskStorage.push(taskClass);
  return taskStorage;
}

module.exports = addTask;