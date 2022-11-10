"use strict";
(self["webpackChunkbattleships"] = self["webpackChunkbattleships"] || []).push([["bundle"],{

/***/ 426:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBALS */\r\n\r\n* {\r\n    margin: 0; padding: 0;\r\n    font-family: 'Roboto', Helvetica, Arial, sans-serif;\r\n}\r\n\r\nbody {\r\n\r\n    text-align: center;\r\n}\r\n\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n    margin: 20pt;\r\n}\r\n\r\nheader > h1 {\r\n    padding-bottom: 12pt;\r\n}\r\n\r\n/* ALERT */\r\n\r\n.alert {\r\n    font-size: 0.9rem;\r\n    position: absolute;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-radius: 0.5rem;\r\n    top: 60px;\r\n    left: calc(50% - 270px);\r\n    z-index: 1;\r\n    width: 600px;\r\n    padding: 5px 20px;\r\n    border: 1px #a1261e solid;\r\n    box-sizing: border-box;\r\n    background-color: #f56a60;\r\n    color: white;\r\n    margin: 15px auto 0px auto;\r\n    opacity: 0.9;\r\n    transition: opacity 0.6s;\r\n}\r\n\r\n.close-alert {\r\n    margin-left: 15px;\r\n    color: white;\r\n    float: right;\r\n\r\n    line-height: 1.7rem;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    font-weight: 300;\r\n}\r\n\r\n.close-alert:hover {\r\n    color: black;\r\n}\r\n\r\n.hidden {\r\n    opacity: 0;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* FORM */\r\n\r\n.form-container {\r\n    width: 80%;\r\n}\r\n\r\nform {\r\n    padding: 20px;\r\n}\r\n\r\nlegend {\r\n    padding: 0px 0px 40px 0px;\r\n}\r\n\r\n#get-coords-form > .form-control > * {\r\n    font-size: 0.9rem;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#get-coords-form > .form-control > label {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}\r\n\r\n#get-coords-form > .form-control > input[type=\"text\"] {\r\n    width: 40px;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.form-control {\r\n    padding: 10px 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.form-control > * {\r\n    padding: 0.7rem;\r\n    font-size: 1rem;\r\n    border-radius: 2rem;\r\n}\r\n\r\nlabel {\r\n    text-align: end;\r\n}\r\n\r\nlabel[for=\"username\"] {\r\n\r\n    text-align: center;\r\n    width: 100px;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    border: 1px lightgray solid;\r\n    \r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n.radio-container {\r\n    display: grid;\r\n    grid-template-columns: 1rem auto;\r\n    grid-template-rows: auto auto;\r\n    gap: 0.5rem;\r\n\r\n}\r\n\r\n.radio-container > * {\r\n    margin: 0;\r\n    padding: 0;\r\n   \r\n}\r\n\r\n.radio-container > label {\r\n    width: 80px;\r\n    text-align: left;\r\n \r\n    \r\n}\r\n\r\n\r\ninput[type=\"submit\"] {\r\n    margin-left: 20px;\r\n    background-color: #7CB342;\r\n    width: 90px;\r\n    color: #fff;\r\n    font-size: 0.9rem;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: 0.2s ease;\r\n    -webkit-transition: 0.2s ease;\r\n}\r\n\r\ninput[type=\"submit\"]:hover, input[type=\"submit\"]:active {\r\n    background-color: #558B2F;\r\n}\r\n\r\n#submit-coords {\r\n    margin-top: 20px;\r\n}\r\n\r\n.error {\r\n    z-index: 1;\r\n    padding: 0;\r\n    font-size: 0.7rem;\r\n    color: white;\r\n    background-color: #f33f63;\r\n    border-radius: 0 0 5px 5px;\r\n    box-sizing: border-box;\r\n    \r\n}\r\n\r\n.error.active {\r\n    font-size: 0.7rem;\r\n    margin-top: -20px;\r\n    width: 250px;\r\n    padding: 0.3rem 0.5rem 0.2rem 0.5rem;\r\n}\r\n\r\n.invisible {\r\n    display: none !important;\r\n}\r\n\r\n/* BOARDS */\r\n\r\n.board-container {\r\n    height: 500px;\r\n    width: 500px;\r\n    border: 1px black solid;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, auto);\r\n    grid-template-rows: repeat(10, auto);\r\n    margin: 25px;\r\n\r\n}\r\n\r\n#board-Jasper {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n/* CELLS */\r\n\r\n.cell {\r\n    border: 1px black solid;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    align-items: center;\r\n    font-size: 0.9rem;\r\n    background-color: #0D47A1;\r\n}\r\n\r\n#board-Jasper .cell.open:hover {\r\n    background-color: #82B1FF;\r\n}\r\n\r\n.cell-ship {\r\n    background-color: #FF5733;\r\n}\r\n\r\n.cell-ship::before {\r\n    content: 'ship';\r\n}\r\n\r\n.cell-miss {\r\n    background-color: #D4E157;\r\n}\r\n\r\n.cell-miss::before {\r\n    content: 'miss';\r\n}\r\n\r\n.cell-hit {\r\n    background-color: #F44336;\r\n}\r\n\r\n.cell-hit::before {\r\n    content: 'hit';\r\n}\r\n\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n    padding-top: 13%;\r\n    bottom: 0;\r\n    font-size: 10pt;\r\n    width: 100%;\r\n    height: 19px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA,YAAY;;AAEZ;IACI,SAAS,EAAE,UAAU;IACrB,mDAAmD;AACvD;;AAEA;;IAEI,kBAAkB;AACtB;;;AAGA,WAAW;;AAEX;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA,UAAU;;AAEV;IACI,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;IACT,uBAAuB;IACvB,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,yBAAyB;IACzB,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,YAAY;;IAEZ,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,cAAc;AAClB;;AAEA,SAAS;;AAET;IACI,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,kBAAkB;;AAEtB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,2BAA2B;;AAE/B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B,WAAW;;AAEf;;AAEA;IACI,SAAS;IACT,UAAU;;AAEd;;AAEA;IACI,WAAW;IACX,gBAAgB;;;AAGpB;;;AAGA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,UAAU;IACV,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;IACzB,0BAA0B;IAC1B,sBAAsB;;AAE1B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,YAAY;;AAEhB;;AAEA;IACI,eAAe;AACnB;;;;;AAKA,UAAU;;AAEV;IACI,uBAAuB;IACvB,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;AAClB;;;AAGA,WAAW;;AAEX;IACI,gBAAgB;IAChB,SAAS;IACT,eAAe;IACf,WAAW;IACX,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n\r\n/* GLOBALS */\r\n\r\n* {\r\n    margin: 0; padding: 0;\r\n    font-family: 'Roboto', Helvetica, Arial, sans-serif;\r\n}\r\n\r\nbody {\r\n\r\n    text-align: center;\r\n}\r\n\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n    margin: 20pt;\r\n}\r\n\r\nheader > h1 {\r\n    padding-bottom: 12pt;\r\n}\r\n\r\n/* ALERT */\r\n\r\n.alert {\r\n    font-size: 0.9rem;\r\n    position: absolute;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-radius: 0.5rem;\r\n    top: 60px;\r\n    left: calc(50% - 270px);\r\n    z-index: 1;\r\n    width: 600px;\r\n    padding: 5px 20px;\r\n    border: 1px #a1261e solid;\r\n    box-sizing: border-box;\r\n    background-color: #f56a60;\r\n    color: white;\r\n    margin: 15px auto 0px auto;\r\n    opacity: 0.9;\r\n    transition: opacity 0.6s;\r\n}\r\n\r\n.close-alert {\r\n    margin-left: 15px;\r\n    color: white;\r\n    float: right;\r\n\r\n    line-height: 1.7rem;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    font-weight: 300;\r\n}\r\n\r\n.close-alert:hover {\r\n    color: black;\r\n}\r\n\r\n.hidden {\r\n    opacity: 0;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* FORM */\r\n\r\n.form-container {\r\n    width: 80%;\r\n}\r\n\r\nform {\r\n    padding: 20px;\r\n}\r\n\r\nlegend {\r\n    padding: 0px 0px 40px 0px;\r\n}\r\n\r\n#get-coords-form > .form-control > * {\r\n    font-size: 0.9rem;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#get-coords-form > .form-control > label {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}\r\n\r\n#get-coords-form > .form-control > input[type=\"text\"] {\r\n    width: 40px;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.form-control {\r\n    padding: 10px 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.form-control > * {\r\n    padding: 0.7rem;\r\n    font-size: 1rem;\r\n    border-radius: 2rem;\r\n}\r\n\r\nlabel {\r\n    text-align: end;\r\n}\r\n\r\nlabel[for=\"username\"] {\r\n\r\n    text-align: center;\r\n    width: 100px;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    border: 1px lightgray solid;\r\n    \r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n.radio-container {\r\n    display: grid;\r\n    grid-template-columns: 1rem auto;\r\n    grid-template-rows: auto auto;\r\n    gap: 0.5rem;\r\n\r\n}\r\n\r\n.radio-container > * {\r\n    margin: 0;\r\n    padding: 0;\r\n   \r\n}\r\n\r\n.radio-container > label {\r\n    width: 80px;\r\n    text-align: left;\r\n \r\n    \r\n}\r\n\r\n\r\ninput[type=\"submit\"] {\r\n    margin-left: 20px;\r\n    background-color: #7CB342;\r\n    width: 90px;\r\n    color: #fff;\r\n    font-size: 0.9rem;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: 0.2s ease;\r\n    -webkit-transition: 0.2s ease;\r\n}\r\n\r\ninput[type=\"submit\"]:hover, input[type=\"submit\"]:active {\r\n    background-color: #558B2F;\r\n}\r\n\r\n#submit-coords {\r\n    margin-top: 20px;\r\n}\r\n\r\n.error {\r\n    z-index: 1;\r\n    padding: 0;\r\n    font-size: 0.7rem;\r\n    color: white;\r\n    background-color: #f33f63;\r\n    border-radius: 0 0 5px 5px;\r\n    box-sizing: border-box;\r\n    \r\n}\r\n\r\n.error.active {\r\n    font-size: 0.7rem;\r\n    margin-top: -20px;\r\n    width: 250px;\r\n    padding: 0.3rem 0.5rem 0.2rem 0.5rem;\r\n}\r\n\r\n.invisible {\r\n    display: none !important;\r\n}\r\n\r\n/* BOARDS */\r\n\r\n.board-container {\r\n    height: 500px;\r\n    width: 500px;\r\n    border: 1px black solid;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, auto);\r\n    grid-template-rows: repeat(10, auto);\r\n    margin: 25px;\r\n\r\n}\r\n\r\n#board-Jasper {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n/* CELLS */\r\n\r\n.cell {\r\n    border: 1px black solid;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    align-items: center;\r\n    font-size: 0.9rem;\r\n    background-color: #0D47A1;\r\n}\r\n\r\n#board-Jasper .cell.open:hover {\r\n    background-color: #82B1FF;\r\n}\r\n\r\n.cell-ship {\r\n    background-color: #FF5733;\r\n}\r\n\r\n.cell-ship::before {\r\n    content: 'ship';\r\n}\r\n\r\n.cell-miss {\r\n    background-color: #D4E157;\r\n}\r\n\r\n.cell-miss::before {\r\n    content: 'miss';\r\n}\r\n\r\n.cell-hit {\r\n    background-color: #F44336;\r\n}\r\n\r\n.cell-hit::before {\r\n    content: 'hit';\r\n}\r\n\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n    padding-top: 13%;\r\n    bottom: 0;\r\n    font-size: 10pt;\r\n    width: 100%;\r\n    height: 19px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 537:
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 654:
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ 426);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 379:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 705:
/*!************************!*\
  !*** ./src/Display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ 403);



function Display() {

    // initialise variables
    const main = document.getElementById('main');
    let currentInput = [];
    let coords;
    let orients;
    let username;
    let game;

    // Remove all children from main
    function clearMain() {
        main.innerHTML = '';
    }


    // Show form validation error 
    function error(message) {
        const container = document.getElementById('container');
        const alert = document.createElement('div');
        const close = document.createElement('span');
        alert.classList.add('alert');
        alert.classList.add('alert-error');
        close.classList.add('close-alert');
        close.innerText = '✖';
        
        alert.innerText = message;
        close.addEventListener('click', function() {
            alert.classList.add('hidden');
            setTimeout(function(){ alert.style.display = "none"; }, 600);
        });
        alert.appendChild(close);
        container.appendChild(alert);
    }

    // set username
    function setUsername(name) {
        return username = name;
    }
    
    function getUsername() {
        return username;
    }

    // Print a game board
    function printBoard(board) {
        // make outer container
        const outerdiv = document.createElement('div');
        outerdiv.setAttribute('id', 'board-' + board.owner.name);
        main.appendChild(outerdiv);
        // make header
        const divheader = document.createElement('p');
        divheader.classList.add('board-header');
        divheader.innerText = board.owner.name + "'s board";
        outerdiv.appendChild(divheader);
        // make inner container
        const innerdiv = document.createElement('div');
        innerdiv.classList.add('board-container');
        outerdiv.appendChild(innerdiv)
        // make cells
        for (let i = 0; i < board.board.length; i++) {
            for (let j = 0; j < board.board[i].length; j++) {
                const cell = document.createElement('div');
                if (typeof board.board[i][j] == 'object') {
                    cell.classList.add('cell-ship');   
                } else {
                    cell.classList.add(`cell-${board.board[i][j]}`);
                }
                cell.classList.add('cell');
                cell.classList.add('open');
                cell.classList.add('cell-' + board.owner.name);
                cell.setAttribute('data-coord', `${board.owner.name}-cell-${i}-${j}`);
                innerdiv.appendChild(cell);
            };
        // Remove open class from used cells
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            // Remove 'open' class from this cell if it has been used
            if (cell.classList.contains('cell-miss') || 
                cell.classList.contains('cell-ship') ||
                cell.classList.contains('cell-hit')) {
                cell.classList.remove('open');
            }
        })
        };

        
    };

    function getInput() {
        return currentInput
    };

    // Get user's coords for placing their ships 
    function getUserShips() {
        const carrierinput = document.getElementById('carrier');
        const carrierRadioHor = document.getElementById('carrier-horizontal');
        const carrierRadioVer = document.getElementById('carrier-vertical');
        const battleshipinput = document.getElementById('battleship');
        const battleshipRadioHor = document.getElementById('battleship-horizontal');
        const battleshipRadioVer = document.getElementById('battleship-vertical');
        const destroyerinput = document.getElementById('destroyer');
        const destroyerRadioHor = document.getElementById('destroyer-horizontal');
        const destroyerRadioVer = document.getElementById('destroyer-vertical');
        const submarineinput = document.getElementById('submarine');
        const submarineRadioHor = document.getElementById('submarine-horizontal');
        const submarineRadioVer = document.getElementById('submarine-vertical');
        const patrolinput = document.getElementById('patrol')
        const patrolRadioHor = document.getElementById('patrol-horizontal');
        const patrolRadioVer = document.getElementById('patrol-vertical');

        // get coords
        let carrier = carrierinput.value.split(',');
        let battleship = battleshipinput.value.split(',');
        let destroyer = destroyerinput.value.split(',');
        let submarine = submarineinput.value.split(',');
        let patrolBoat = patrolinput.value.split(',');

        let thesecoords = {
            carrier: carrier,
            battleship: battleship,
            destroyer: destroyer,
            submarine: submarine,
            patrolBoat: patrolBoat
        }
  
        setUserShips(thesecoords);
        

        // get orientations
        let carrierOrient;
        let battleshipOrient;
        let destroyerOrient;
        let submarineOrient;
        let patrolOrient;
        // carrier
        if (carrierRadioHor.checked) {
            carrierOrient = 'horizontal'
        } else if (carrierRadioVer.checked) {
            carrierOrient = 'vertical'
        }
        // battleship
        if (battleshipRadioHor.checked) {
            battleshipOrient = 'horizontal'
        } else if (battleshipRadioVer.checked) {
            battleshipOrient = 'vertical'
        }
        // destroyer
        if (destroyerRadioHor.checked) {
            destroyerOrient = 'horizontal'
        } else if (destroyerRadioVer.checked) {
            destroyerOrient = 'vertical'
        }
        // submarine
        if (submarineRadioHor.checked) {
            submarineOrient = 'horizontal'
        } else if (submarineRadioVer.checked) {
            submarineOrient = 'vertical'
        }
        // patrol
        if (patrolRadioHor.checked) {
            patrolOrient = 'horizontal'
        } else if (patrolRadioVer.checked) {
            patrolOrient = 'vertical'
        }

        let orientations = {
            carrierOrient: carrierOrient,
            battleshipOrient: battleshipOrient,
            destroyerOrient: destroyerOrient,
            submarineOrient: submarineOrient,
            patrolOrient: patrolOrient
        }

        setUserShipOrients(orientations);

        let orients = getUserOrients();
        let coords = getUserCoords();
        

        if (coords === undefined) {
            let message = 'Error: not all coordinates provided';
            error(message);
            return message;
        }

        for (const key in coords) {
            let value = coords[key];
      
            if (value === undefined) {
                let message = 'Error: not all coordinates provided';
                error(message);
                return message;
            }
        }

        for (const key in orients) {
            let value = orients[key];
 
            if (value === undefined) {
                let message = 'Error: not all orientations provided';
                error(message);
                return message;
            }
        }

        main.innerHTML = '';
        startGame(username);
        
    }

    // set the user ship coords
    function setUserShips(obj) {
         
        for (const key in obj) {
            let value = obj[key];

            if (value == '') {
                let message = 'Error: not all coordinates provided';
                console.log(message);
                return;
            }
        }
     
        return coords = {
            userCarrier: Object.values(obj)[0],
            userBattleship: Object.values(obj)[1],
            userDestroyer: Object.values(obj)[2],
            userSubmarine: Object.values(obj)[3],
            userPatrolBoat: Object.values(obj)[4]
        }

    }

    function getUserCoords() {
        return coords;
    }

    function setUserShipOrients(obj) {

        for (const key in obj) {
            let value = obj[key];

            if (value == '') {
                let message = 'Error: not all orientations provided';
                console.log(message);
                return message;
            }
        }

        return orients = {
            userCarrierOrient: Object.values(obj)[0],
            userBattleshipOrient: Object.values(obj)[1],
            userDestroyerOrient: Object.values(obj)[2],
            userSubmarineOrient: Object.values(obj)[3],
            userPatrolBoatOrient: Object.values(obj)[4]
        }
    }

    function getUserOrients() {
        return orients;
    }

    function startGame(name) {
        game = new _Game__WEBPACK_IMPORTED_MODULE_0__.Game(name);

        // Print the boards
        printBoard(game.humanBoard);
        printBoard(game.AiBoard);

        // Populate the boards
        let coords = getUserCoords();
        let orients = getUserOrients();

        game.populateHumanBoard(game.humanBoard, coords, orients);
        // game.populateAiBoard(game.AiBoard);


        // Add event listeners for AI's board's cells
        let query = '.cell-' + game.AiBoard.owner.name;
        const cells = document.querySelectorAll(query);    
        cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                    
                    // Remove 'open' class from this cell
                    if (cell.classList.contains('open')) {
                        cell.classList.remove('open');
                    }
                    // Get user's input
                    let input = [];
                    // save the input that was clicked
                    let coordString = cell.getAttribute('data-coord').slice(5).replace(/-/, '');
                    for (let i = 0; i < coordString.length; i++) {
                        input.push(coordString[i])
                    }
                    currentInput = input;
                    // DEBUG console log
                    console.log('Clicked: ' + input)
                })
            })

        // Commence while loop
        game.playGame();
        
        // Once gameOver is true, end and return winner
        
        return game.winner;
    }

    return {
        game: game,
        coords: coords,
        orients: orients,
        startGame: startGame,
        clearMain: clearMain,
        getUsername: getUsername,
        setUsername: setUsername,
        printBoard: printBoard,
        getInput: getInput,
        getUserShips: getUserShips,
    };

}



/***/ }),

