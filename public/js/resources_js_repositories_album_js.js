"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_repositories_album_js"],{

/***/ "./resources/js/repositories/album.js":
/*!********************************************!*\
  !*** ./resources/js/repositories/album.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/js/repositories/Repository.js");

var resource = "/album";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getPaginated: function getPaginated(payload, page) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource, "/list?page=").concat(page), payload).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  create: function create(payload) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource, "/create"), payload).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  update: function update(id, payload) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource, "/update/").concat(id), payload).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  },
  "delete": function _delete(id) {
    return new Promise(function (resolve, reject) {
      _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource, "/delete/").concat(id)).then(function (response) {
        resolve(response.data.body);
      })["catch"](function (error) {
        reject(error.response);
      });
    });
  }
});

/***/ })

}]);