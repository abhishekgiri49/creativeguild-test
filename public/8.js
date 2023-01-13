(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/view-profile.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/profile/view-profile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "view-profile",
  inject: ["authRepository"],
  data: function data() {
    return {
      setting: {}
    };
  },
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/view-profile.vue?vue&type=template&id=304fc981&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/profile/view-profile.vue?vue&type=template&id=304fc981& ***!
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
                _c(
                  "router-link",
                  {
                    staticClass: "active",
                    attrs: { to: "/user/view/profile" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-id-badge fa-fw" }),
                    _vm._v(" Profile")
                  ]
                )
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
              _c("div", { staticClass: "white-box-st-padding bb" }, [
                _c("div", { staticClass: "infieldholder" }, [
                  _c("span", { staticClass: "lab" }, [_vm._v("Name:")]),
                  _vm._v(
                    " " + _vm._s(_vm.currentUser.name) + "\n              "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "infieldholder" }, [
                  _c("span", { staticClass: "lab" }, [_vm._v("Userame:")]),
                  _vm._v(
                    " " + _vm._s(_vm.currentUser.username) + "\n              "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "infieldholder" }, [
                  _c("span", { staticClass: "lab" }, [_vm._v("Address:")]),
                  _vm._v(
                    " " + _vm._s(_vm.currentUser.address) + "\n              "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "infieldholder" }, [
                  _c("span", { staticClass: "lab" }, [_vm._v("Phone:")]),
                  _vm._v(
                    " +91 -\n                " +
                      _vm._s(_vm.currentUser.phone) +
                      "\n              "
                  )
                ])
              ])
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
          [_vm._v("View Profile")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/dashboard/profile/view-profile.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/dashboard/profile/view-profile.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_profile_vue_vue_type_template_id_304fc981___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-profile.vue?vue&type=template&id=304fc981& */ "./resources/js/views/dashboard/profile/view-profile.vue?vue&type=template&id=304fc981&");
/* harmony import */ var _view_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-profile.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/profile/view-profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_profile_vue_vue_type_template_id_304fc981___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_profile_vue_vue_type_template_id_304fc981___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/profile/view-profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/profile/view-profile.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/profile/view-profile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view-profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/view-profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/profile/view-profile.vue?vue&type=template&id=304fc981&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/profile/view-profile.vue?vue&type=template&id=304fc981& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_profile_vue_vue_type_template_id_304fc981___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view-profile.vue?vue&type=template&id=304fc981& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/profile/view-profile.vue?vue&type=template&id=304fc981&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_profile_vue_vue_type_template_id_304fc981___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_profile_vue_vue_type_template_id_304fc981___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);