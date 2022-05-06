/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayFunctions.js */ \"./src/modules/displayFunctions.js\");\n/* harmony import */ var _modules_classOperation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classOperation.js */ \"./src/modules/classOperation.js\");\n/* harmony import */ var _modules_classOperation_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_classOperation_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_helperFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/helperFunctions.js */ \"./src/modules/helperFunctions.js\");\n/* harmony import */ var _modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clearCompleted.js */ \"./src/modules/clearCompleted.js\");\n/* harmony import */ var _modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar inputTask = document.querySelector('#input-task');\nvar clearBtn = document.querySelector('#clear-btn'); // populate list when the page opens\n\n(0,_modules_displayFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_helperFunctions_js__WEBPACK_IMPORTED_MODULE_3__.updateCompletedDisplay)(); // Execute a function when the user presses a key on the keyboard\n\ninputTask.addEventListener('keypress', function (event) {\n  // If the user presses the \"Enter\" key on the keyboard\n  if (event.key === 'Enter') {\n    var toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]'); // Cancel the default action, if needed\n\n    event.preventDefault();\n    var index = toDoListData.length + 1;\n    var toDoClass = new _modules_classOperation_js__WEBPACK_IMPORTED_MODULE_2__.TaskClass(inputTask.value.trim(), false, index);\n    toDoListData = toDoClass.addTask(toDoClass);\n    window.localStorage.setItem('taskData', JSON.stringify(toDoListData));\n    inputTask.value = '';\n    (0,_modules_displayFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n});\nclearBtn.addEventListener('click', function () {\n  var toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]'); // window.localStorage.setItem('bookData', JSON.stringify(clearItems));\n\n  (0,_modules_helperFunctions_js__WEBPACK_IMPORTED_MODULE_3__.resetIndex)(_modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_4___default()(toDoListData));\n  (0,_modules_displayFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/classOperation.js":
/*!***************************************!*\
  !*** ./src/modules/classOperation.js ***!
  \***************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar TaskClass = /*#__PURE__*/function () {\n  function TaskClass(description, completed, index) {\n    _classCallCheck(this, TaskClass);\n\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  } // eslint-disable-next-line class-methods-use-this\n\n\n  _createClass(TaskClass, [{\n    key: \"addTask\",\n    value: function addTask(taskObjectClass) {\n      var listOfTask = [];\n      listOfTask.push(taskObjectClass);\n      return listOfTask;\n    }\n  }]);\n\n  return TaskClass;\n}();\n\nfunction removeTask(obj, id) {\n  obj.splice(id, 1);\n}\n\nmodule.exports = {\n  TaskClass: TaskClass,\n  removeTask: removeTask\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/classOperation.js?");

/***/ }),

/***/ "./src/modules/clearCompleted.js":
/*!***************************************!*\
  !*** ./src/modules/clearCompleted.js ***!
  \***************************************/
/***/ ((module) => {

eval("function clearCompleted(list) {\n  var clearItems = list.filter(function (completeList) {\n    return completeList.completed === false;\n  });\n  return clearItems;\n}\n\nmodule.exports = clearCompleted;\n\n//# sourceURL=webpack://to-do-list/./src/modules/clearCompleted.js?");

/***/ }),