/***/ 403:
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ 62);
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ 325);



function Game(name) {
    // Initialise a new Player for the user
    let humanPlayer = new _Player__WEBPACK_IMPORTED_MODULE_0__.Player(name);

    // Initialise the boards
    let AiBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"](_Player__WEBPACK_IMPORTED_MODULE_0__.AiPlayer);
    let humanBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"](humanPlayer);

    // Initalise gameOver to be false and winner to be null
    let gameOver = false;
    let winner = null;
    
    // Let the humanPlayer go first by default
    let activePlayer = humanPlayer;
    let receivingBoard = AiBoard;

    // Populate each board with ships
    // TODO: make AiBoard populate randomly and humanBoard by user input
    // humanBoard
    function populateHumanBoard(board, coords, orients) {
        board.place('carrier', coords['userCarrier'], orients['userCarrierOrient']);
        board.place('battleship', coords['userBattleship'], orients['userBattleshipOrient']);
        board.place('destroyer', coords['userDestroyer'], orients['userDestroyerOrient']);
        board.place('submarine', coords['userSubmarine'], orients['userSubmarineOrient']);
        board.place('patrol', coords['userPatrolBoat'], orients['userPatrolBoatOrient']);
    }

    // AiBoard
    function populateAiBoard(board) {
        board.place('carrier', [8,0], 'horizontal');
        board.place('battleship', [3,6], 'vertical');
        board.place('destroyer', [6,1], 'horizontal');
        board.place('submarine', [2,2], 'vertical');
        board.place('patrol', [5,8], 'horizontal');
    }

    // Play a round
    function playRound() {
        // Initialise an input variable
        let input;
    
        if (activePlayer == humanPlayer) {
            console.log('Human\'s turn');
            // Get user's coord to attack (from the click event)
            let coords = humanPlayer.randomCoords();
            console.log('Human\'s first coords: ' + coords)
            let usedCoords = humanPlayer.usedCoords;
            let turn = humanPlayer.randomTurn(usedCoords, coords);
            if (turn == undefined) {
                console.log('Turn is undefined') 
            }
          
            input = turn.coords;
            console.log('Human\'s input: ' + input);
            
        } else if (activePlayer == _Player__WEBPACK_IMPORTED_MODULE_0__.AiPlayer) {
            console.log('Computer\'s turn')
            // Get random coords
            let coords = _Player__WEBPACK_IMPORTED_MODULE_0__.AiPlayer.randomCoords();
            console.log('Computer\'s first coords: ' + coords)
            let usedCoords = _Player__WEBPACK_IMPORTED_MODULE_0__.AiPlayer.usedCoords;
            let turn = _Player__WEBPACK_IMPORTED_MODULE_0__.AiPlayer.randomTurn(usedCoords, coords);
       
            input = turn.coords;
            console.log('Computer\'s input: ' + input);
        }
        
        // Attack the receiving board
        let attack = receivingBoard.receiveAttack(input);
        // If a ship was just sunk,
        if (attack.resultType === 'sink') {
            // Check if shipsLeft on receiving board
            let remainingShips = receivingBoard.shipsLeft();
            if (remainingShips === 0) {
                // If the receiving board has no ships left, the active player wins
                winner = activePlayer;
                gameOver = true;
                return gameOver;
            }
        }
        // switch the players and receivingBoard for the next turn
        if (activePlayer == humanPlayer) {
            activePlayer = _Player__WEBPACK_IMPORTED_MODULE_0__.AiPlayer;
            receivingBoard = humanBoard;
        } else if (activePlayer == _Player__WEBPACK_IMPORTED_MODULE_0__.AiPlayer) {
            activePlayer = humanPlayer;
            receivingBoard = AiBoard;
        }
        return gameOver;
    };


    // Play the game
    function playGame() {
        while (!gameOver) {
            // Play rounds of the game
            playRound();
        }

        // Once gameOver is true
        // If winner is null, declare a draw
        if (winner == null) {
            winner = 'Draw'
        };
        // DEBUG CONSOLE LOGS
        console.log('The winner is ' + winner.name)
        return winner

    }
    
    return {
        humanPlayer: humanPlayer,
        AiPlayer: _Player__WEBPACK_IMPORTED_MODULE_0__.AiPlayer,
        gameOver: gameOver,
        winner: winner,
        humanBoard: humanBoard,
        AiBoard: AiBoard,
        activePlayer: activePlayer,
        receivingBoard: receivingBoard,
        populateAiBoard: populateAiBoard,
        populateHumanBoard: populateHumanBoard,
        playGame: playGame,
    }
}











