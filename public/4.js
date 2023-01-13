(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/Mixins/Alert */ "./resources/js/lib/Mixins/Alert.js");
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/Mixins/Error */ "./resources/js/lib/Mixins/Error.js");
/* harmony import */ var _lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/Mixins/Utils */ "./resources/js/lib/Mixins/Utils.js");
/* harmony import */ var _lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/Mixins/ExtendedPromises */ "./resources/js/lib/Mixins/ExtendedPromises.js");
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "edit-profile",
  mixins: [_lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_2___default.a, _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_4___default.a, _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_1___default.a, _lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_3___default.a],
  inject: ["authRepository", "userRepository"],
  data: function data() {
    return {
      form: this.buildForm(),
      setting: {},
      formData: {
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        gstin: "",
        bank_name: "",
        bank_address: "",
        bank_branch: "",
        account_no: "",
        ifsc: ""
      }
    };
  },
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.userRepository.view();

            case 2:
              _this.formData = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    buildForm: function buildForm(formData) {
      return new GPForm({
        name: formData ? formData.name : null,
        username: formData ? formData.username : null,
        email: formData ? formData.email : null,
        phone: formData ? formData.phone : null,
        address: formData ? formData.address : null
      });
    },
    save: function save() {
      var _this2 = this;

      this.form.startProcessing();
      var operation = this.response(this.userRepository.updateProfile(this.formData));
      operation.then(function (data) {
        if (operation.isFulfilled()) {
          _this2.$store.commit("updateSuccess", data); // this.$router.push("/user/invoice-list");


          _this2.form.finishProcessing();

          _this2.$toastr.s("SUCCESS", "Successfully ".concat(_this2.formData ? "updated" : "added", " !"));
        }
      })["catch"](function (err) {
        if (operation.isRejected()) {
          // console.log(err.data.body);
          if (err.status === 401) {
            _this2.errors = err.data.body;
          }
        }

        _this2.form.finishProcessing();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=template&id=30450d66&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=template&id=30450d66& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "invoice-list-layout white-bg" }, [
      _c("div", { staticClass: "white-box-st-padding invoice-filter-holder" }, [
        _c("div", { staticClass: "profile-list" }, [
          _c("ul", [
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: "/user/view/profile" } }, [
                  _c("i", { staticClass: "fas fa-id-badge fa-fw" }),
                  _vm._v(" Profile")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "active",
                    attrs: { to: "/user/edit/profile" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-cog fa-fw" }),
                    _vm._v(" Edit Profile")
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: "/user/password/change" } }, [
                  _c("i", { staticClass: "fas fa-unlock-alt fa-fw" }),
                  _vm._v(" Change\n              Password")
                ])
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "justify-content-center" }, [
          _c("div", { staticClass: "row no-gutters" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "div",
                { staticClass: "white-box-st-padding bb" },
                [
                  _c(
                    "div",
                    { staticClass: "infieldholder" },
                    [
                      _c("span", { staticClass: "lab" }, [_vm._v("Name *:")]),
                      _vm._v(" "),
                      _c("span", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.name,
                              expression: "formData.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", name: "name" },
                          domProps: { value: _vm.formData.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors.name
                        ? _c(
                            "b-form-invalid-feedback",
                            { attrs: { state: false } },
                            _vm._l(_vm.errors.name, function(item, index) {
                              return _c("span", { key: index }, [
                                _vm._v(_vm._s(item))
                              ])
                            }),
                            0
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "infieldholder" },
                    [
                      _c("span", { staticClass: "lab" }, [_vm._v("Email *:")]),
                      _vm._v(" "),
                      _c("span", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.email,
                              expression: "formData.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", name: "email", disabled: "" },
                          domProps: { value: _vm.formData.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "email",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors.email
                        ? _c(
                            "b-form-invalid-feedback",
                            { attrs: { state: false } },
                            _vm._l(_vm.errors.email, function(item, index) {
                              return _c("span", { key: index }, [
                                _vm._v(_vm._s(item))
                              ])
                            }),
                            0
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "infieldholder" },
                    [
                      _c("span", { staticClass: "lab" }, [
                        _vm._v("Address *:")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.address,
                              expression: "formData.address"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", name: "address" },
                          domProps: { value: _vm.formData.address },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "address",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors.address
                        ? _c(
                            "b-form-invalid-feedback",
                            { attrs: { state: false } },
                            _vm._l(_vm.errors.address, function(item, index) {
                              return _c("span", { key: index }, [
                                _vm._v(_vm._s(item))
                              ])
                            }),
                            0
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "infieldholder" },
                    [
                      _c("span", { staticClass: "lab" }, [_vm._v("Phone *:")]),
                      _c("span", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.phone,
                              expression: "formData.phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", name: "phone" },
                          domProps: { value: _vm.formData.phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "phone",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors.phone
                        ? _c(
                            "b-form-invalid-feedback",
                            { attrs: { state: false } },
                            _vm._l(_vm.errors.phone, function(item, index) {
                              return _c("span", { key: index }, [
                                _vm._v(_vm._s(item))
                              ])
                            }),
                            0
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { squared: "", variant: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.save.apply(null, arguments)
                        }
                      }
                    },
                    [_vm._v("Save")]
                  )
                ],
                1
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "white-box-st-padding bb" }, [
      _c("div", { staticClass: "invoice--item" }, [
        _c(
          "div",
          { staticClass: "blue-color-bold", attrs: { role: "group" } },
          [_vm._v("Edit Profile")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/lib/Mixins/Alert.js":
/*!******************************************!*\
  !*** ./resources/js/lib/Mixins/Alert.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  methods: {
    alert: function alert(options) {
      swal.fire(options);
    },
    success: function success() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$title = _ref.title,
          title = _ref$title === void 0 ? "Success!" : _ref$title,
          _ref$text = _ref.text,
          text = _ref$text === void 0 ? "That's all done!" : _ref$text,
          _ref$timer = _ref.timer,
          timer = _ref$timer === void 0 ? 1000 : _ref$timer,
          _ref$showConfirmation = _ref.showConfirmationButton,
          showConfirmationButton = _ref$showConfirmation === void 0 ? false : _ref$showConfirmation;

      this.alert({
        title: title,
        text: text,
        timer: timer,
        showConfirmButton: showConfirmationButton,
        type: 'success'
      });
    },
    error: function error() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$title = _ref2.title,
          title = _ref2$title === void 0 ? "Error!" : _ref2$title,
          _ref2$text = _ref2.text,
          text = _ref2$text === void 0 ? "Oops...Something went wrong" : _ref2$text;

      this.alert({
        title: title,
        text: text,
        type: 'error'
      });
    },
    confirm: function confirm(callback, options, title, text) {
      options = Object.assign({
        title: title || "Are you sure?",
        text: text || "Are you sure you want to do that?",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes" // closeOnConfirm: false

      }, options);
      this.$swal.fire(options).then(callback);
    }
  }
};

/***/ }),

/***/ "./resources/js/lib/Mixins/Error.js":
/*!******************************************!*\
  !*** ./resources/js/lib/Mixins/Error.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  data: function data() {
    return {
      errors: []
    };
  },
  methods: {
    hasError: function hasError(index, key) {
      return "".concat(index, ".").concat(key) in this.errors;
    },
    getError: function getError(index, key) {
      return this.errors["".concat(index, ".").concat(key)][0].replace('.', '').replace(new RegExp("[0-9]", "g"), ' ').replace(/#|_/g, ' ');
    },
    setDefaultErrors: function setDefaultErrors() {
      this.errors = [];
    }
  }
};

/***/ }),

/***/ "./resources/js/lib/Mixins/Utils.js":
/*!******************************************!*\
  !*** ./resources/js/lib/Mixins/Utils.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  methods: {
    reload: function reload() {
      var _this = this;

      var location = this.$route.fullPath;
      this.$router.replace('/');
      this.$nextTick(function () {
        return _this.$router.replace(location);
      });
    }
  }
};

/***/ }),

/***/ "./resources/js/views/dashboard/profile/edit-profile.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/dashboard/profile/edit-profile.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_profile_vue_vue_type_template_id_30450d66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.vue?vue&type=template&id=30450d66& */ "./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=template&id=30450d66&");
/* harmony import */ var _edit_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_profile_vue_vue_type_template_id_30450d66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_profile_vue_vue_type_template_id_30450d66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/profile/edit-profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=template&id=30450d66&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=template&id=30450d66& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_profile_vue_vue_type_template_id_30450d66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-profile.vue?vue&type=template&id=30450d66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/edit-profile.vue?vue&type=template&id=30450d66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_profile_vue_vue_type_template_id_30450d66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_profile_vue_vue_type_template_id_30450d66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);