/***/ "./src/modules/displayFunctions.js":
/*!*****************************************!*\
  !*** ./src/modules/displayFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _classOperation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classOperation.js */ \"./src/modules/classOperation.js\");\n/* harmony import */ var _classOperation_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_classOperation_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTask.js */ \"./src/modules/editTask.js\");\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editTask_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperFunctions.js */ \"./src/modules/helperFunctions.js\");\n/* harmony import */ var _updateCompletedData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateCompletedData.js */ \"./src/modules/updateCompletedData.js\");\n/* harmony import */ var _updateCompletedData_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_updateCompletedData_js__WEBPACK_IMPORTED_MODULE_3__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* eslint-disable no-restricted-syntax */\n\n\n\n\n\nvar displayList = function displayList() {\n  var listItemObject = JSON.parse(window.localStorage.getItem('taskData') || '[]');\n  var listPlaceholder = document.querySelector('.task-list-placeholder'); // eslint-disable-next-line no-restricted-syntax\n\n  listPlaceholder.innerHTML = ''; // eslint-disable-next-line no-restricted-syntax\n\n  for (var _i = 0, _arr = _toConsumableArray(Object.keys(listItemObject)); _i < _arr.length; _i++) {\n    var listIndex = _arr[_i];\n    var element = document.createElement('li');\n    element.setAttribute('data-index', listIndex);\n    element.classList.add('task-list');\n    element.innerHTML = \"\\n                    <div data-index=\".concat(listIndex, \" class=\\\"task-inner-box\\\"  id=\\\"\").concat(listItemObject[listIndex].index, \"\\\">\\n                      <div data-index=\").concat(listIndex, \" class=\\\"task-list-item\\\">\\n                        <div class=\\\"task-div line-through \").concat(listItemObject[listIndex].index, \"\\\">\\n                            <input data-index=\").concat(listIndex, \" class=\\\"checkbox \").concat(listItemObject[listIndex].index, \"\\\" type=\\\"checkbox\\\"/>    \\n                            <div data-index=\").concat(listIndex, \" id=\\\"\").concat(listItemObject[listIndex].index, \"\\\" class=\\\"label\\\">\").concat(listItemObject[listIndex].description, \"</div>\\n                            \\n                          </div>\\n                          <div data-index=\").concat(listIndex, \" class=\\\"group-Btn optionBtn \").concat(listItemObject[listIndex].index, \"\\\" id=\\\"\").concat(listItemObject[listIndex].index, \"\\\">\\n                          <i class=\\\"fa-solid fa-ellipsis-vertical\\\"></i>\\n                          </div>\\n                          <div data-index=\").concat(listIndex, \" class=\\\"group-Btn removeBtn \").concat(listItemObject[listIndex].index, \" hidden\\\" id=\\\"\").concat(listItemObject[listIndex].index, \"\\\">\\n                          <i class=\\\"fa-solid fa-trash-can\\\"></i>\\n                          </div>\\n                      </div>\\n                      </div>\\n                  \");\n    listPlaceholder.appendChild(element);\n  } // eslint-disable-next-line no-use-before-define\n\n\n  addEventListeners();\n};\n\nvar addEventListeners = function addEventListeners() {\n  var list = JSON.parse(window.localStorage.getItem('taskData'));\n  var optionBtn = document.querySelectorAll('.optionBtn');\n  var removeBtn = document.querySelectorAll('.removeBtn');\n  var taskListItem = document.querySelectorAll('.task-inner-box');\n  var label = document.querySelectorAll('.label');\n  var checkbox = document.querySelectorAll('.checkbox'); //* *******************************CLICK EVENT FUNCTIONS **********************/\n\n  var _loop = function _loop() {\n    var taskItem = _arr2[_i2];\n    taskItem.addEventListener('click', function () {\n      (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_2__.clearTaskItem)();\n      taskItem.classList.add('selected');\n      var index = parseInt(taskItem.getAttribute('data-index'), 10);\n      optionBtn[index].classList.add('hidden');\n      removeBtn[index].classList.remove('hidden');\n    });\n  };\n\n  for (var _i2 = 0, _arr2 = _toConsumableArray(Object(taskListItem)); _i2 < _arr2.length; _i2++) {\n    _loop();\n  }\n\n  var _loop2 = function _loop2() {\n    var btn = _arr3[_i3];\n    btn.addEventListener('click', function () {\n      var id = parseInt(btn.getAttribute('data-index'), 10);\n      (0,_classOperation_js__WEBPACK_IMPORTED_MODULE_0__.removeTask)(list, id);\n      (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_2__.resetIndex)(list);\n      displayList();\n    });\n  };\n\n  for (var _i3 = 0, _arr3 = _toConsumableArray(Object(removeBtn)); _i3 < _arr3.length; _i3++) {\n    _loop2();\n  }\n\n  var _loop3 = function _loop3() {\n    var indexCheckbox = _arr4[_i4];\n    indexCheckbox.addEventListener('change', function (e) {\n      if (e.target.checked) {\n        var index = parseInt(indexCheckbox.getAttribute('data-index'), 10);\n        window.localStorage.setItem('taskData', JSON.stringify(_updateCompletedData_js__WEBPACK_IMPORTED_MODULE_3___default()(list, index, true)));\n        (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_2__.updateCompletedDisplay)();\n      } else {\n        var _index = parseInt(indexCheckbox.getAttribute('data-index'), 10);\n\n        window.localStorage.setItem('taskData', JSON.stringify(_updateCompletedData_js__WEBPACK_IMPORTED_MODULE_3___default()(list, _index, false)));\n        (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_2__.updateCompletedDisplay)();\n      }\n    });\n  };\n\n  for (var _i4 = 0, _arr4 = _toConsumableArray(Object(checkbox)); _i4 < _arr4.length; _i4++) {\n    _loop3();\n  }\n\n  var _loop4 = function _loop4() {\n    var lbl = _arr5[_i5];\n    lbl.addEventListener('dblclick', function () {\n      lbl.contentEditable = 'true';\n    });\n    lbl.addEventListener('keypress', function (event) {\n      if (event.key === 'Enter') {\n        lbl.contentEditable = 'false';\n        var str = lbl.textContent;\n        var id = parseInt(lbl.getAttribute('data-index'), 10);\n        window.localStorage.setItem('taskData', JSON.stringify(_editTask_js__WEBPACK_IMPORTED_MODULE_1___default()(list, id, str)));\n        displayList();\n        (0,_helperFunctions_js__WEBPACK_IMPORTED_MODULE_2__.updateCompletedDisplay)();\n      }\n    });\n  };\n\n  for (var _i5 = 0, _arr5 = _toConsumableArray(Object(label)); _i5 < _arr5.length; _i5++) {\n    _loop4();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);\n\n//# sourceURL=webpack://to-do-list/./src/modules/displayFunctions.js?");