/***/ }),

/***/ 325:
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ 884);


function Gameboard(owner) {
    
    let board = [];
    for (let i = 0; i < 10; i++) {
        board.push([]);
        for (let j = 0; j < 10; j++) {
            board[i].push(j);
        }
    }

    return {
        board: board,
        shipsSunk: 0,
        owner: owner,

        // e.g. Gameboard.placeShip('battleship', [4,3], 'horizontal') places a Ship of length
        // 4 at Gameboard coordinate (4,3)
        place(shipType, coords, orientation) {
     
            let ship;
            let xCoord;
            let yCoord;
            let shipCoords = [];
            
            // Make the ship, or return an error if shipType not defined
            if (shipType == 'carrier' ||
            shipType == 'battleship' ||
            shipType == 'destroyer' ||
            shipType == 'submarine' ||
            shipType == 'patrol') {
                ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](shipType);
            } else {
                return 'Error: ship type is not defined'
            }

            // If coords are not defined, return error
            if (coords != undefined) {
                xCoord = parseInt(coords[1]);
                yCoord = parseInt(coords[0]);
            } else {
                return 'Error: coords are not defined'
            }

            // If coords not between 0-9, return error
            if (xCoord < 0 || xCoord > 9 || yCoord < 0 || yCoord > 9) {
                return 'Error: coords must be from 0-9'
            }

            // TODO: check if ship will fit given length, coords and orientation

            // Get all the subsequent required coords
            // if the ship is placed horizontally, increase the x-axis
            if (orientation == 'horizontal') {
                for (let i = 0; i < ship.length; i++) {
                    let newCoord = [yCoord, xCoord + i];
                    shipCoords.push(newCoord);
                }
            // if the ship is placed vertically, increase the y-axis
            } else if (orientation == 'vertical') {
                for (let i = 0; i < ship.length; i++) {
                    let newCoord = [yCoord + i, xCoord];
                    shipCoords.push(newCoord);
                }
            } else {
                return 'Error: orientation is not defined'
            }

            // Now we have the shipCoords as an array of coords e.g. [[0,2], [0,3]]
            // We can check if the board coords are free
            
            // For each coord in shipcoords
            for (let i = 0; i < shipCoords.length; i++) {
                let currentSquare;
                let currentCoord = shipCoords[i];
                let currentX = currentCoord[1];
                let currentY = currentCoord[0];
                // Go to the square on the board that matches this coord
                currentSquare = board[currentY][currentX];
                // Check if this square contains a ship already
                if (typeof currentSquare == 'object') {
                    return 'Error: square is taken'
                }
            }

            for (let i = 0; i < shipCoords.length; i++) {
                let currentCoord = shipCoords[i];
                let currentX = currentCoord[1];
                let currentY = currentCoord[0];
                // Go to the square on the board that matches this coord
                board[currentY][currentX] = ship;
                let id = owner.name + '-cell-' + currentY + '-' + currentX;
                
                let cell = document.querySelector(`[data-coord="${id}"]`);
                
                cell.classList.remove('open');
                cell.classList.add('cell-ship');
            }

            return board;
        },


        receiveAttack(coords) {
            // Takes a pair of coords and checks if a ship is present
            let result;
            let resultType;
            let xCoord = coords[1];
            let yCoord = coords[0];
            let square = board[yCoord][xCoord];
            if (typeof square == 'string') {
                result = "You've already fired here!";
                resultType = 'bounce';
            } else if (typeof square == 'object') {
                result = 'Direct hit!';
                resultType = 'hit';
                let ship = board[yCoord][xCoord];
                board[yCoord][xCoord] = 'hit';
                ship.hit();
                ship.isSunk();
                if (ship.sunk == true) {
                    result += ' You sunk my ' + ship.type;
                    resultType = 'sink';
                    this.shipsSunk += 1;
                };
            } else if (typeof square == 'number') {
                result = 'Miss!';
                resultType = 'miss';
                board[yCoord][xCoord] = 'miss';
            };
            return {board, result, resultType};
        },

        shipsLeft() {
            return (5 - this.shipsSunk);
        }

    };
};

