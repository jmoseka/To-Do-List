function editTask(listObj, index, str) {
  listObj[index].description = str;
  return listObj;
}

module.exports = editTask;