/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((module) => {

eval("function editTask(listObj, index, str) {\n  listObj[index].description = str;\n  return listObj;\n}\n\nmodule.exports = editTask;\n\n//# sourceURL=webpack://to-do-list/./src/modules/editTask.js?");

/***/ }),

/***/ "./src/modules/helperFunctions.js":
/*!****************************************!*\
  !*** ./src/modules/helperFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearTaskItem\": () => (/* binding */ clearTaskItem),\n/* harmony export */   \"resetIndex\": () => (/* binding */ resetIndex),\n/* harmony export */   \"updateCompletedDisplay\": () => (/* binding */ updateCompletedDisplay)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* eslint-disable no-restricted-syntax */\nfunction updateCompletedDisplay() {\n  var checkbox = document.querySelectorAll('.checkbox');\n  var label = document.querySelectorAll('.label');\n  var listItemObject = JSON.parse(window.localStorage.getItem('taskData') || '[]'); // eslint-disable-next-line no-restricted-syntax\n\n  for (var _i = 0, _arr = _toConsumableArray(listItemObject); _i < _arr.length; _i++) {\n    var element = _arr[_i];\n\n    if (element.completed === true) {\n      var id = parseInt(element.index, 10) - 1;\n      label[id].classList.add('line-through');\n      checkbox[id].setAttribute('checked', 'checked');\n    } else {\n      var _id = parseInt(element.index, 10) - 1;\n\n      label[_id].classList.remove('line-through');\n\n      checkbox[_id].setAttribute('unchecked', 'unchecked');\n    }\n  }\n}\nfunction clearTaskItem() {\n  var taskListItem = document.querySelectorAll('.task-inner-box');\n  var optionBtn = document.querySelectorAll('.optionBtn');\n  var removeBtn = document.querySelectorAll('.removeBtn');\n\n  for (var _i2 = 0, _arr2 = _toConsumableArray(Object(taskListItem)); _i2 < _arr2.length; _i2++) {\n    var task = _arr2[_i2];\n    task.classList.remove('selected');\n    var index = parseInt(task.getAttribute('data-index'), 10);\n    optionBtn[index].classList.remove('hidden');\n    removeBtn[index].classList.add('hidden');\n  }\n}\n/* eslint-disable no-loop-func */\n\n/* eslint-disable no-restricted-syntax */\n\nfunction resetIndex(list) {\n  var sum = 0; // eslint-disable-next-line no-restricted-syntax\n\n  for (var _i3 = 0, _arr3 = _toConsumableArray(list); _i3 < _arr3.length; _i3++) {\n    var listId = _arr3[_i3];\n    sum += 1;\n    listId.index = sum;\n  }\n\n  window.localStorage.setItem('taskData', JSON.stringify(list));\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/helperFunctions.js?");

/***/ }),

/***/ "./src/modules/updateCompletedData.js":
/*!********************************************!*\
  !*** ./src/modules/updateCompletedData.js ***!
  \********************************************/
/***/ ((module) => {

eval("/* eslint-disable no-restricted-syntax */\nfunction updateCompletedData(list, numberIndex, completedMark) {\n  list[numberIndex].completed = completedMark;\n  return list;\n}\n\nmodule.exports = updateCompletedData;\n\n//# sourceURL=webpack://to-do-list/./src/modules/updateCompletedData.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #f8f4f4;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 500px;\\r\\n  font-family: 'Source Sans Pro', sans-serif;\\r\\n  font-weight: 400;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background: #eeecec;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.task-group {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  border: 1px solid #f8f4f4;\\r\\n}\\r\\n\\r\\n.header-list {\\r\\n  border-top: 2px solid #f8f4f4;\\r\\n}\\r\\n\\r\\n.arrow-left {\\r\\n  font-size: 10px;\\r\\n}\\r\\n\\r\\n.group-Btn {\\r\\n  width: 10%;\\r\\n  text-align: end;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n#input-task {\\r\\n  font-size: 17px;\\r\\n  border: 0;\\r\\n  outline: 0;\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.task-list-placeholder {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.task-list-placeholder li {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.task-list {\\r\\n  border-bottom: 2px solid #f8f4f4;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n  background: rgb(255, 255, 174);\\r\\n}\\r\\n\\r\\n.task-div {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.label {\\r\\n  width: 90%;\\r\\n  float: right;\\r\\n  padding: 10px;\\r\\n  outline: 0;\\r\\n}\\r\\n\\r\\n.removeBtn {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.task-list-item {\\r\\n  padding: 2px 15px 0 15px;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.line-through {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  padding: 20px;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n#clear-btn {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n#clear-btn:hover {\\r\\n  color: blue;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;