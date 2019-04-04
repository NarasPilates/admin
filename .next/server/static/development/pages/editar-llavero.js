module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AdminLayout.js":
/*!***********************************!*\
  !*** ./components/AdminLayout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TopNavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopNavBar */ "./components/TopNavBar.js");
/* harmony import */ var _SidebarLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarLeft */ "./components/SidebarLeft.js");
/* harmony import */ var _SidebarRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarRight */ "./components/SidebarRight.js");
/* harmony import */ var _SidebarRightHeading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarRightHeading */ "./components/SidebarRightHeading.js");
var _jsxFileName = "/Users/sebperez/dev/naraspilates/admin/components/AdminLayout.js";







var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "Sentir, Responsive admin and dashboard UI kits template",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: "admin,bootstrap,template,responsive admin,dashboard template,web apps template",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "author",
    content: "Ari Rusmanto, Isoh Design Studio, Warung Themes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Admin - Naras Pilates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/css/bootstrap.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/weather-icon/css/weather-icons.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/prettify/prettify.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/magnific-popup/magnific-popup.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/owl-carousel/owl.carousel.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/owl-carousel/owl.theme.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/owl-carousel/owl.transitions.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/chosen/chosen.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/icheck/skins/all.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/datepicker/datepicker.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/timepicker/bootstrap-timepicker.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/validator/bootstrapValidator.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/summernote/summernote.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/markdown/bootstrap-markdown.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/datatable/css/bootstrap.datatable.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/morris-chart/morris.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/c3-chart/c3.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/slider/slider.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/salvattore/salvattore.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/toastr/toastr.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/fullcalendar/fullcalendar/fullcalendar.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/fullcalendar/fullcalendar/fullcalendar.print.css",
    rel: "stylesheet",
    media: "print",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/plugins/font-awesome/css/all.min.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/css/style.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/css/style-responsive.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TopNavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarLeft__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarRightHeading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarRight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, props.children))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "back-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "root",
    style: {
      display: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/js/jquery.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/js/bootstrap.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/retina/retina.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/nicescroll/jquery.nicescroll.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/slimscroll/jquery.slimscroll.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/backstretch/jquery.backstretch.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/skycons/skycons.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/prettify/prettify.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/magnific-popup/jquery.magnific-popup.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/owl-carousel/owl.carousel.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/chosen/chosen.jquery.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/icheck/icheck.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/datepicker/bootstrap-datepicker.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/timepicker/bootstrap-timepicker.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/mask/jquery.mask.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/validator/bootstrapValidator.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/datatable/js/jquery.dataTables.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/datatable/js/bootstrap.datatable.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/summernote/summernote.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/markdown/markdown.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/markdown/to-markdown.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/markdown/bootstrap-markdown.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/slider/bootstrap-slider.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/toastr/toastr.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/fullcalendar/lib/jquery-ui.custom.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/fullcalendar/fullcalendar/fullcalendar.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/js/full-calendar.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/easypie-chart/easypiechart.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/easypie-chart/jquery.easypiechart.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "text/javascript",
    src: "/static/plugins/jquery-knob/excanvas.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/jquery-knob/jquery.knob.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/jquery-knob/knob.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/flot-chart/jquery.flot.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/flot-chart/jquery.flot.tooltip.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/flot-chart/jquery.flot.resize.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/flot-chart/jquery.flot.selection.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/flot-chart/jquery.flot.stack.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/flot-chart/jquery.flot.time.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/morris-chart/raphael.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/morris-chart/morris.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/c3-chart/d3.v3.min.js",
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/plugins/c3-chart/c3.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/js/apps.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Breadcrumb.js":
/*!**********************************!*\
  !*** ./components/Breadcrumb.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sebperez/dev/naraspilates/admin/components/Breadcrumb.js";



var Breadcrumb = function Breadcrumb() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb default square rsaquo sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Example pages")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Blank"));
};

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./components/SidebarLeft.js":
/*!***********************************!*\
  !*** ./components/SidebarLeft.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sebperez/dev/naraspilates/admin/components/SidebarLeft.js";



var SidebarLeft = function SidebarLeft() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-left sidebar-nicescroller dark-color light-color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sidebar-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-tachometer-alt icon-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), "Dashboard"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-user-graduate icon-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-angle-right chevron-icon-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), "Alumnos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "submenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/alumnos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Alumnos"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cobros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Cobros"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-users icon-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-angle-right chevron-icon-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), "Profesores"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "submenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profesores",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Profesores"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cobros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Pagos"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-cogs icon-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-angle-right chevron-icon-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), "Configuraci\xF3n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "submenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/planes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Planes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/llaveros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Llaveros")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarLeft);

/***/ }),

