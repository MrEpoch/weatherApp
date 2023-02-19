/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
          );
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./images/sunsetDark.jpg */ "./src/images/sunsetDark.jpg"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "@import url(https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap);",
        ]);
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '*,\n*:after,\n*:before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-colors: #fef4e8;\n  --good-white: #e6e6e6;\n  --main-font: "Mukta", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: var(--main-font);\n  color: var(--good-white);\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  background-image: url(' +
            ___CSS_LOADER_URL_REPLACEMENT_0___ +
            ");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n\n.top {\n  grid-row: 1 / 2;\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n}\n\n.middle-container {\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  width: 50%;\n  justify-self: center;\n}\n\n.search-container {\n  width: 50%;\n  display: grid;\n  grid-template: 1fr / repeat(2, 1fr);\n  border-bottom: 3px solid var(--primary-colors);\n}\n\n.search-svg {\n  filter: invert(86%) sepia(5%) saturate(530%) hue-rotate(343deg)\n    brightness(107%) contrast(108%);\n  grid-area: 1 / 2 / 2 /3;\n  width: 20px;\n  height: 20px;\n  justify-self: self-end;\n  transition: 0.3s;\n}\n\n.search-svg:hover {\n  filter: invert(78%) sepia(84%) saturate(65%) hue-rotate(302deg)\n    brightness(109%) contrast(99%);\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  transition: 0.3s;\n}\n\ninput {\n  border: none;\n  background-color: transparent;\n}\n\n.search {\n  color: var(--good-white);\n  grid-area: 1 / 1 / 2 / 2;\n  width: 150px;\n  height: 20px;\n  justify-self: self-end;\n  font-size: 16px;\n}\n\n.search:focus {\n  outline: none;\n}\n\n.search::placeholder {\n  font-size: 16px;\n  color: var(--primary-colors);\n  justify-self: self-end;\n}\n\n.bottom {\n  grid-row: 2 / 3;\n}\n\n.left-info {\n  height: 65%;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n}\n\n.right-info {\n  display: flex;\n  height: 50%;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n}\n\n.right-info * {\n  border-bottom: 2px solid var(--primary-colors);\n}\n\n.left-info * {\n  border-bottom: 2px solid var(--primary-colors);\n}\n\n.show-time {\n  word-spacing: 3px;\n  border-bottom: 2px solid var(--primary-colors);\n  justify-self: center;\n  text-align: center;\n}\n\n.place-main {\n  font-size: 2.5rem;\n  letter-spacing: 2px;\n}\n\n.h2Degrees {\n  letter-spacing: 2px;\n  border-bottom: 2px solid var(--primary-colors);\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAIA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,2BAA2B;EAC3B,yDAAgD;EAChD,2BAA2B;EAC3B,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,mBAAmB;EACnB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mCAAmC;EACnC,8CAA8C;AAChD;;AAEA;EACE;mCACiC;EACjC,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE;kCACgC;EAChC,eAAe;EACf,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,wBAAwB;EACxB,wBAAwB;EACxB,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,iBAAiB;EACjB,8CAA8C;EAC9C,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,8CAA8C;AAChD",
            sourcesContent: [
              '*,\n*:after,\n*:before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap");\n\n:root {\n  --primary-colors: #fef4e8;\n  --good-white: #e6e6e6;\n  --main-font: "Mukta", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: var(--main-font);\n  color: var(--good-white);\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  background-image: url("./images/sunsetDark.jpg");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n\n.top {\n  grid-row: 1 / 2;\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n}\n\n.middle-container {\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  width: 50%;\n  justify-self: center;\n}\n\n.search-container {\n  width: 50%;\n  display: grid;\n  grid-template: 1fr / repeat(2, 1fr);\n  border-bottom: 3px solid var(--primary-colors);\n}\n\n.search-svg {\n  filter: invert(86%) sepia(5%) saturate(530%) hue-rotate(343deg)\n    brightness(107%) contrast(108%);\n  grid-area: 1 / 2 / 2 /3;\n  width: 20px;\n  height: 20px;\n  justify-self: self-end;\n  transition: 0.3s;\n}\n\n.search-svg:hover {\n  filter: invert(78%) sepia(84%) saturate(65%) hue-rotate(302deg)\n    brightness(109%) contrast(99%);\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  transition: 0.3s;\n}\n\ninput {\n  border: none;\n  background-color: transparent;\n}\n\n.search {\n  color: var(--good-white);\n  grid-area: 1 / 1 / 2 / 2;\n  width: 150px;\n  height: 20px;\n  justify-self: self-end;\n  font-size: 16px;\n}\n\n.search:focus {\n  outline: none;\n}\n\n.search::placeholder {\n  font-size: 16px;\n  color: var(--primary-colors);\n  justify-self: self-end;\n}\n\n.bottom {\n  grid-row: 2 / 3;\n}\n\n.left-info {\n  height: 65%;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n}\n\n.right-info {\n  display: flex;\n  height: 50%;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n}\n\n.right-info * {\n  border-bottom: 2px solid var(--primary-colors);\n}\n\n.left-info * {\n  border-bottom: 2px solid var(--primary-colors);\n}\n\n.show-time {\n  word-spacing: 3px;\n  border-bottom: 2px solid var(--primary-colors);\n  justify-self: center;\n  text-align: center;\n}\n\n.place-main {\n  font-size: 2.5rem;\n  letter-spacing: 2px;\n}\n\n.h2Degrees {\n  letter-spacing: 2px;\n  border-bottom: 2px solid var(--primary-colors);\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = [];

          // return the list of modules as css string
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
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
          };

          // import a list of modules into the list
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        module.exports = function (url, options) {
          if (!options) {
            options = {};
          }
          if (!url) {
            return url;
          }
          url = String(url.__esModule ? url.default : url);

          // If url is already wrapped in quotes, remove them
          if (/^['"].*['"]$/.test(url)) {
            url = url.slice(1, -1);
          }
          if (options.hash) {
            url += options.hash;
          }

          // Should url be wrapped?
          // See https://drafts.csswg.org/css-values-3/#urls
          if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"'
            );
          }
          return url;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }

              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }

        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
            },
          };
        }

        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/components/methods.js":
      /*!***********************************!*\
  !*** ./src/components/methods.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ImgCreate: () => /* binding */ ImgCreate,
          /* harmony export */ divCreate: () => /* binding */ divCreate,
          /* harmony export */ fieldsetCreate: () =>
            /* binding */ fieldsetCreate,
          /* harmony export */ h1Create: () => /* binding */ h1Create,
          /* harmony export */ h2Create: () => /* binding */ h2Create,
          /* harmony export */ h3Create: () => /* binding */ h3Create,
          /* harmony export */ h4Create: () => /* binding */ h4Create,
          /* harmony export */ h5Create: () => /* binding */ h5Create,
          /* harmony export */ inputCreate: () => /* binding */ inputCreate,
          /* harmony export */ methodCreate: () => /* binding */ methodCreate,
          /* harmony export */ navCreate: () => /* binding */ navCreate,
          /* harmony export */ pCreate: () => /* binding */ pCreate,
          /* harmony export */
        });
        // Made by MrEpoch

        // This file was made to be exported for use in other files, it holds methods for creating html elements in easier way

        // divCreate function expression takes like first what is inside and then class and returns div at end

        const methodCreate = (htmlName, inside, classAdd, idAdd, innerHtml) => {
          const element = document.createElement(htmlName);
          element.append(inside);
          element.classList.add(classAdd);
          if (idAdd) {
            element.id = idAdd;
          }
          if (innerHtml) {
            element.innerHTML = innerHtml;
          }
          return element;
        };

        const divCreate = (InsideDiv, classAdd, idAdd, innerHtml) => {
          const div = document.createElement("div");
          div.append(InsideDiv);
          div.classList.add(classAdd);
          if (idAdd) {
            div.id = idAdd;
          }
          if (innerHtml) {
            div.innerHTML = innerHtml;
          }
          return div;
        };

        const navCreate = (InsideNav, classAdd, idAdd) => {
          const nav = document.createElement("nav");
          nav.append(InsideNav);
          nav.classList.add(classAdd);
          if (idAdd) {
            nav.id = idAdd;
          }
          return nav;
        };

        // ImgCreate is returns takes Imported img and returns it ready for use to append to the div or other use

        const ImgCreate = (image) => {
          const img = new Image();
          img.src = image;
          return img;
        };

        // h2Create creates h2 element which takes textContent and class and returns h2

        const h1Create = (TextInside, classAdd, idAdd) => {
          const h1 = document.createElement("h1");
          h1.textContent = TextInside;
          h1.classList.add(classAdd);
          if (idAdd) {
            h1.id = idAdd;
          }
          return h1;
        };

        const h2Create = (TextInside, classAdd, idAdd) => {
          const h2 = document.createElement("h2");
          h2.textContent = TextInside;
          h2.classList.add(classAdd);
          if (idAdd) {
            h2.id = idAdd;
          }
          return h2;
        };

        const h3Create = (TextInside, classAdd, idAdd) => {
          const h3 = document.createElement("h3");
          h3.textContent = TextInside;
          h3.classList.add(classAdd);
          if (idAdd) {
            h3.id = idAdd;
          }
          return h3;
        };

        // h4Create creates h4 element which takes textContent and class and returns h4

        const h4Create = (TextInside, classAdd, idAdd) => {
          const h4 = document.createElement("h4");
          h4.textContent = TextInside;
          h4.classList.add(classAdd);
          if (idAdd) {
            h4.id = idAdd;
          }
          return h4;
        };

        const h5Create = (TextInside, classAdd, idAdd) => {
          const h5 = document.createElement("h5");
          h5.textContent = TextInside;
          h5.classList.add(classAdd);
          if (idAdd) {
            h5.id = idAdd;
          }
          return h5;
        };

        // pCreate creates paragrahp with first parameter text and second class and returns paragraph

        const pCreate = (TextInside, classAdd, idAdd) => {
          const p = document.createElement("p");
          p.textContent = TextInside;
          p.classList.add(classAdd);
          if (idAdd) {
            p.id = idAdd;
          }
          return p;
        };

        const inputCreate = (placeHolder, classAdd, type) => {
          const input = document.createElement("input");
          input.placeholder = placeHolder;
          input.classList.add(classAdd);
          input.type = type;

          return input;
        };

        const fieldsetCreate = (InsideField, classAdd, idAdd) => {
          const field = document.createElement("fieldset");
          field.append(InsideField);
          field.classList.add(classAdd);
          if (idAdd) {
            field.id = idAdd;
          }
          return field;
        };

        // exporting all function expressions

        /***/
      },

    /***/ "./src/images/sunsetDark.jpg":
      /*!***********************************!*\
  !*** ./src/images/sunsetDark.jpg ***!
  \***********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "20121ca07c6f5ee6dc79.jpg";

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!********************!*\
  !*** ./src/app.js ***!
  \********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./style.css */ "./src/style.css");
    /* harmony import */ var _components_methods__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(
        /*! ./components/methods */ "./src/components/methods.js"
      );

    function convertTemp(value, unitToBe, unitIs) {
      let returnedVal =
        "You didn't input to what you want value convert or what it was";
      if (unitToBe !== undefined && unitIs !== undefined) {
        if (unitToBe === "kel") {
          returnedVal = ((value + 459.67) * 5) / 9;
          if (unitIs === "cel") {
            returnedVal = value + 273.15;
          }
        } else if (unitToBe === "cel") {
          returnedVal = (value - 32) / 1.8;
          if (unitIs === "kel") {
            returnedVal = value - 273.15;
          }
        } else if (unitToBe === "fa") {
          returnedVal = (value + 32) * 1.8;
          if (unitIs === "kel") {
            returnedVal = (value * 9) / 5 - 459.67;
          }
        }
      }
      return returnedVal;
    }

    function timeGet() {
      const date = new Date().toString().split(" ");
      const dayNamed = date[0];
      const monthNamed = date[1];
      const dayNum = date[2];
      const year = date[3];
      const time = date[4];

      return { dayNum, dayNamed, monthNamed, year, time };
    }

    async function weatherLoad(location) {
      const fetchWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3e2ec8741165eedcbeb5503d51b9acfc
    `,
        { mode: "cors" }
      );
      const weather = await fetchWeather.json();
      if (weather.main !== undefined) {
        const tempCel = convertTemp(weather.main.temp, "cel", "kel");
        const feelTempCel = convertTemp(weather.main.feels_like, "cel", "kel");
        const weatherLike = weather.weather[0].main;
        const humidity = weather.main.humidity + "%";
        const country = weather.sys.country;
        const wind = weather.wind.speed;
        return {
          weather,
          tempCel,
          feelTempCel,
          weatherLike,
          humidity,
          country,
          wind,
        };
      }
    }

    async function locationChange(NewLocation) {
      const newRequest = await weatherLoad(NewLocation);
      return newRequest;
    }

    let location = "London";
    let Myweather = locationChange("London").catch((err) => {
      console.error(err);
    });

    const svgThings = {
      search: `<svg class="search-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title>
    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,
    15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
    </svg>`,
    };

    const extraInfo = (weather) => {
      const rightContainer =
        _components_methods__WEBPACK_IMPORTED_MODULE_1__.divCreate(
          "",
          "right-info"
        );
      const humidity =
        _components_methods__WEBPACK_IMPORTED_MODULE_1__.h3Create(
          "",
          "humidity-extra"
        );
      const country = _components_methods__WEBPACK_IMPORTED_MODULE_1__.h3Create(
        "",
        "country-extra"
      );
      const windSpeed =
        _components_methods__WEBPACK_IMPORTED_MODULE_1__.h3Create(
          "",
          "wind-extra"
        );
      Promise.all([weather]).then((value) => {
        humidity.textContent = `Humidity: ${value[0].humidity}`;
        country.textContent = `Country: ${value[0].country}`;
        windSpeed.textContent = `Wind speed: ${value[0].wind}`;
        rightContainer.append(humidity, country, windSpeed);
      });
      return rightContainer;
    };

    const middleSearch = () => {
      const middleContainer =
        _components_methods__WEBPACK_IMPORTED_MODULE_1__.divCreate(
          "",
          "middle-container"
        );
      const searchContainer =
        _components_methods__WEBPACK_IMPORTED_MODULE_1__.divCreate(
          "",
          "search-container"
        );
      const search =
        _components_methods__WEBPACK_IMPORTED_MODULE_1__.inputCreate(
          "Search..",
          "search",
          "text"
        );
      searchContainer.innerHTML = svgThings.search;
      searchContainer.append(search);
      middleContainer.append(searchContainer);
      return middleContainer;
    };

    const mainInfo = (weather) => {
      const leftContainer =
        _components_methods__WEBPACK_IMPORTED_MODULE_1__.divCreate(
          "",
          "left-info"
        );
      const situation =
        _components_methods__WEBPACK_IMPORTED_MODULE_1__.h2Create(
          "",
          "situation"
        );
      const place = _components_methods__WEBPACK_IMPORTED_MODULE_1__.h3Create(
        location,
        "place-main"
      );
      const h2Degrees =
        _components_methods__WEBPACK_IMPORTED_MODULE_1__.h2Create(
          "",
          "h2Degrees"
        );
      const showTime =
        _components_methods__WEBPACK_IMPORTED_MODULE_1__.h3Create(
          "",
          "show-time"
        );
      Promise.all([weather]).then((value) => {
        situation.textContent = value[0].weatherLike;
        h2Degrees.append(Math.round(value[0].tempCel) + "°C");
        const time = timeGet();
        showTime.textContent =
          time.dayNamed +
          ", " +
          time.dayNum +
          "th" +
          " " +
          time.monthNamed +
          " " +
          time.year +
          " " +
          time.time;
        leftContainer.append(situation, h2Degrees, place, showTime);
      });
      return leftContainer;
    };

    const areaLoad = (arrToAppend, areaClass) => {
      let area = _components_methods__WEBPACK_IMPORTED_MODULE_1__.divCreate(
        "",
        areaClass
      );
      for (let i = 0; i < arrToAppend.length; i++) {
        area.append(arrToAppend[i]);
      }
      return area;
    };

    let top = areaLoad(
      [mainInfo(Myweather), middleSearch(), extraInfo(Myweather)],
      "top"
    );
    let bottom = areaLoad([], "bottom");

    let search = top.querySelector(".search");
    let svgSearch = top.querySelector(".search-svg");

    const mainLoader = (weather, func) => {
      document.body.innerHTML = "";

      top = areaLoad(
        [mainInfo(weather), middleSearch(), extraInfo(weather)],
        "top"
      );
      bottom = areaLoad([], "bottom");

      search = top.querySelector(".search");
      svgSearch = top.querySelector(".search-svg");
      const listeners = () => {
        svgSearch.addEventListener("click", () => {
          func();
        });

        search.addEventListener("keypress", (event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            func();
          }
        });
      };
      listeners();
      document.body.append(top, bottom);
    };

    function clickContent() {
      let Mysearch = top.getElementsByClassName("search");
      if (Mysearch[0].value.trim().length !== 0) {
        location = Mysearch[0].value;
        const prev = Myweather;
        Myweather = locationChange(Mysearch[0].value).catch((err) => {
          console.error(err);
        });
        Myweather.then((value) => {
          if (value !== undefined) {
            mainLoader(Myweather);
            svgSearch.addEventListener("click", () => {
              clickContent();
            });

            search.addEventListener("keypress", (event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                clickContent(clickContent);
              }
            });
            return true;
          } else {
            Myweather = prev;
            return false;
          }
        }).catch((err) => {
          console.error(err);
        });
      }
    }

    mainLoader(Myweather, clickContent);
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL21ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc3Vuc2V0RGFyay5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11a3RhOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6YWZ0ZXIsXFxuKjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcnM6ICNmZWY0ZTg7XFxuICAtLWdvb2Qtd2hpdGU6ICNlNmU2ZTY7XFxuICAtLW1haW4tZm9udDogXFxcIk11a3RhXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgY29sb3I6IHZhcigtLWdvb2Qtd2hpdGUpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b3Age1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxufVxcblxcbi5taWRkbGUtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gcmVwZWF0KDIsIDFmcik7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcnMpO1xcbn1cXG5cXG4uc2VhcmNoLXN2ZyB7XFxuICBmaWx0ZXI6IGludmVydCg4NiUpIHNlcGlhKDUlKSBzYXR1cmF0ZSg1MzAlKSBodWUtcm90YXRlKDM0M2RlZylcXG4gICAgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDglKTtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8zO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnNlYXJjaC1zdmc6aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoNzglKSBzZXBpYSg4NCUpIHNhdHVyYXRlKDY1JSkgaHVlLXJvdGF0ZSgzMDJkZWcpXFxuICAgIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoOTklKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgY29sb3I6IHZhcigtLWdvb2Qtd2hpdGUpO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAganVzdGlmeS1zZWxmOiBzZWxmLWVuZDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnNlYXJjaDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcnMpO1xcbiAganVzdGlmeS1zZWxmOiBzZWxmLWVuZDtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5sZWZ0LWluZm8ge1xcbiAgaGVpZ2h0OiA2NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0LWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0LWluZm8gKiB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcnMpO1xcbn1cXG5cXG4ubGVmdC1pbmZvICoge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3JzKTtcXG59XFxuXFxuLnNob3ctdGltZSB7XFxuICB3b3JkLXNwYWNpbmc6IDNweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9ycyk7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlLW1haW4ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4uaDJEZWdyZWVzIHtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcnMpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFJQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix5REFBZ0Q7RUFDaEQsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFO21DQUNpQztFQUNqQyx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7a0NBQ2dDO0VBQ2hDLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw4Q0FBOEM7RUFDOUMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOENBQThDO0FBQ2hEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjphZnRlcixcXG4qOmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXVrdGE6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yczogI2ZlZjRlODtcXG4gIC0tZ29vZC13aGl0ZTogI2U2ZTZlNjtcXG4gIC0tbWFpbi1mb250OiBcXFwiTXVrdGFcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBjb2xvcjogdmFyKC0tZ29vZC13aGl0ZSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3N1bnNldERhcmsuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9wIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbn1cXG5cXG4ubWlkZGxlLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIHJlcGVhdCgyLCAxZnIpO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3JzKTtcXG59XFxuXFxuLnNlYXJjaC1zdmcge1xcbiAgZmlsdGVyOiBpbnZlcnQoODYlKSBzZXBpYSg1JSkgc2F0dXJhdGUoNTMwJSkgaHVlLXJvdGF0ZSgzNDNkZWcpXFxuICAgIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA4JSk7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvMztcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAganVzdGlmeS1zZWxmOiBzZWxmLWVuZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zZWFyY2gtc3ZnOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDc4JSkgc2VwaWEoODQlKSBzYXR1cmF0ZSg2NSUpIGh1ZS1yb3RhdGUoMzAyZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDk5JSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gIGNvbG9yOiB2YXIoLS1nb29kLXdoaXRlKTtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGp1c3RpZnktc2VsZjogc2VsZi1lbmQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5zZWFyY2g6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3JzKTtcXG4gIGp1c3RpZnktc2VsZjogc2VsZi1lbmQ7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubGVmdC1pbmZvIHtcXG4gIGhlaWdodDogNjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodC1pbmZvICoge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3JzKTtcXG59XFxuXFxuLmxlZnQtaW5mbyAqIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9ycyk7XFxufVxcblxcbi5zaG93LXRpbWUge1xcbiAgd29yZC1zcGFjaW5nOiAzcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcnMpO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wbGFjZS1tYWluIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLmgyRGVncmVlcyB7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3JzKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIE1hZGUgYnkgTXJFcG9jaFxuXG4vLyBUaGlzIGZpbGUgd2FzIG1hZGUgdG8gYmUgZXhwb3J0ZWQgZm9yIHVzZSBpbiBvdGhlciBmaWxlcywgaXQgaG9sZHMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgaHRtbCBlbGVtZW50cyBpbiBlYXNpZXIgd2F5XG5cbi8vIGRpdkNyZWF0ZSBmdW5jdGlvbiBleHByZXNzaW9uIHRha2VzIGxpa2UgZmlyc3Qgd2hhdCBpcyBpbnNpZGUgYW5kIHRoZW4gY2xhc3MgYW5kIHJldHVybnMgZGl2IGF0IGVuZFxuXG5jb25zdCBtZXRob2RDcmVhdGUgPSAoaHRtbE5hbWUsIGluc2lkZSwgY2xhc3NBZGQsIGlkQWRkLCBpbm5lckh0bWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaHRtbE5hbWUpO1xuICBlbGVtZW50LmFwcGVuZChpbnNpZGUpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBlbGVtZW50LmlkID0gaWRBZGQ7XG4gIH1cbiAgaWYgKGlubmVySHRtbCkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgZGl2Q3JlYXRlID0gKEluc2lkZURpdiwgY2xhc3NBZGQsIGlkQWRkLCBpbm5lckh0bWwpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmFwcGVuZChJbnNpZGVEaXYpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGRpdi5pZCA9IGlkQWRkO1xuICB9XG4gIGlmIChpbm5lckh0bWwpIHtcbiAgICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICB9XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBuYXZDcmVhdGUgPSAoSW5zaWRlTmF2LCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2LmFwcGVuZChJbnNpZGVOYXYpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIG5hdi5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBuYXY7XG59O1xuXG4vLyBJbWdDcmVhdGUgaXMgcmV0dXJucyB0YWtlcyBJbXBvcnRlZCBpbWcgYW5kIHJldHVybnMgaXQgcmVhZHkgZm9yIHVzZSB0byBhcHBlbmQgdG8gdGhlIGRpdiBvciBvdGhlciB1c2VcblxuY29uc3QgSW1nQ3JlYXRlID0gKGltYWdlKSA9PiB7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gaW1hZ2U7XG4gIHJldHVybiBpbWc7XG59O1xuXG4vLyBoMkNyZWF0ZSBjcmVhdGVzIGgyIGVsZW1lbnQgd2hpY2ggdGFrZXMgdGV4dENvbnRlbnQgYW5kIGNsYXNzIGFuZCByZXR1cm5zIGgyXG5cbmNvbnN0IGgxQ3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBoMS5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgaDEuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gaDE7XG59O1xuXG5jb25zdCBoMkNyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgaDIuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGgyLmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGgyO1xufTtcblxuY29uc3QgaDNDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMy50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGgzLmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBoMy5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBoMztcbn07XG5cbi8vIGg0Q3JlYXRlIGNyZWF0ZXMgaDQgZWxlbWVudCB3aGljaCB0YWtlcyB0ZXh0Q29udGVudCBhbmQgY2xhc3MgYW5kIHJldHVybnMgaDRcblxuY29uc3QgaDRDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBoNC50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGg0LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBoNC5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBoNDtcbn07XG5cbmNvbnN0IGg1Q3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgaDUudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBoNS5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgaDUuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gaDU7XG59O1xuXG4vLyBwQ3JlYXRlIGNyZWF0ZXMgcGFyYWdyYWhwIHdpdGggZmlyc3QgcGFyYW1ldGVyIHRleHQgYW5kIHNlY29uZCBjbGFzcyBhbmQgcmV0dXJucyBwYXJhZ3JhcGhcblxuY29uc3QgcENyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwLnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgcC5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgcC5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBwO1xufTtcblxuY29uc3QgaW5wdXRDcmVhdGUgPSAocGxhY2VIb2xkZXIsIGNsYXNzQWRkLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlSG9sZGVyO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaW5wdXQudHlwZSA9IHR5cGU7XG5cbiAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgZmllbGRzZXRDcmVhdGUgPSAoSW5zaWRlRmllbGQsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgZmllbGQuYXBwZW5kKEluc2lkZUZpZWxkKTtcbiAgZmllbGQuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGZpZWxkLmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGZpZWxkO1xufTtcblxuLy8gZXhwb3J0aW5nIGFsbCBmdW5jdGlvbiBleHByZXNzaW9uc1xuXG5leHBvcnQge1xuICBtZXRob2RDcmVhdGUsXG4gIGRpdkNyZWF0ZSxcbiAgbmF2Q3JlYXRlLFxuICBJbWdDcmVhdGUsXG4gIGgxQ3JlYXRlLFxuICBoMkNyZWF0ZSxcbiAgaDNDcmVhdGUsXG4gIGg0Q3JlYXRlLFxuICBoNUNyZWF0ZSxcbiAgcENyZWF0ZSxcbiAgaW5wdXRDcmVhdGUsXG4gIGZpZWxkc2V0Q3JlYXRlLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgaHRtbE1lIGZyb20gXCIuL2NvbXBvbmVudHMvbWV0aG9kc1wiO1xuXG5mdW5jdGlvbiBjb252ZXJ0VGVtcCh2YWx1ZSwgdW5pdFRvQmUsIHVuaXRJcykge1xuICBsZXQgcmV0dXJuZWRWYWwgPVxuICAgIFwiWW91IGRpZG4ndCBpbnB1dCB0byB3aGF0IHlvdSB3YW50IHZhbHVlIGNvbnZlcnQgb3Igd2hhdCBpdCB3YXNcIjtcbiAgaWYgKHVuaXRUb0JlICE9PSB1bmRlZmluZWQgJiYgdW5pdElzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodW5pdFRvQmUgPT09IFwia2VsXCIpIHtcbiAgICAgIHJldHVybmVkVmFsID0gKCh2YWx1ZSArIDQ1OS42NykgKiA1KSAvIDk7XG4gICAgICBpZiAodW5pdElzID09PSBcImNlbFwiKSB7XG4gICAgICAgIHJldHVybmVkVmFsID0gdmFsdWUgKyAyNzMuMTU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh1bml0VG9CZSA9PT0gXCJjZWxcIikge1xuICAgICAgcmV0dXJuZWRWYWwgPSAodmFsdWUgLSAzMikgLyAxLjg7XG4gICAgICBpZiAodW5pdElzID09PSBcImtlbFwiKSB7XG4gICAgICAgIHJldHVybmVkVmFsID0gdmFsdWUgLSAyNzMuMTU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh1bml0VG9CZSA9PT0gXCJmYVwiKSB7XG4gICAgICByZXR1cm5lZFZhbCA9ICh2YWx1ZSArIDMyKSAqIDEuODtcbiAgICAgIGlmICh1bml0SXMgPT09IFwia2VsXCIpIHtcbiAgICAgICAgcmV0dXJuZWRWYWwgPSAodmFsdWUgKiA5KSAvIDUgLSA0NTkuNjc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXR1cm5lZFZhbDtcbn1cblxuZnVuY3Rpb24gdGltZUdldCgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKS5zcGxpdChcIiBcIik7XG4gIGNvbnN0IGRheU5hbWVkID0gZGF0ZVswXTtcbiAgY29uc3QgbW9udGhOYW1lZCA9IGRhdGVbMV07XG4gIGNvbnN0IGRheU51bSA9IGRhdGVbMl07XG4gIGNvbnN0IHllYXIgPSBkYXRlWzNdO1xuICBjb25zdCB0aW1lID0gZGF0ZVs0XTtcblxuICByZXR1cm4geyBkYXlOdW0sIGRheU5hbWVkLCBtb250aE5hbWVkLCB5ZWFyLCB0aW1lIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJMb2FkKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGZldGNoV2VhdGhlciA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPTNlMmVjODc0MTE2NWVlZGNiZWI1NTAzZDUxYjlhY2ZjXG4gICAgYCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoV2VhdGhlci5qc29uKCk7XG4gIGlmICh3ZWF0aGVyLm1haW4gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHRlbXBDZWwgPSBjb252ZXJ0VGVtcCh3ZWF0aGVyLm1haW4udGVtcCwgXCJjZWxcIiwgXCJrZWxcIik7XG4gICAgY29uc3QgZmVlbFRlbXBDZWwgPSBjb252ZXJ0VGVtcCh3ZWF0aGVyLm1haW4uZmVlbHNfbGlrZSwgXCJjZWxcIiwgXCJrZWxcIik7XG4gICAgY29uc3Qgd2VhdGhlckxpa2UgPSB3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbjtcbiAgICBjb25zdCBodW1pZGl0eSA9IHdlYXRoZXIubWFpbi5odW1pZGl0eSArIFwiJVwiO1xuICAgIGNvbnN0IGNvdW50cnkgPSB3ZWF0aGVyLnN5cy5jb3VudHJ5O1xuICAgIGNvbnN0IHdpbmQgPSB3ZWF0aGVyLndpbmQuc3BlZWQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdlYXRoZXIsXG4gICAgICB0ZW1wQ2VsLFxuICAgICAgZmVlbFRlbXBDZWwsXG4gICAgICB3ZWF0aGVyTGlrZSxcbiAgICAgIGh1bWlkaXR5LFxuICAgICAgY291bnRyeSxcbiAgICAgIHdpbmQsXG4gICAgfTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2NhdGlvbkNoYW5nZShOZXdMb2NhdGlvbikge1xuICBjb25zdCBuZXdSZXF1ZXN0ID0gYXdhaXQgd2VhdGhlckxvYWQoTmV3TG9jYXRpb24pO1xuICByZXR1cm4gbmV3UmVxdWVzdDtcbn1cblxubGV0IGxvY2F0aW9uID0gXCJMb25kb25cIjtcbmxldCBNeXdlYXRoZXIgPSBsb2NhdGlvbkNoYW5nZShcIkxvbmRvblwiKS5jYXRjaCgoZXJyKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyKTtcbn0pO1xuXG5jb25zdCBzdmdUaGluZ3MgPSB7XG4gIHNlYXJjaDogYDxzdmcgY2xhc3M9XCJzZWFyY2gtc3ZnXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bWFnbmlmeTwvdGl0bGU+XG4gICAgPHBhdGggZD1cIk05LjUsM0E2LjUsNi41IDAgMCwxIDE2LDkuNUMxNiwxMS4xMSAxNS40MSwxMi41OSAxNC40NCwxMy43M0wxNC43MSwxNEgxNS41TDIwLjUsMTlMMTksMjAuNUwxNCwxNS41VjE0LjcxTDEzLjczLDE0LjQ0QzEyLjU5LFxuICAgIDE1LjQxIDExLjExLDE2IDkuNSwxNkE2LjUsNi41IDAgMCwxIDMsOS41QTYuNSw2LjUgMCAwLDEgOS41LDNNOS41LDVDNyw1IDUsNyA1LDkuNUM1LDEyIDcsMTQgOS41LDE0QzEyLDE0IDE0LDEyIDE0LDkuNUMxNCw3IDEyLDUgOS41LDVaXCIgLz5cbiAgICA8L3N2Zz5gLFxufTtcblxuY29uc3QgZXh0cmFJbmZvID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgcmlnaHRDb250YWluZXIgPSBodG1sTWUuZGl2Q3JlYXRlKFwiXCIsIFwicmlnaHQtaW5mb1wiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBodG1sTWUuaDNDcmVhdGUoXCJcIiwgXCJodW1pZGl0eS1leHRyYVwiKTtcbiAgY29uc3QgY291bnRyeSA9IGh0bWxNZS5oM0NyZWF0ZShcIlwiLCBcImNvdW50cnktZXh0cmFcIik7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGh0bWxNZS5oM0NyZWF0ZShcIlwiLCBcIndpbmQtZXh0cmFcIik7XG4gIFByb21pc2UuYWxsKFt3ZWF0aGVyXSkudGhlbigodmFsdWUpID0+IHtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt2YWx1ZVswXS5odW1pZGl0eX1gO1xuICAgIGNvdW50cnkudGV4dENvbnRlbnQgPSBgQ291bnRyeTogJHt2YWx1ZVswXS5jb3VudHJ5fWA7XG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWQ6ICR7dmFsdWVbMF0ud2luZH1gO1xuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZChodW1pZGl0eSwgY291bnRyeSwgd2luZFNwZWVkKTtcbiAgfSk7XG4gIHJldHVybiByaWdodENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IG1pZGRsZVNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgbWlkZGxlQ29udGFpbmVyID0gaHRtbE1lLmRpdkNyZWF0ZShcIlwiLCBcIm1pZGRsZS1jb250YWluZXJcIik7XG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGh0bWxNZS5kaXZDcmVhdGUoXCJcIiwgXCJzZWFyY2gtY29udGFpbmVyXCIpO1xuICBjb25zdCBzZWFyY2ggPSBodG1sTWUuaW5wdXRDcmVhdGUoXCJTZWFyY2guLlwiLCBcInNlYXJjaFwiLCBcInRleHRcIik7XG4gIHNlYXJjaENvbnRhaW5lci5pbm5lckhUTUwgPSBzdmdUaGluZ3Muc2VhcmNoO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kKHNlYXJjaCk7XG4gIG1pZGRsZUNvbnRhaW5lci5hcHBlbmQoc2VhcmNoQ29udGFpbmVyKTtcbiAgcmV0dXJuIG1pZGRsZUNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IG1haW5JbmZvID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgbGVmdENvbnRhaW5lciA9IGh0bWxNZS5kaXZDcmVhdGUoXCJcIiwgXCJsZWZ0LWluZm9cIik7XG4gIGNvbnN0IHNpdHVhdGlvbiA9IGh0bWxNZS5oMkNyZWF0ZShcIlwiLCBcInNpdHVhdGlvblwiKTtcbiAgY29uc3QgcGxhY2UgPSBodG1sTWUuaDNDcmVhdGUobG9jYXRpb24sIFwicGxhY2UtbWFpblwiKTtcbiAgY29uc3QgaDJEZWdyZWVzID0gaHRtbE1lLmgyQ3JlYXRlKFwiXCIsIFwiaDJEZWdyZWVzXCIpO1xuICBjb25zdCBzaG93VGltZSA9IGh0bWxNZS5oM0NyZWF0ZShcIlwiLCBcInNob3ctdGltZVwiKTtcbiAgUHJvbWlzZS5hbGwoW3dlYXRoZXJdKS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgIHNpdHVhdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlWzBdLndlYXRoZXJMaWtlO1xuICAgIGgyRGVncmVlcy5hcHBlbmQoTWF0aC5yb3VuZCh2YWx1ZVswXS50ZW1wQ2VsKSArIFwiwrBDXCIpO1xuICAgIGNvbnN0IHRpbWUgPSB0aW1lR2V0KCk7XG4gICAgc2hvd1RpbWUudGV4dENvbnRlbnQgPVxuICAgICAgdGltZS5kYXlOYW1lZCArXG4gICAgICBcIiwgXCIgK1xuICAgICAgdGltZS5kYXlOdW0gK1xuICAgICAgXCJ0aFwiICtcbiAgICAgIFwiIFwiICtcbiAgICAgIHRpbWUubW9udGhOYW1lZCArXG4gICAgICBcIiBcIiArXG4gICAgICB0aW1lLnllYXIgK1xuICAgICAgXCIgXCIgK1xuICAgICAgdGltZS50aW1lO1xuICAgIGxlZnRDb250YWluZXIuYXBwZW5kKHNpdHVhdGlvbiwgaDJEZWdyZWVzLCBwbGFjZSwgc2hvd1RpbWUpO1xuICB9KTtcbiAgcmV0dXJuIGxlZnRDb250YWluZXI7XG59O1xuXG5jb25zdCBhcmVhTG9hZCA9IChhcnJUb0FwcGVuZCwgYXJlYUNsYXNzKSA9PiB7XG4gIGxldCBhcmVhID0gaHRtbE1lLmRpdkNyZWF0ZShcIlwiLCBhcmVhQ2xhc3MpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyclRvQXBwZW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJlYS5hcHBlbmQoYXJyVG9BcHBlbmRbaV0pO1xuICB9XG4gIHJldHVybiBhcmVhO1xufTtcblxubGV0IHRvcCA9IGFyZWFMb2FkKFxuICBbbWFpbkluZm8oTXl3ZWF0aGVyKSwgbWlkZGxlU2VhcmNoKCksIGV4dHJhSW5mbyhNeXdlYXRoZXIpXSxcbiAgXCJ0b3BcIlxuKTtcbmxldCBib3R0b20gPSBhcmVhTG9hZChbXSwgXCJib3R0b21cIik7XG5cbmxldCBzZWFyY2ggPSB0b3AucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIik7XG5sZXQgc3ZnU2VhcmNoID0gdG9wLnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN2Z1wiKTtcblxuY29uc3QgbWFpbkxvYWRlciA9ICh3ZWF0aGVyLCBmdW5jKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcblxuICB0b3AgPSBhcmVhTG9hZChcbiAgICBbbWFpbkluZm8od2VhdGhlciksIG1pZGRsZVNlYXJjaCgpLCBleHRyYUluZm8od2VhdGhlcildLFxuICAgIFwidG9wXCJcbiAgKTtcbiAgYm90dG9tID0gYXJlYUxvYWQoW10sIFwiYm90dG9tXCIpO1xuXG4gIHNlYXJjaCA9IHRvcC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKTtcbiAgc3ZnU2VhcmNoID0gdG9wLnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN2Z1wiKTtcbiAgY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHN2Z1NlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZnVuYygpO1xuICAgIH0pO1xuXG4gICAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmdW5jKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGxpc3RlbmVycygpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0b3AsIGJvdHRvbSk7XG59O1xuXG5mdW5jdGlvbiBjbGlja0NvbnRlbnQoKSB7XG4gIGxldCBNeXNlYXJjaCA9IHRvcC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VhcmNoXCIpO1xuICBpZiAoTXlzZWFyY2hbMF0udmFsdWUudHJpbSgpLmxlbmd0aCAhPT0gMCkge1xuICAgIGxvY2F0aW9uID0gTXlzZWFyY2hbMF0udmFsdWU7XG4gICAgY29uc3QgcHJldiA9IE15d2VhdGhlcjtcbiAgICBNeXdlYXRoZXIgPSBsb2NhdGlvbkNoYW5nZShNeXNlYXJjaFswXS52YWx1ZSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0pO1xuICAgIE15d2VhdGhlci50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWFpbkxvYWRlcihNeXdlYXRoZXIpO1xuICAgICAgICBzdmdTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjbGlja0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbGlja0NvbnRlbnQoY2xpY2tDb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE15d2VhdGhlciA9IHByZXY7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSk7XG4gIH1cbn1cblxubWFpbkxvYWRlcihNeXdlYXRoZXIsIGNsaWNrQ29udGVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