/***/ }),

/***/ 62:
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AiPlayer": () => (/* binding */ AiPlayer),
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
function Player(name) {

    let usedCoords = {
    };

    function randomCoords() {
        let coords = [];
        coords[0] = Math.floor(Math.random() * 10);
        coords[1] = Math.floor(Math.random() * 10);
        return coords;
    }

  

    function randomTurn(usedCoords, coords) {

        
        let isSubArray = isSubset(coords, usedCoords);
        console.log(isSubArray);
        // base case
        // If the coords do not match any used coords
        if (isSubArray === false) {
    
            let newArray = [coords[0], coords[1]]
            let l = Object.keys(usedCoords).length;
            if (l == undefined || l == 0) {
                usedCoords[0] = newArray;
            } else {
                usedCoords[l] = newArray;
            }

            return {coords, usedCoords}

        } 
        // If the coords do match, try again
        console.log('Coords match, finding new coord...');
        coords = randomCoords();
        console.log('New coords: ' + coords);
        return randomTurn(usedCoords, coords);

        

        
    }

    // Returns true if arr1 is a subset of arr2
    function isSubset(coords,usedCoords) {

        console.log('Checking if coords match...');
        console.log('Coord: ' + coords);

        // Loop through each item in usedCoords
        let l = Object.keys(usedCoords).length;
   
        for (let i = 0; i < l; i++) {
            let currentSubarray = usedCoords[i];
            if (coords[0] === currentSubarray[0] && coords[1] === currentSubarray[1]){
                return true;
            };
        };

        return false
        
        
    };

    return {
        name: name,
        usedCoords: usedCoords,
        randomCoords: randomCoords,
        randomTurn: randomTurn,
    }
}