/***/ "./components/SidebarRight.js":
/*!************************************!*\
  !*** ./components/SidebarRight.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sebperez/dev/naraspilates/admin/components/SidebarRight.js";



var SidebarRight = function SidebarRight() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-right right-sidebar-nicescroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade in active",
    id: "online-user-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sidebar-menu online-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "ONLINE USERS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-mobile-phone device-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), "Thomas White", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), "Doina Slaivici", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Duis autem vel eum iriure dolor in hendrerit in "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-android device-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), "Harry Nichols", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "I think so"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-mobile-phone device-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), "Mihaela Cihac", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Yes, I'll be waiting"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-apple device-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), "Harold Chavez", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Thank you!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "IDLE USERS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-windows device-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), "Elizabeth Owens", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "2 hours"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-apple device-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), "Frank Oliver", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "4 hours"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), "Mya Weastell", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "15 minutes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-mobile-phone device-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), "Carl Rodriguez", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "20 hours"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-mobile-phone device-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), "Nikita Carter", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "2 minutes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "OFFLINE USERS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), "Craig Dixon", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Last seen 2 hours ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), "Mikayla King", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Last seen yesterday"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), "Richard Dixon", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Last seen Feb 20, 2014 05:45:50"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), "Brenda Fuller", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Last seen Feb 15, 2014 11:35:50"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-status danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), "Ryan Ortega", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Last seen Jan 20, 2014 03:45:50"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "notification-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sidebar-menu sidebar-notification",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "TODAY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "Karen Wallace",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Posted something on your profile page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "17 seconds ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "Phillip Lucas",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Uploaded a photo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "2 hours ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "Sandra Myers",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Commented on your post"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "5 hours ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "Charles Guerrero",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Send you a message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "17 hours ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "Maria Simpson",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Change her avatar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "20 hours ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "YESTERDAY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "Jason Crawford",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Posted something on your profile page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Yesterday 10:45:12"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "Cynthia Mendez",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Uploaded a photo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Yesterday 08:00:05"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "Peter Ramirez",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Commented on your post"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Yesterday 07:49:08"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "Jessica Gutierrez",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Send you a message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Yesterday 07:35:19"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "Ryan Ortega",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "ava-sidebar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Change her avatar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Yesterday 06:00:00"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "static text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary btn-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "See all notifications")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "task-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sidebar-menu sidebar-task",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "UNCOMPLETED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "in progress",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-clock-o icon-task-sidebar progress",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), "Creating documentation", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Deadline : Next week"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "uncompleted",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-exclamation-circle icon-task-sidebar uncompleted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), "Eating sand", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "Deadline : 2 hours ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "uncompleted",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-exclamation-circle icon-task-sidebar uncompleted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), "Sending payment", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Deadline : 2 seconds ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "in progress",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-clock-o icon-task-sidebar progress",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), "Uploading new version", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Deadline : Tomorrow"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "COMPLETED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "completed",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-check-circle-o icon-task-sidebar completed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }), "Drinking coffee", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Completed : 10 hours ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "completed",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-check-circle-o icon-task-sidebar completed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), "Walking to nowhere", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Completed : Yesterday"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "completed",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-check-circle-o icon-task-sidebar completed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), "Sleeping under bridge", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Completed : Feb 10 2014"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    "data-toggle": "tooltip",
    title: "completed",
    "data-placement": "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-check-circle-o icon-task-sidebar completed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), "Buying some cigarettes", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Completed : Jan 15 2014"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "static text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success btn-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "See all tasks")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade",
    id: "setting-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sidebar-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "ACCOUNT SETTING"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "onoffswitch blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "onoffswitch",
    className: "onoffswitch-checkbox",
    id: "onlinestatus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "onoffswitch-label",
    htmlFor: "onlinestatus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  })))), "Online status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "onoffswitch blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "onoffswitch",
    className: "onoffswitch-checkbox",
    id: "offlinecontact",
    defaultChecked: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "onoffswitch-label",
    htmlFor: "offlinecontact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  })))), "Show offline contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "onoffswitch blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "onoffswitch",
    className: "onoffswitch-checkbox",
    id: "invisiblemode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "onoffswitch-label",
    htmlFor: "invisiblemode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  })))), "Invisible mode"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "onoffswitch blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "onoffswitch",
    className: "onoffswitch-checkbox",
    id: "personalstatus",
    defaultChecked: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "onoffswitch-label",
    htmlFor: "personalstatus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  })))), "Show my personal status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "onoffswitch blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "onoffswitch",
    className: "onoffswitch-checkbox",
    id: "deviceicon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "onoffswitch-label",
    htmlFor: "deviceicon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  })))), "Show my device icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "onoffswitch blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: "onoffswitch",
    className: "onoffswitch-checkbox",
    id: "logmessages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "onoffswitch-label",
    htmlFor: "logmessages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "onoffswitch-switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  })))), "Log all message")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarRight);

/***/ }),

