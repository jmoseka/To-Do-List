/* eslint-disable no-restricted-syntax */
function updateCompletedData(list, numberIndex, completedMark) {
  list[numberIndex].completed = completedMark;
  return list;
}

module.exports = updateCompletedData;