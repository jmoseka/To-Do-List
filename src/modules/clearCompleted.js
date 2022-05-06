function clearCompleted(list) {
  const clearItems = list.filter((completeList) => completeList.completed === false);
  return clearItems;
}
module.exports = clearCompleted;