(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Mixins/Alert */ "./resources/js/lib/Mixins/Alert.js");
/* harmony import */ var _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/Mixins/ExtendedPromises */ "./resources/js/lib/Mixins/ExtendedPromises.js");
/* harmony import */ var _lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/constant */ "./resources/js/lib/constant.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_3__);
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
  name: "login",
  inject: ["authRepository"],
  mixins: [_lib_Mixins_ExtendedPromises__WEBPACK_IMPORTED_MODULE_1___default.a, _lib_Mixins_Alert__WEBPACK_IMPORTED_MODULE_0___default.a],
  data: function data() {
    return {
      title: "Welcome back!",
      form: this.buildForm(),
      errors: {}
    };
  },
  mounted: function mounted() {},
  computed: {
    authError: function authError() {
      return this.$store.getters.authError;
    },
    registeredUser: function registeredUser() {
      return this.$store.getters.registeredUser;
    }
  },
  methods: {
    buildForm: function buildForm(auth) {
      return new vform__WEBPACK_IMPORTED_MODULE_3__["Form"]({
        email: auth ? auth.email : null,
        password: auth ? auth.password : null,
        remember_me: auth ? auth.remember_me : false
      });
    },
    goToForgetPassword: function goToForgetPassword() {
      this.goToGivenRouteName("forget-password");
    },
    goToGivenRouteName: function goToGivenRouteName(routeName) {
      this.$router.push({
        name: routeName
      });
    },
    login: function login() {
      var _this = this;

      var route = "";
      this.form.startProcessing();
      this.$store.dispatch("login");
      var operation = this.response(this.authRepository.login(this.form));
      operation.then(function (data) {
        if (operation.isFulfilled()) {
          // console.log(data);
          _this.$store.commit("loginSuccess", data);

          _this.form.finishProcessing();

          if (_this.$store.getters.getRole) {
            route = _lib_constant__WEBPACK_IMPORTED_MODULE_2__["NORMAL_REDIRECT_URL"];
          }

          _this.$router.push(route);

          _this.$toastr.s("", "You are logged in successfully !");
        }
      })["catch"](function (err) {
        if (operation.isRejected()) {
          if (err.status === 417) {
            _this.errors.set(err.data.body);
          }

          if (err.status === 401) {
            // console.log(err.data.body);
            // this.$bvToast.toast(err.data.body, {
            //   title: `Login Error`,
            //   variant: "danger",
            //   solid: true,
            // });
            _this.$toastr.e("error", err.data.body);
          }

          _this.$store.commit("loginFailed", {
            err: err
          });
        }

        _this.form.finishProcessing();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "main--section" }, [
    _c("div", { staticClass: "main--box" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "login--databox" }, [
        _c("div", { staticClass: "login--groupbox" }, [
          _c("div", { staticClass: "login--formbox" }, [
            _c("div", { staticClass: "title" }, [
              _vm._v("Sign in to your account")
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "login--form mt--20",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.login.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "form--group" }, [
                  _c(
                    "label",
                    { staticClass: "form--label", attrs: { for: "email" } },
                    [_vm._v("Enter Email")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    staticClass: "form--input",
                    attrs: {
                      id: "email",
                      type: "email",
                      placeholder: "Enter Email",
                      onblur: "this.placeholder='Enter Email'",
                      onfocus: "this.placeholder=''"
                    },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.email,
                          expression: "errors.email"
                        }
                      ],
                      staticClass: "invalid-feedback"
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.errors.email) +
                          "\n              "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form--group" }, [
                  _c(
                    "label",
                    { staticClass: "form--label", attrs: { for: "password" } },
                    [_vm._v("Enter password")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.password,
                        expression: "form.password"
                      }
                    ],
                    staticClass: "form--input",
                    attrs: {
                      type: "password",
                      id: "password",
                      placeholder: "Enter password",
                      onblur: "this.placeholder='Enter password'",
                      onfocus: "this.placeholder=''"
                    },
                    domProps: { value: _vm.form.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "password", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.password,
                          expression: "errors.password"
                        }
                      ],
                      staticClass: "invalid-feedback"
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.errors.password) +
                          "\n              "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form--group" }, [
                  _c(
                    "button",
                    {
                      staticClass: "form--submit",
                      attrs: { type: "submit", disabled: _vm.form.busy }
                    },
                    [
                      _vm._v("\n                Sign in "),
                      _vm.form.busy
                        ? _c("i", { staticClass: "fa fa-spinner fa-spin" })
                        : _vm._e()
                    ]
                  )
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "main--partneredlogo" })
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main--databox" }, [
      _c("div", { staticClass: "site--logo" }, [
        _c("a", { attrs: { href: "#", title: "" } }, [_vm._v("Buffet CRM")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "home_banners" }, [
        _c("img", { attrs: { src: "frontend/img/start.svg", alt: "" } }),
        _vm._v(" "),
        _c("div", { staticClass: "home_banners_text" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "main--footer" }, [
        _c("ul", { staticClass: "main--footerlist" }, [
          _c("li", [
            _c("a", { attrs: { href: "" } }, [_vm._v("Buffet system")])
          ])
        ])
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

/***/ "./resources/js/views/auth/login.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/auth/login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=6517b581& */ "./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/auth/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/auth/login.vue?vue&type=template&id=6517b581& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=6517b581& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);