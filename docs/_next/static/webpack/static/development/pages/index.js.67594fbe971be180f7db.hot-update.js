webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons_Heart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/icons/Heart */ "./components/icons/Heart.tsx");
/* harmony import */ var _components_icons_LeftMeeple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/icons/LeftMeeple */ "./components/icons/LeftMeeple.tsx");
/* harmony import */ var _components_icons_RightMeeple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icons/RightMeeple */ "./components/icons/RightMeeple.tsx");
/* harmony import */ var _projects_wedding_puzzle_WeddingPuzzleCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../projects/wedding-puzzle/WeddingPuzzleCard */ "./projects/wedding-puzzle/WeddingPuzzleCard.tsx");
/* harmony import */ var _projects_wedding_registry_WeddingRegistryCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../projects/wedding-registry/WeddingRegistryCard */ "./projects/wedding-registry/WeddingRegistryCard.tsx");
var _jsxFileName = "/Users/cameronchristensen/ninaandcam/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var time = 2000;

var Home = function Home() {
  var classes = useStyles({});

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      shouldSlide = _useState[0],
      setShouldSlide = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return setShouldSlide(true);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showNames = _useState2[0],
      setShowNames = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setTimeout(function () {
      setShowNames(true);
    }, time);
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Nina and Cam"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    "in": showNames,
    timeout: time,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: classes.heart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_icons_Heart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "".concat(classes.icon, " ").concat(classes.heartIcon),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), __jsx("div", {
    className: classes.left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Slide"], {
    direction: "right",
    "in": shouldSlide,
    timeout: time,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: classes.iconHolder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    "in": showNames,
    timeout: time,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.name,
    variant: "button",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Nina")), __jsx(_components_icons_LeftMeeple__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })))), __jsx("div", {
    className: classes.right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Slide"], {
    direction: "left",
    "in": shouldSlide,
    timeout: time,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: classes.iconHolder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_components_icons_RightMeeple__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    "in": showNames,
    timeout: time,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.name,
    variant: "button",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Cam")))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    className: classes.cardsContainer,
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Fade"], {
    "in": showNames,
    timeout: time,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_projects_wedding_registry_WeddingRegistryCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(_projects_wedding_puzzle_WeddingPuzzleCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    header: {
      display: 'flex',
      padding: '32px 0',
      position: 'relative'
    },
    left: {
      width: '50%',
      display: 'flex',
      flexDirection: 'row-reverse'
    },
    right: {
      width: '50%',
      display: 'flex'
    },
    icon: {
      fontSize: '64px',
      color: '#222'
    },
    iconHolder: {
      display: 'flex',
      alignItems: 'center'
    },
    heart: {
      left: '0',
      right: '0',
      margin: 'auto',
      position: 'absolute',
      width: '64px'
    },
    heartIcon: {
      color: theme.palette.primary.light
    },
    name: {
      fontSize: '32px'
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
});

/***/ })

})
//# sourceMappingURL=index.js.67594fbe971be180f7db.hot-update.js.map