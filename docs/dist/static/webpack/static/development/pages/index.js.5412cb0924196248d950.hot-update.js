webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Fragments/Top.tsx":
/*!**************************************!*\
  !*** ./components/Fragments/Top.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Top; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "../node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollspy */ "../node_modules/react-scrollspy/lib/Scrollspy.js");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_top_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/top-logo.svg */ "./assets/top-logo.svg");
/* harmony import */ var _assets_top_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_top_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_top_nav_amathon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/top-nav-amathon.svg */ "./assets/top-nav-amathon.svg");
/* harmony import */ var _assets_top_nav_amathon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_top_nav_amathon_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_top_nav_ausg_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/top-nav-ausg.svg */ "./assets/top-nav-ausg.svg");
/* harmony import */ var _assets_top_nav_ausg_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_top_nav_ausg_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_top_nav_awskrug_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/top-nav-awskrug.svg */ "./assets/top-nav-awskrug.svg");
/* harmony import */ var _assets_top_nav_awskrug_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_top_nav_awskrug_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styled */ "./styled/index.ts");
/* harmony import */ var _System_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../System/Button */ "./components/System/Button.tsx");
/* harmony import */ var _System_Section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../System/Section */ "./components/System/Section.tsx");


var _jsxFileName = "/Users/tony/workspace/tonyfromundefined/amathon/src/components/Fragments/Top.tsx";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: none;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











function Top() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isScrolled = _useState2[0],
      setIsScrolled = _useState2[1];

  var onScroll = function onScroll() {
    if (window.scrollY < 150) {
      setIsScrolled(false);
    } else if (!isScrolled) {
      setIsScrolled(true);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Fixed, {
    isScrolled: isScrolled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_System_Section__WEBPACK_IMPORTED_MODULE_11__["default"], {
    padding: isScrolled ? '.75rem 1rem' : '1.5rem',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, {
    src: _assets_top_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default.a, {
    items: ['amathon', 'awskrug', 'ausg'],
    currentClassName: "is-current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#amathon",
    offset: "56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavItemContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavAmathon, {
    src: _assets_top_nav_amathon_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#awskrug",
    offset: "56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavItemContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavAwskrug, {
    src: _assets_top_nav_awskrug_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#ausg",
    offset: "56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavItemContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavAusg, {
    src: _assets_top_nav_ausg_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_System_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    icon: ['fas', 'rocket'],
    label: "\uCC38\uAC00 \uC2E0\uCCAD\uD558\uAE30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))));
}
var Fixed = _styled__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  componentId: "sc-1hjt0xo-0"
})(["position:fixed;top:0;left:0;width:100%;z-index:1000;transition:background-color .3s,box-shadow .3s;", ""], function (props) {
  return props.isScrolled && Object(_styled__WEBPACK_IMPORTED_MODULE_9__["css"])(["background-color:#212529;box-shadow:0 .5rem 1rem 0 rgba(0,0,0,.1);"]);
});
var Container = _styled__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  componentId: "sc-1hjt0xo-1"
})(["align-items:center;display:flex;"]);
var Logo = _styled__WEBPACK_IMPORTED_MODULE_9__["default"].img.withConfig({
  componentId: "sc-1hjt0xo-2"
})(["width:9rem;height:1.6875rem;cursor:pointer;"]);
var Space = _styled__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  componentId: "sc-1hjt0xo-3"
})(["flex:1;"]);
var NavItemContainer = _styled__WEBPACK_IMPORTED_MODULE_9__["default"].span.withConfig({
  componentId: "sc-1hjt0xo-4"
})(["cursor:pointer;padding:.5rem;margin-right:.75rem;opacity:.5;transition:opacity .2s;text-decoration:none;&:hover{opacity:.7;}"]);
var Nav = _styled__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  componentId: "sc-1hjt0xo-5"
})(["display:flex;margin-right:.5rem;", " ul{margin:0;.is-current > ", "{opacity:1;&:hover{opacity:1;}}}"], _styled__WEBPACK_IMPORTED_MODULE_9__["media"].lessThan('medium')(_templateObject()), NavItemContainer);
var NavAmathon = _styled__WEBPACK_IMPORTED_MODULE_9__["default"].img.withConfig({
  componentId: "sc-1hjt0xo-6"
})(["width:3.5625rem;height:.75rem;"]);
var NavAwskrug = _styled__WEBPACK_IMPORTED_MODULE_9__["default"].img.withConfig({
  componentId: "sc-1hjt0xo-7"
})(["width:4.125rem;height:.6875rem;"]);
var NavAusg = _styled__WEBPACK_IMPORTED_MODULE_9__["default"].img.withConfig({
  componentId: "sc-1hjt0xo-8"
})(["width:2.25rem;height:.6875rem;"]);

/***/ })

})
//# sourceMappingURL=index.js.5412cb0924196248d950.hot-update.js.map