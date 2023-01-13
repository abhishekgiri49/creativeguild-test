(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/password-profile.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/profile/password-profile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Mixins/Alert */ "./resources/js/lib/Mixins/Alert.js");
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/Mixins/Error */ "./resources/js/lib/Mixins/Error.js");
/* harmony import */ var _lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/Mixins/Utils */ "./resources/js/lib/Mixins/Utils.js");
/* harmony import */ var _lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/Mixins/ExtendedPromises */ "./resources/js/lib/Mixins/ExtendedPromises.js");
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);
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
  name: "change-password",
  mixins: [_lib_Mixins_Error__WEBPACK_IMPORTED_MODULE_1___default.a, _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_3___default.a, _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0___default.a, _lib_Mixins_Utils__WEBPACK_IMPORTED_MODULE_2___default.a],
  inject: ["authRepository", "userRepository"],
  data: function data() {
    return {
      form: this.buildForm(),
      setting: {},
      formData: {
        oldpassword: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    buildForm: function buildForm(formData) {
      return new GPForm({
        oldpassword: formData ? formData.oldpassword : null,
        password: formData ? formData.password : null,
        password_confirmation: formData ? formData.password_confirmation : null
      });
    },
    save: function save() {
      var _this = this;

      this.form.startProcessing();
      var operation = this.response(this.userRepository.updatePassword(this.formData));
      operation.then(function (data) {
        if (operation.isFulfilled()) {
          _this.$router.push("/user/invoice-list");

          _this.form.finishProcessing();

          _this.$toastr.s("SUCCESS", "Successfully ".concat(_this.formData ? "updated" : "added", " !"));
        }
      })["catch"](function (err) {
        if (operation.isRejected()) {
          // console.log(err.data.body);
          if (err.status === 401) {
            _this.errors = err.data.body;
          }
        }

        _this.form.finishProcessing();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/password-profile.vue?vue&type=template&id=c0b95712&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/profile/password-profile.vue?vue&type=template&id=c0b95712& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                _c("router-link", { attrs: { to: "/user/edit/profile" } }, [
                  _c("i", { staticClass: "fas fa-cog fa-fw" }),
                  _vm._v(" Edit Profile")
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
                    attrs: { to: "/user/password/change" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-unlock-alt fa-fw" }),
                    _vm._v(" Change\n              Password")
                  ]
                )
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
                  _c("div", { staticClass: "infieldholder" }, [
                    _c("span", { staticClass: "lab" }, [
                      _vm._v("Old Password:")
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.oldpassword,
                            expression: "formData.oldpassword"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "password", name: "oldpassword" },
                        domProps: { value: _vm.formData.oldpassword },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formData,
                              "oldpassword",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm.errors.oldpassword
                      ? _c("span", { staticClass: "error" }, [
                          _vm._v(
                            "\n                  " +
                              _vm._s(_vm.errors.oldpassword[0]) +
                              "\n                "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "infieldholder" }, [
                    _c("span", { staticClass: "lab" }, [
                      _vm._v("New Password:")
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.password,
                            expression: "formData.password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "password", name: "newpassword" },
                        domProps: { value: _vm.formData.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formData,
                              "password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm.errors.password
                      ? _c("span", { staticClass: "error" }, [
                          _vm._v(
                            "\n                  " +
                              _vm._s(_vm.errors.password[0]) +
                              "\n                "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "infieldholder" }, [
                    _c("span", { staticClass: "lab" }, [
                      _vm._v("Confirm Password:")
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.password_confirmation,
                            expression: "formData.password_confirmation"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "password", name: "confirmpassword" },
                        domProps: { value: _vm.formData.password_confirmation },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formData,
                              "password_confirmation",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm.errors.password_confirmation
                      ? _c("span", { staticClass: "error" }, [
                          _vm._v(
                            "\n                  " +
                              _vm._s(_vm.errors.password_confirmation[0]) +
                              "\n                "
                          )
                        ])
                      : _vm._e()
                  ]),
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
          [_vm._v("Change Password")]
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

/***/ "./resources/js/views/dashboard/profile/password-profile.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/dashboard/profile/password-profile.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _password_profile_vue_vue_type_template_id_c0b95712___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-profile.vue?vue&type=template&id=c0b95712& */ "./resources/js/views/dashboard/profile/password-profile.vue?vue&type=template&id=c0b95712&");
/* harmony import */ var _password_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-profile.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/profile/password-profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _password_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _password_profile_vue_vue_type_template_id_c0b95712___WEBPACK_IMPORTED_MODULE_0__["render"],
  _password_profile_vue_vue_type_template_id_c0b95712___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/profile/password-profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/profile/password-profile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/profile/password-profile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./password-profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/password-profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/profile/password-profile.vue?vue&type=template&id=c0b95712&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/profile/password-profile.vue?vue&type=template&id=c0b95712& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_profile_vue_vue_type_template_id_c0b95712___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./password-profile.vue?vue&type=template&id=c0b95712& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/password-profile.vue?vue&type=template&id=c0b95712&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_profile_vue_vue_type_template_id_c0b95712___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_profile_vue_vue_type_template_id_c0b95712___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);