let AiPlayer = Object.create(Player('Jasper'));




/***/ }),

/***/ 884:
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
// e.g. Carrier = new Ship('carrier')


function Ship(type) {
    let length;
    if (type == 'carrier') {
        length = 5;
    } else if (type == 'battleship') {
        length = 4;
    } else if (type == 'submarine' || type == 'destroyer') {
        length = 3;
    } else if (type == 'patrol') {
        length = 2;
    } 

    return {
        type: type,
        length: length,
        timesHit: 0,
        sunk: false,
        hit() {
            return this.timesHit += 1;
        },
        isSunk() {
            if (this.timesHit === this.length) {
                return this.sunk = true;
            } else {
                return this.sunk = false;
            }
        },

    }
}

/***/ }),

/***/ 995:
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Display */ 705);
/* harmony import */ var _getNameForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNameForm */ 390);
/* harmony import */ var _getCoordsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCoordsForm */ 108);




function gameLoop() {

    // Initialise displayController, the getNameForm and getCoordsForm objects
    const displayController = new _Display__WEBPACK_IMPORTED_MODULE_0__.Display();
    const getName = new _getNameForm__WEBPACK_IMPORTED_MODULE_1__.getNameForm();
    const coordsForm = new _getCoordsForm__WEBPACK_IMPORTED_MODULE_2__.getCoordsForm();
    // Initialise an empty variable to store the user's name
    let username;

    // Start the game by displaying the get name screen
    function init() {
        // Display the get name form
        getName.display();
        setNameFormListener();
    };

    // Helper functions to set form submit button event listeners
    function setNameFormListener() {
        // get submit name btn
        const submitName = document.getElementById('submit-name');
                    
        // Add event listener to submit btn
        submitName.addEventListener('click', function(e) {
            // prevent default form submission
            e.preventDefault();
            // get user's input
            const input = document.getElementById('username');
            if (input.value == '') {
                username = 'User';
            } else {
                username = input.value;
            }
            // clear main
            const main = document.getElementById('main');
            main.innerHTML = '';
            // set the username
            displayController.setUsername(username);
            // display the coords form
            coordsForm.display();
            setCoordFormListener();
        });
    }

    function setCoordFormListener() {
        // get coords submit
        const submitCoords = document.getElementById('submit-coords');
        submitCoords.addEventListener('click', function(e) {
            e.preventDefault();
            displayController.getUserShips();
        });
    }
    
    return {
        init: init,
    }

}








/***/ }),

/***/ 108:
/*!******************************!*\
  !*** ./src/getCoordsForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCoordsForm": () => (/* binding */ getCoordsForm)
