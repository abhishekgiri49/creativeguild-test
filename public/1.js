(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/repositories/event.js":
/*!********************************************!*\
  !*** ./resources/js/repositories/event.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/js/repositories/Repository.js");

var resource = "/event";
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get() {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource, "/list")).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  find: function find(id) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource, "/").concat(id)).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  findAttendee: function findAttendee(code) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource, "/attendee/").concat(code)).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  confirm: function confirm(payload) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("/event/confirm", payload).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  }
});

/***/ })

}]);