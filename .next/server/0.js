exports.ids = [0];
exports.modules = {

/***/ "./components/MarkdownRenderer.jsx":
/*!*****************************************!*\
  !*** ./components/MarkdownRenderer.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-it */ "markdown-it");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var github_markdown_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! github-markdown-css */ "./node_modules/github-markdown-css/github-markdown.css");
/* harmony import */ var github_markdown_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(github_markdown_css__WEBPACK_IMPORTED_MODULE_2__);




var md = new markdown_it__WEBPACK_IMPORTED_MODULE_1___default.a({
  html: true,
  linkify: true // 链接字符串转化为链接

});

function b64_to_utf8(str) {
  return decodeURIComponent(escape(atob(str)));
} // memo： 只要props没有变化，就不需要渲染


/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function MarkdownRenderer(_ref) {
  var content = _ref.content,
      isBase64 = _ref.isBase64;
  var markdown = isBase64 ? b64_to_utf8(content) : content;
  var html = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return md.render(markdown);
  }, [markdown]); // 依赖是markdown

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }));
}));

/***/ }),

/***/ "./node_modules/github-markdown-css/github-markdown.css":
/*!**************************************************************!*\
  !*** ./node_modules/github-markdown-css/github-markdown.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=0.js.map