/* harmony export */ });
function getCoordsForm() {
    const main = document.getElementById('main');

    function display() {
        // make outer container
        const container = document.createElement('div');
        container.setAttribute('id', 'get-coords-container');
        container.classList.add('form-container');
        main.appendChild(container);

        // make form
        const form = document.createElement('form');
        form.setAttribute('id', 'get-coords-form');
        container.appendChild(form);
        
        // make legend
        const legend = document.createElement('legend');
        legend.innerText = 'Enter your ship coordinates';
        form.appendChild(legend);


        // CARRIER
        // make carrier div class 'form-control'
        const carrierFormControl = document.createElement('div');
        carrierFormControl.classList.add('form-control');
        form.appendChild(carrierFormControl);

        // make Carrier label
        const carrierlabel = document.createElement('label');
        carrierlabel.setAttribute('for', 'carrier');
        carrierlabel.innerText = 'Carrier:';
        carrierFormControl.appendChild(carrierlabel);

        // make Carrier radios
        const carrierRadioContainer = document.createElement('div');
        carrierRadioContainer.classList.add('radio-container');
        carrierFormControl.appendChild(carrierRadioContainer)

        const carrierRadioHor = document.createElement('input');
        carrierRadioHor.setAttribute('type', 'radio');
        carrierRadioHor.setAttribute('id', 'carrier-horizontal');
        carrierRadioHor.setAttribute('name', 'carrier-orientation');
        carrierRadioHor.setAttribute('value', 'horizontal');

        const carrierRadioHorLabel = document.createElement('label');
        carrierRadioHorLabel.setAttribute('for', 'horizontal');
        carrierRadioHorLabel.innerText = 'Horizontal';

        carrierRadioContainer.appendChild(carrierRadioHor);
        carrierRadioContainer.appendChild(carrierRadioHorLabel);

        const carrierRadioVer = document.createElement('input');
        carrierRadioVer.setAttribute('type', 'radio');
        carrierRadioVer.setAttribute('id', 'carrier-vertical');
        carrierRadioVer.setAttribute('name', 'carrier-orientation');
        carrierRadioVer.setAttribute('value', 'vertical');

        const carrierRadioVerLabel = document.createElement('label');
        carrierRadioVerLabel.setAttribute('for', 'vertical');
        carrierRadioVerLabel.innerText = 'Vertical';
        
        carrierRadioContainer.appendChild(carrierRadioVer);
        carrierRadioContainer.appendChild(carrierRadioVerLabel);

        // make Carrier input type text
        const carrierinput = document.createElement('input');
        carrierinput.setAttribute('type', 'text');
        carrierinput.setAttribute('name', 'carrier');
        carrierinput.setAttribute('id', 'carrier');
        carrierinput.setAttribute('placeholder', '0, 0');
        carrierFormControl.appendChild(carrierinput);

        // make carrier error span
        let errorFormControl = document.createElement('div');
        errorFormControl.classList.add('form-control');
        form.appendChild(errorFormControl);

        const carrierError = document.createElement('span');
        carrierError.classList.add('error');
        carrierError.setAttribute('id', 'carrier-error');
        carrierError.setAttribute('aria-live', 'polite');
        errorFormControl.appendChild(carrierError);

        // validate carrier input
        carrierinput.addEventListener('input', function() {
            // initialise vars
            let string = carrierinput.value;
            let rowRegex = /[0-5]\W\d/gm;
            let colRegex = /\d\W[0-5]/gm;
            let match;

            if (string.length === 3) {
                if (carrierRadioHor.checked) {
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('carrier');
                    } else {
                        carrierError.textContent = '';
                        carrierError.className = 'error';
                    }
                    
                } else if (carrierRadioVer.checked) {
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('carrier');
                    } else {
                        carrierError.textContent = '';
                        carrierError.className = 'error';
                    }
                }
            } else if (string.length < 3) {
                carrierError.textContent = '';
                carrierError.className = 'error';
            } else {
                showError('carrier');
                carrierError.textContent = 'Please enter coordinates e.g. 0,0';
            }
        });

        // radio checks
        carrierRadioHor.addEventListener('click', function() {
            let string = carrierinput.value;
            let match;
            let colRegex = /\d\W[0-5]/gm;
            if (string.length >= 3) {
                match = validate(string, colRegex);
                    if (match === false) {
                        showError('carrier');
                    } else {
                        carrierError.textContent = '';
                        carrierError.className = 'error';
                    }
            }
        });

        carrierRadioVer.addEventListener('click', function() {
            let string = carrierinput.value;
            let match;
            let rowRegex = /[0-5]\W\d/gm;
            if (string.length >= 3) {
                match = validate(string, rowRegex);
                    if (match === false) {
                        showError('carrier');
                    } else {
                        carrierError.textContent = '';
                        carrierError.className = 'error';
                    }
            }
        });


        // BATTLESHIP
        // make battleship div class 'form-control'
        const battleshipFormControl = document.createElement('div');
        battleshipFormControl.classList.add('form-control');
        form.appendChild(battleshipFormControl);

        // make battleship label
        const battleshiplabel = document.createElement('label');
        battleshiplabel.setAttribute('for', 'battleship');
        battleshiplabel.innerText = 'Battleship:';
        battleshipFormControl.appendChild(battleshiplabel);

        // make battleship radios
        const battleshipRadioContainer = document.createElement('div');
        battleshipRadioContainer.classList.add('radio-container');
        battleshipFormControl.appendChild(battleshipRadioContainer)

        const battleshipRadioHor = document.createElement('input');
        battleshipRadioHor.setAttribute('type', 'radio');
        battleshipRadioHor.setAttribute('id', 'battleship-horizontal');
        battleshipRadioHor.setAttribute('name', 'battleship-orientation');
        battleshipRadioHor.setAttribute('value', 'horizontal');

        const battleshipRadioHorLabel = document.createElement('label');
        battleshipRadioHorLabel.setAttribute('for', 'horizontal');
        battleshipRadioHorLabel.innerText = 'Horizontal';

        battleshipRadioContainer.appendChild(battleshipRadioHor);
        battleshipRadioContainer.appendChild(battleshipRadioHorLabel);

        const battleshipRadioVer = document.createElement('input');
        battleshipRadioVer.setAttribute('type', 'radio');
        battleshipRadioVer.setAttribute('id', 'battleship-vertical');
        battleshipRadioVer.setAttribute('name', 'battleship-orientation');
        battleshipRadioVer.setAttribute('value', 'vertical');

        const battleshipRadioVerLabel = document.createElement('label');
        battleshipRadioVerLabel.setAttribute('for', 'vertical');
        battleshipRadioVerLabel.innerText = 'Vertical';
        
        battleshipRadioContainer.appendChild(battleshipRadioVer);
        battleshipRadioContainer.appendChild(battleshipRadioVerLabel);

        // make battleship input type text
        const battleshipinput = document.createElement('input');
        battleshipinput.setAttribute('type', 'text');
        battleshipinput.setAttribute('name', 'battleship');
        battleshipinput.setAttribute('id', 'battleship');
        battleshipinput.setAttribute('placeholder', '0, 0');
        battleshipFormControl.appendChild(battleshipinput);

        // make battleship error span
        let errorFormControl2 = document.createElement('div');
        errorFormControl2.classList.add('form-control');
        form.appendChild(errorFormControl2);

        const battleshipError = document.createElement('span');
        battleshipError.classList.add('error');
        battleshipError.setAttribute('id', 'battleship-error');
        battleshipError.setAttribute('aria-live', 'polite');
        errorFormControl2.appendChild(battleshipError);

        // validate battleship input
                
        battleshipinput.addEventListener('input', function() {
            // initialise vars
            let string = battleshipinput.value;
            let rowRegex = /[0-6]\W\d/g;
            let colRegex = /\d\W[0-6]/g;
            let match;

            if (string.length === 3) {
                if (battleshipRadioHor.checked) {
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('battleship');
                    } else {
                        battleshipError.textContent = '';
                        battleshipError.className = 'error';
                    }
                    
                } else if (battleshipRadioVer.checked) {
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('battleship');
                    } else {
                        battleshipError.textContent = '';
                        battleshipError.className = 'error';
                    }
                }
            } else if (string.length < 3) {
                battleshipError.textContent = '';
                battleshipError.className = 'error';
            } else {
                showError('battleship');
                battleshipError.textContent = 'Please enter coordinates e.g. 0,0';
            }
        });

        // radio checks
        battleshipRadioHor.addEventListener('click', function() {
            let string = battleshipinput.value;
            let match;
            let colRegex = /\d\W[0-6]/g;
            if (string.length >= 3) {
                match = validate(string, colRegex);
                    if (match === false) {
                        showError('battleship');
                    } else {
                        battleshipError.textContent = '';
                        battleshipError.className = 'error';
                    }
            }
        });

        battleshipRadioVer.addEventListener('click', function() {
            let string = battleshipinput.value;
            let match;
            let rowRegex = /[0-6]\W\d/g;
            if (string.length >= 3) {
                match = validate(string, rowRegex);
                    if (match === false) {
                        showError('battleship');
                    } else {
                        battleshipError.textContent = '';
                        battleshipError.className = 'error';
                    }
            }
        });



        // DESTROYER
        // make destroyer div class 'form-control'
        const destroyerFormControl = document.createElement('div');
        destroyerFormControl.classList.add('form-control');
        form.appendChild(destroyerFormControl);

        // make destroyer label
        const destroyerlabel = document.createElement('label');
        destroyerlabel.setAttribute('for', 'destroyer');
        destroyerlabel.innerText = 'Destroyer:';
        destroyerFormControl.appendChild(destroyerlabel);

        // make destroyer radios
        const destroyerRadioContainer = document.createElement('div');
        destroyerRadioContainer.classList.add('radio-container');
        destroyerFormControl.appendChild(destroyerRadioContainer)

        const destroyerRadioHor = document.createElement('input');
        destroyerRadioHor.setAttribute('type', 'radio');
        destroyerRadioHor.setAttribute('id', 'destroyer-horizontal');
        destroyerRadioHor.setAttribute('name', 'destroyer-orientation');
        destroyerRadioHor.setAttribute('value', 'horizontal');

        const destroyerRadioHorLabel = document.createElement('label');
        destroyerRadioHorLabel.setAttribute('for', 'horizontal');
        destroyerRadioHorLabel.innerText = 'Horizontal';

        destroyerRadioContainer.appendChild(destroyerRadioHor);
        destroyerRadioContainer.appendChild(destroyerRadioHorLabel);

        const destroyerRadioVer = document.createElement('input');
        destroyerRadioVer.setAttribute('type', 'radio');
        destroyerRadioVer.setAttribute('id', 'destroyer-vertical');
        destroyerRadioVer.setAttribute('name', 'destroyer-orientation');
        destroyerRadioVer.setAttribute('value', 'vertical');

        const destroyerRadioVerLabel = document.createElement('label');
        destroyerRadioVerLabel.setAttribute('for', 'vertical');
        destroyerRadioVerLabel.innerText = 'Vertical';
        
        destroyerRadioContainer.appendChild(destroyerRadioVer);
        destroyerRadioContainer.appendChild(destroyerRadioVerLabel);

        // make destroyer input type text
        const destroyerinput = document.createElement('input');
        destroyerinput.setAttribute('type', 'text');
        destroyerinput.setAttribute('name', 'destroyer');
        destroyerinput.setAttribute('id', 'destroyer');
        destroyerinput.setAttribute('placeholder', '0, 0');
        destroyerFormControl.appendChild(destroyerinput);

        // make destroyer error span
        let errorFormControl3 = document.createElement('div');
        errorFormControl3.classList.add('form-control');
        form.appendChild(errorFormControl3);

        const destroyerError = document.createElement('span');
        destroyerError.classList.add('error');
        destroyerError.setAttribute('id', 'destroyer-error');
        destroyerError.setAttribute('aria-live', 'polite');
        errorFormControl3.appendChild(destroyerError);

        // validate destroyer input
        destroyerinput.addEventListener('input', function() {
            // initialise vars
            let string = destroyerinput.value;
            let rowRegex = /[0-7]\W\d/g;
            let colRegex = /\d\W[0-7]/g;
            let match;

            if (string.length === 3) {
                if (destroyerRadioHor.checked) {
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        destroyerError.textContent = '';
                        destroyerError.className = 'error';
                    }
                    
                } else if (destroyerRadioVer.checked) {
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        destroyerError.textContent = '';
                        destroyerError.className = 'error';
                    }
                }
            } else if (string.length < 3) {
                destroyerError.textContent = '';
                destroyerError.className = 'error';
            } else {
                showError('destroyer');
                destroyerError.textContent = 'Please enter coordinates e.g. 0,0';
            }
        });

        // radio checks
        destroyerRadioHor.addEventListener('click', function() {
            let string = destroyerinput.value;
            let match;
            let colRegex = /\d\W[0-7]/g;
            if (string.length >= 3) {
                match = validate(string, colRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        destroyerError.textContent = '';
                        destroyerError.className = 'error';
                    }
            }
        });

        destroyerRadioVer.addEventListener('click', function() {
            let string = destroyerinput.value;
            let match;
            let rowRegex = /[0-7]\W\d/g;
            if (string.length >= 3) {
                match = validate(string, rowRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        destroyerError.textContent = '';
                        destroyerError.className = 'error';
                    }
            }
        });

        // SUBMARINE
        // make submarine div class 'form-control'
        const submarineFormControl = document.createElement('div');
        submarineFormControl.classList.add('form-control');
        form.appendChild(submarineFormControl);

        // make submarine label
        const submarinelabel = document.createElement('label');
        submarinelabel.setAttribute('for', 'submarine');
        submarinelabel.innerText = 'Submarine:';
        submarineFormControl.appendChild(submarinelabel);

        // make submarine radios
        const submarineRadioContainer = document.createElement('div');
        submarineRadioContainer.classList.add('radio-container');
        submarineFormControl.appendChild(submarineRadioContainer)

        const submarineRadioHor = document.createElement('input');
        submarineRadioHor.setAttribute('type', 'radio');
        submarineRadioHor.setAttribute('id', 'submarine-horizontal');
        submarineRadioHor.setAttribute('name', 'submarine-orientation');
        submarineRadioHor.setAttribute('value', 'horizontal');

        const submarineRadioHorLabel = document.createElement('label');
        submarineRadioHorLabel.setAttribute('for', 'horizontal');
        submarineRadioHorLabel.innerText = 'Horizontal';

        submarineRadioContainer.appendChild(submarineRadioHor);
        submarineRadioContainer.appendChild(submarineRadioHorLabel);

        const submarineRadioVer = document.createElement('input');
        submarineRadioVer.setAttribute('type', 'radio');
        submarineRadioVer.setAttribute('id', 'submarine-vertical');
        submarineRadioVer.setAttribute('name', 'submarine-orientation');
        submarineRadioVer.setAttribute('value', 'vertical');

        const submarineRadioVerLabel = document.createElement('label');
        submarineRadioVerLabel.setAttribute('for', 'vertical');
        submarineRadioVerLabel.innerText = 'Vertical';
        
        submarineRadioContainer.appendChild(submarineRadioVer);
        submarineRadioContainer.appendChild(submarineRadioVerLabel);

        // make submarine input type text
        const submarineinput = document.createElement('input');
        submarineinput.setAttribute('type', 'text');
        submarineinput.setAttribute('name', 'submarine');
        submarineinput.setAttribute('id', 'submarine');
        submarineinput.setAttribute('placeholder', '0, 0');
        submarineFormControl.appendChild(submarineinput);

        // make submarine error span
        let errorFormControl4 = document.createElement('div');
        errorFormControl4.classList.add('form-control');
        form.appendChild(errorFormControl4);

        const submarineError = document.createElement('span');
        submarineError.classList.add('error');
        submarineError.setAttribute('id', 'submarine-error');
        submarineError.setAttribute('aria-live', 'polite');
        errorFormControl4.appendChild(submarineError);

        // validate submarine input
        submarineinput.addEventListener('input', function() {
            // initialise vars
            let string = submarineinput.value;
            let rowRegex = /[0-7]\W\d/g;
            let colRegex = /\d\W[0-7]/g;
            let match;

            if (string.length === 3) {
                if (submarineRadioHor.checked) {
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('submarine');
                    } else {
                        submarineError.textContent = '';
                        submarineError.className = 'error';
                    }
                    
                } else if (submarineRadioVer.checked) {
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('submarine');
                    } else {
                        submarineError.textContent = '';
                        submarineError.className = 'error';
                    }
                }
            } else if (string.length < 3) {
                submarineError.textContent = '';
                submarineError.className = 'error';
            } else {
                showError('submarine');
                submarineError.textContent = 'Please enter coordinates e.g. 0,0';
            }
        });

        // radio checks
        submarineRadioHor.addEventListener('click', function() {
            let string = submarineinput.value;
            let match;
            let colRegex = /\d\W[0-7]/g;
            if (string.length >= 3) {
                match = validate(string, colRegex);
                    if (match === false) {
                        showError('submarine');
                    } else {
                        submarineError.textContent = '';
                        submarineError.className = 'error';
                    }
            }
        });

        submarineRadioVer.addEventListener('click', function() {
            let string = submarineinput.value;
            let match;
            let rowRegex = /[0-7]\W\d/g;
            if (string.length >= 3) {
                match = validate(string, rowRegex);
                    if (match === false) {
                        showError('submarine');
                    } else {
                        submarineError.textContent = '';
                        submarineError.className = 'error';
                    }
            }
        });


        // PATROL BOAT
        // make patrol div class 'form-control'
        const patrolFormControl = document.createElement('div');
        patrolFormControl.classList.add('form-control');
        form.appendChild(patrolFormControl);

        // make patrol label
        const patrollabel = document.createElement('label');
        patrollabel.setAttribute('for', 'patrol');
        patrollabel.innerText = 'Patrol boat:';
        patrolFormControl.appendChild(patrollabel);

        // make patrol radios
        const patrolRadioContainer = document.createElement('div');
        patrolRadioContainer.classList.add('radio-container');
        patrolFormControl.appendChild(patrolRadioContainer)

        const patrolRadioHor = document.createElement('input');
        patrolRadioHor.setAttribute('type', 'radio');
        patrolRadioHor.setAttribute('id', 'patrol-horizontal');
        patrolRadioHor.setAttribute('name', 'patrol-orientation');
        patrolRadioHor.setAttribute('value', 'horizontal');

        const patrolRadioHorLabel = document.createElement('label');
        patrolRadioHorLabel.setAttribute('for', 'horizontal');
        patrolRadioHorLabel.innerText = 'Horizontal';

        patrolRadioContainer.appendChild(patrolRadioHor);
        patrolRadioContainer.appendChild(patrolRadioHorLabel);

        const patrolRadioVer = document.createElement('input');
        patrolRadioVer.setAttribute('type', 'radio');
        patrolRadioVer.setAttribute('id', 'patrol-vertical');
        patrolRadioVer.setAttribute('name', 'patrol-orientation');
        patrolRadioVer.setAttribute('value', 'vertical');

        const patrolRadioVerLabel = document.createElement('label');
        patrolRadioVerLabel.setAttribute('for', 'vertical');
        patrolRadioVerLabel.innerText = 'Vertical';
        
        patrolRadioContainer.appendChild(patrolRadioVer);
        patrolRadioContainer.appendChild(patrolRadioVerLabel);


        // make patrol input type text
        const patrolinput = document.createElement('input');
        patrolinput.setAttribute('type', 'text');
        patrolinput.setAttribute('name', 'patrol');
        patrolinput.setAttribute('id', 'patrol');
        patrolinput.setAttribute('placeholder', '0, 0');
        patrolFormControl.appendChild(patrolinput);

        // make patrol error span
        let errorFormControl5 = document.createElement('div');
        errorFormControl5.classList.add('form-control');
        form.appendChild(errorFormControl5);

        const patrolError = document.createElement('span');
        patrolError.classList.add('error');
        patrolError.setAttribute('id', 'patrol-error');
        patrolError.setAttribute('aria-live', 'polite');
        errorFormControl5.appendChild(patrolError);

         // validate patrol input
         patrolinput.addEventListener('input', function() {
            // initialise vars
            let string = patrolinput.value;
            let rowRegex = /[0-8]\W\d/g;
            let colRegex = /\d\W[0-8]/g;
            let match;

            if (string.length === 3) {
                if (patrolRadioHor.checked) {
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('patrol');
                    } else {
                        patrolError.textContent = '';
                        patrolError.className = 'error';
                    }
                    
                } else if (patrolRadioVer.checked) {
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('patrol');
                    } else {
                        patrolError.textContent = '';
                        patrolError.className = 'error';
                    }
                }
            } else if (string.length < 3) {
                patrolError.textContent = '';
                patrolError.className = 'error';
            } else {
                showError('patrol');
                patrolError.textContent = 'Please enter coordinates e.g. 0,0';
            }
        });

        // radio checks
        patrolRadioHor.addEventListener('click', function() {
            let string = patrolinput.value;
            let match;
            let colRegex = /\d\W[0-8]/g;
            if (string.length >= 3) {
                match = validate(string, colRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        patrolError.textContent = '';
                        patrolError.className = 'error';
                    }
            }
        });

        patrolRadioVer.addEventListener('click', function() {
            let string = patrolinput.value;
            let match;
            let rowRegex = /[0-8]\W\d/g;
            if (string.length >= 3) {
                match = validate(string, rowRegex);
                    if (match === false) {
                        showError('patrol');
                    } else {
                        patrolError.textContent = '';
                        patrolError.className = 'error';
                    }
            }
        });
        
        //SUBMIT
        // make submit div class 'form-control'
        const submitFormControl = document.createElement('div');
        submitFormControl.classList.add('form-control');
        form.appendChild(submitFormControl);

        // make submit btn
        const submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'submit-coords');
        submit.setAttribute('value', 'Play');
        submitFormControl.appendChild(submit);
    }

    // Takes a boat type and shows its form validation error
    function showError(type) {
        const carrierError = document.getElementById('carrier-error');
        const battleshipError = document.getElementById('battleship-error');
        const destroyerError = document.getElementById('destroyer-error');
        const submarineError = document.getElementById('submarine-error');
        const patrolError = document.getElementById('patrol-error');
        if (type === 'carrier') {
            carrierError.textContent = "It won't fit there";
            carrierError.className = 'error active';
        } else if (type === 'battleship') {
            battleshipError.textContent = "It won't fit there";
            battleshipError.className = 'error active';
        } else if (type === 'destroyer') {
            destroyerError.textContent = "It won't fit there";
            destroyerError.className = 'error active';
        } else if (type === 'submarine') {
            submarineError.textContent = "It won't fit there";
            submarineError.className = 'error active';
        } else if (type === 'patrol') {
            patrolError.textContent = "It won't fit there";
            patrolError.className = 'error active';
        }
        return
    }

    // Validates form inputs with regular expression
    function validate(string, regex) {
        return regex.test(string);
    }

    return {
        display: display,
    }
}