/***/ "./components/SidebarRightHeading.js":
/*!*******************************************!*\
  !*** ./components/SidebarRightHeading.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sebperez/dev/naraspilates/admin/components/SidebarRightHeading.js";



var SidebarRightHeading = function SidebarRightHeading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-right-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-tabs square nav-justified",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#online-user-sidebar",
    "data-toggle": "tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#notification-sidebar",
    "data-toggle": "tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-bell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#task-sidebar",
    "data-toggle": "tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-tasks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#setting-sidebar",
    "data-toggle": "tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-cogs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarRightHeading);

/***/ }),

/***/ "./components/TopNavBar.js":
/*!*********************************!*\
  !*** ./components/TopNavBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sebperez/dev/naraspilates/admin/components/TopNavBar.js";



var TopNavBar = function TopNavBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-navbar primary-color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-navbar-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo-brand primary-color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/logo.png",
    alt: "Naras Pilates logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-nav-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-collapse-sidebar-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-bars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-collapse-sidebar-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-bullhorn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-collapse-nav",
    "data-toggle": "collapse",
    "data-target": "#main-fixed-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-plus icon-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav-user navbar-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    className: "dropdown-toggle",
    "data-toggle": "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "avatar img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), "Hi, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Paris Hawker")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "dropdown-menu square primary margin-list-rounded with-triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Account setting")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Payment setting")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Change password")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "My public profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "lock-screen.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Lock screen")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "login.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Log out"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "main-fixed-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "navbar-form navbar-left",
    role: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Buscar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav navbar-nav navbar-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    className: "dropdown-toggle",
    "data-toggle": "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-danger icon-count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-bell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "dropdown-menu square with-triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-dropdown-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Notifications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollDiv",
    style: {
      position: 'relative',
      overflow: 'hidden',
      width: 'auto',
      height: '350px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-dropdown-content scroll-nav-dropdown",
    style: {
      overflow: 'hidden',
      width: 'auto',
      height: '350px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Thomas White"), " posted on your profile page", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "17 seconds ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Doina Slaivici"), " uploaded photo", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "10 minutes ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Harry Nichols"), " commented on your post", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "40 minutes ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Mihaela Cihac"), " send you a message", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "2 hours ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Harold Chavez"), " change his avatar", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Yesterday"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Elizabeth Owens"), " posted on your profile page", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Yesterday"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Frank Oliver"), " commented on your post", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "A week ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Mya Weastell"), " send you a message", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "April 15, 2014"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Carl Rodriguez"), " joined your weekend party", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "April 01, 2014"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollBar",
    style: {
      background: 'rgb(0, 0, 0)',
      width: '4px',
      position: 'absolute',
      top: '0px',
      opacity: '0.4',
      display: 'block',
      borderRadius: '7px',
      zIndex: '99',
      right: '1px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollRail",
    style: {
      width: '4px',
      height: '100%',
      position: 'absolute',
      top: '0px',
      display: 'none',
      borderRadius: '7px',
      background: 'rgb(51, 51, 51)',
      opacity: '0.3',
      zIndex: '90',
      right: '1px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary btn-square btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "See all notifications")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    className: "dropdown-toggle",
    "data-toggle": "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-warning icon-count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-tasks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "dropdown-menu square margin-list-rounded with-triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-dropdown-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Tasks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollDiv",
    style: {
      position: 'relative',
      overflow: 'hidden',
      width: 'auto',
      height: '350px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-dropdown-content scroll-nav-dropdown",
    style: {
      overflow: 'hidden',
      width: 'auto',
      height: '350px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-check-circle-o absolute-left-content icon-task completed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), "Creating documentation", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Completed : Yesterday"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-clock-o absolute-left-content icon-task progress",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), "Eating sands", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Deadline : Tomorrow"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-clock-o absolute-left-content icon-task progress",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), "Sending payment", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Deadline : Next week"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-exclamation-circle absolute-left-content icon-task uncompleted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), "Uploading new version", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Deadline: 2 seconds ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-exclamation-circle absolute-left-content icon-task uncompleted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), "Drinking coffee", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Deadline : 2 hours ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-check-circle-o absolute-left-content icon-task completed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), "Walking to nowhere", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Completed : over a year ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-check-circle-o absolute-left-content icon-task completed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), "Sleeping under bridge", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Completed : Dec 31, 2013"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-check-circle-o absolute-left-content icon-task completed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), "Buying some cigarettes", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Completed : 2 days ago"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollBar",
    style: {
      background: 'rgb(0, 0, 0)',
      width: '4px',
      position: 'absolute',
      top: '0px',
      opacity: '0.4',
      display: 'block',
      borderRadius: '7px',
      zIndex: '99',
      right: '1px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollRail",
    style: {
      width: '4px',
      height: '100%',
      position: 'absolute',
      top: '0px',
      display: 'none',
      bordeRadius: '7px',
      background: 'rgb(51, 51, 51)',
      opacity: '0.3',
      zIndex: '90',
      right: '1px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary btn-square btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "See all notifications")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    className: "dropdown-toggle",
    "data-toggle": "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-success icon-count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "dropdown-menu square margin-list-rounded with-triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-dropdown-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "Messages"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollDiv",
    style: {
      position: 'relative',
      overflow: 'hidden',
      width: 'auto',
      height: '350px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-dropdown-content scroll-nav-dropdown",
    style: {
      overflow: 'hidden',
      width: 'auto',
      height: '350px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "17 seconds ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "10 minutes ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }), "I think so", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "40 minutes ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), "Yes, I'll be waiting", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "2 hours ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), "Thank you!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Yesterday"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), "No problem! I will never remember that", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Yesterday"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), "Tak gepuk ndasmu sisan lho dab!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "A week ago"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }), "Sorry bro, aku or atau sing jenenge ngono kui", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "April 15, 2014"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), "Will you send me an invitation for your weeding party?", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "April 01, 2014"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollBar",
    style: {
      background: 'rgb(0, 0, 0)',
      width: '4px',
      position: 'absolute',
      top: '0px',
      opacity: '0.4',
      display: 'block',
      borderRadius: '7px',
      zIndex: '99',
      right: '1px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollRail",
    style: {
      width: '4px',
      height: '100%',
      position: 'absolute',
      top: '0px',
      display: 'none',
      bordeRadius: '7px',
      background: 'rgb(51, 51, 51)',
      opacity: '0.3',
      zIndex: '90',
      right: '1px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary btn-square btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "See all message")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#fakelink",
    className: "dropdown-toggle",
    "data-toggle": "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-info icon-count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-users",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "dropdown-menu square margin-list-rounded with-triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-dropdown-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "Friend requests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollDiv",
    style: {
      position: 'relative',
      overflow: 'hidden',
      width: 'auto',
      height: '350px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-dropdown-content static-list scroll-nav-dropdown",
    style: {
      overflow: 'hidden',
      width: 'auto',
      height: '350px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, "Craig Dixon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "2 murtual friends")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6 text-right btn-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, "Accept"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, "Ignore")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, "Mikayla King"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, "20 murtual friends")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6 text-right btn-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "Accept"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "Ignore")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, "Richard Dixon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, "1 murtual friend")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6 text-right btn-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, "Accept"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, "Ignore")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "Brenda Fuller"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, "8 murtual friends")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6 text-right btn-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, "Accept"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, "Ignore")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, "Ryan Ortega"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, "122 murtual friends")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6 text-right btn-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, "Accept"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, "Ignore")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/img/avatar/avatar.jpg",
    className: "absolute-left-content img-circle",
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "Jessica Gutierrez"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small-caps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "45 murtual friends")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6 text-right btn-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, "Accept"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger btn-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, "Ignore")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollBar",
    style: {
      background: 'rgb(0, 0, 0)',
      width: '4px',
      position: 'absolute',
      top: '0px',
      opacity: '0.4',
      display: 'block',
      borderRadius: '7px',
      zIndex: '99',
      right: '1px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slimScrollRail",
    style: {
      width: '4px',
      height: '100%',
      position: 'absolute',
      top: '0px',
      display: 'none',
      bordeRadius: '7px',
      background: 'rgb(51, 51, 51)',
      opacity: '0.3',
      zIndex: '90',
      right: '1px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary btn-square btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, "See all request")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TopNavBar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/editar-llavero.js":
/*!*********************************!*\
  !*** ./pages/editar-llavero.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AdminLayout */ "./components/AdminLayout.js");
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Breadcrumb */ "./components/Breadcrumb.js");
var _jsxFileName = "/Users/sebperez/dev/naraspilates/admin/pages/editar-llavero.js";



function Dashboard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdminLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "page-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Llaveros"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "the-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "small-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "DATOS DEL LLAVERO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "C\xF3digo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control rounded",
    placeholder: "C\xF3digo",
    style: {
      width: '250px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Estado"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "i-grey-flat",
    style: {
      position: 'absolute',
      top: '-20%',
      left: '-20%',
      display: 'none',
      width: '140%',
      height: '140%',
      margin: '0px',
      padding: '0px',
      background: 'rgb(255, 255, 255)',
      border: '0px',
      opacity: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), "Activo")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-rounded-lg btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Guardar"));
}

/***/ }),

/***/ 6:
/*!***************************************!*\
  !*** multi ./pages/editar-llavero.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sebperez/dev/naraspilates/admin/pages/editar-llavero.js */"./pages/editar-llavero.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=editar-llavero.js.map