/***/ }),

/***/ 390:
/*!****************************!*\
  !*** ./src/getNameForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNameForm": () => (/* binding */ getNameForm)
/* harmony export */ });
function getNameForm() {
    // Get HTML elements
    const main = document.getElementById('main');


    // Build the username form and append it to the Main div
    function display() {
        // make outer container
        const container = document.createElement('div');
        container.setAttribute('id', 'get-username-container');
        container.classList.add('form-container');
        main.appendChild(container);

        // make form
        const form = document.createElement('form');
        form.setAttribute('id', 'get-username-form');
        container.appendChild(form);

        // make legend
        const legend = document.createElement('legend');
        legend.innerText = 'Enter your name to begin';
        form.appendChild(legend);

        // make div class 'form-control'
        const formControl = document.createElement('div');
        formControl.classList.add('form-control');
        form.appendChild(formControl);

        // make label
        const label = document.createElement('label');
        label.setAttribute('for', 'username');
        label.innerText = 'Your name:';
        formControl.appendChild(label);

        // make input type text
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'username');
        input.setAttribute('id', 'username');
        input.setAttribute('placeholder', 'Name');
        formControl.appendChild(input);

        // make submit btn
        const submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'submit-name');
        submit.setAttribute('value', 'Next');
        formControl.appendChild(submit);
    }
    
    return {
        display: display,
    }
}



/***/ }),

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ 654);
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoop */ 995);
// eslint-disable-next-line no-unused-vars



let game = new _gameLoop__WEBPACK_IMPORTED_MODULE_1__.gameLoop();
game.init();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);
//# sourceMappingURL=bundle-ac9796fe43b8ce6b1dcc.js.map