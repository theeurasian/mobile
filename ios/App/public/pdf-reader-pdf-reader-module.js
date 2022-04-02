(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pdf-reader-pdf-reader-module"],{

/***/ "+IKf":
/*!*********************************************************!*\
  !*** ./src/app/pdf-reader/pdf-reader-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PdfReaderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfReaderPageRoutingModule", function() { return PdfReaderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pdf_reader_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdf-reader.page */ "fBVL");




const routes = [
    {
        path: '',
        component: _pdf_reader_page__WEBPACK_IMPORTED_MODULE_3__["PdfReaderPage"]
    }
];
let PdfReaderPageRoutingModule = class PdfReaderPageRoutingModule {
};
PdfReaderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PdfReaderPageRoutingModule);



/***/ }),

/***/ "QB7D":
/*!*************************************************!*\
  !*** ./src/app/pdf-reader/pdf-reader.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-toolbar {\n  --color: #ffffff;\n  --background: #E21F2D;\n  --ion-border-color: transparent;\n}\n.page-mask {\n  position: absolute;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n  width: calc(100% - 10px);\n  top: 0;\n  left: 0;\n}\n.image {\n  display: flex;\n  justify-content: center;\n}\n.right-page-mask-e {\n  display: grid;\n  grid-template-rows: 55% 25% !important;\n  grid-template-columns: 10% 27% 26% 26% !important;\n  height: 100%;\n}\n.right-page-mask {\n  display: grid;\n  grid-template-rows: 63% 25%;\n  grid-template-columns: 10% 27% 26% 26%;\n  height: 100%;\n  width: 100%;\n}\n.right-page-mask-9 {\n  display: grid;\n  grid-template-rows: 60% 30%;\n  grid-template-columns: 30% 40%;\n  height: 100%;\n}\n.left-page-mask {\n  height: 100%;\n  width: 100%;\n}\n.l-m {\n  height: 100%;\n  width: 100%;\n}\n.r-m {\n  height: 100%;\n  width: 100%;\n}\n.sub-mask-pbp {\n  display: grid;\n  grid-template-rows: 70% 15%;\n  grid-template-columns: 18% 16%;\n  height: 100%;\n}\n.sub-mask-promo {\n  display: grid;\n  grid-template-rows: 81% 12%;\n  grid-template-columns: 45% 16%;\n  height: 100%;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.pbp-mask-promo-9 {\n  display: grid;\n  grid-template-rows: 38% 20%;\n  grid-template-columns: 38% 25%;\n  height: 100%;\n}\n.first-page-promo {\n  display: grid;\n  grid-auto-rows: 87% 11%;\n  grid-template-columns: 15% 27%;\n  height: 100%;\n}\n.second-page-promo {\n  display: grid;\n  grid-template-rows: 81% 12%;\n  grid-template-columns: 45% 16%;\n  height: 100%;\n}\n.left-bottom-3qr {\n  display: grid;\n  grid-template-rows: 90% 8%;\n  grid-template-columns: 4% 8.5% 8% 8%;\n  height: 100%;\n}\n.center-bottom-2qr {\n  display: grid;\n  grid-template-rows: 84% 12%;\n  grid-template-columns: 28% 15% 12% 15%;\n  height: 100%;\n}\n.left-bottom-3qr-1 {\n  display: grid;\n  grid-template-rows: 87% 10%;\n  grid-template-columns: 2% 11.5% 11.5% 11.5%;\n  height: 100%;\n}\n.right-bottom-3qr {\n  display: grid;\n  grid-template-rows: 86% 9%;\n  grid-template-columns: 50% 13% 13% 13%;\n  height: 100%;\n}\n.center-bottom-3qr {\n  display: grid;\n  grid-template-rows: 86% 10%;\n  grid-template-columns: 30% 13% 13% 13%;\n  height: 100%;\n}\n.left-bottom-1qr {\n  display: grid;\n  grid-template-rows: 80% 12%;\n  grid-template-columns: 10% 17%;\n  height: 100%;\n}\n.left-bottom-3qr-2 {\n  display: grid;\n  grid-template-rows: 87% 10%;\n  grid-template-columns: 2% 11.5% 11.5% 11.5%;\n  height: 100%;\n}\n.right-bottom-1qr {\n  display: grid;\n  grid-template-rows: 87% 11%;\n  grid-template-columns: 81% 14%;\n  height: 100%;\n}\n.left-bottom-1qr-1 {\n  display: grid;\n  grid-template-rows: 78% 10%;\n  grid-template-columns: 9% 25%;\n  height: 100%;\n}\n.rb-12-1qr {\n  display: grid;\n  grid-template-rows: 86% 8%;\n  grid-template-columns: 84% 11%;\n  height: 100%;\n}\n.lb-12-1qr {\n  display: grid;\n  grid-template-rows: 81% 7%;\n  grid-template-columns: 5% 10%;\n  height: 100%;\n}\n.lb-12-1qr-1 {\n  display: grid;\n  grid-template-rows: 84% 7%;\n  grid-template-columns: 5% 10%;\n  height: 100%;\n}\n.lb-12-1qr-2 {\n  display: grid;\n  grid-template-rows: 86% 8%;\n  grid-template-columns: 5% 10%;\n  height: 100%;\n}\n.rb-12-1qr-l {\n  display: grid;\n  grid-template-rows: 86% 8%;\n  grid-template-columns: 80% 13%;\n  height: 100%;\n}\n.rc-12-1qr {\n  display: grid;\n  grid-template-rows: 43% 10%;\n  grid-template-columns: 80% 13%;\n  height: 100%;\n}\n.lb-12-2qr {\n  display: grid;\n  grid-template-rows: 11% 7% 41% 7%;\n  grid-template-columns: 85% 9%;\n  height: 100%;\n}\n.rс-12-1qr {\n  display: grid;\n  grid-template-rows: 35% 6%;\n  grid-template-columns: 89% 9%;\n  height: 100%;\n}\n.rb-12-1qr-2 {\n  display: grid;\n  grid-template-rows: 88% 6%;\n  grid-template-columns: 87% 9%;\n  height: 100%;\n}\n.rb-12-1qr-3 {\n  display: grid;\n  grid-template-rows: 82% 11%;\n  grid-template-columns: 75% 16%;\n  height: 100%;\n}\n.lt-12-1qr {\n  display: grid;\n  grid-template-rows: 4% 12%;\n  grid-template-columns: 8% 15%;\n  height: 100%;\n}\n.rt-12-1qr {\n  display: grid;\n  grid-template-rows: 4% 12%;\n  grid-template-columns: 79% 15%;\n  height: 100%;\n}\n.rb-12-1qr-4 {\n  display: grid;\n  grid-template-rows: 83% 10%;\n  grid-template-columns: 70% 13%;\n  height: 100%;\n}\n.rb-12-3qr {\n  display: grid;\n  grid-template-rows: 63% 25%;\n  grid-template-columns: 10% 27% 26.5% 26.5%;\n  height: 100%;\n}\n.lbc-12-1q {\n  display: grid;\n  grid-template-rows: 85% 12%;\n  grid-template-columns: 22% 16%;\n  height: 100%;\n}\n.rb-12-1qr-5 {\n  display: grid;\n  grid-template-rows: 72% 10%;\n  grid-template-columns: 72% 13%;\n  height: 100%;\n}\n.lb-12-1qr-3 {\n  display: grid;\n  grid-template-rows: 87% 12%;\n  grid-template-columns: 12% 16%;\n  height: 100%;\n}\n.rb-12-1qr-6 {\n  display: grid;\n  grid-template-rows: 87% 12%;\n  grid-template-columns: 69% 16%;\n  height: 100%;\n}\n.first-page-promo-apps {\n  display: grid;\n  grid-auto-rows: 87% 11%;\n  grid-template-columns: 45% 27%;\n  height: 100%;\n}\n.first-page-promo-e13 {\n  display: grid;\n  grid-auto-rows: 89% 9%;\n  grid-template-columns: 10% 26%;\n  height: 100%;\n}\n.second-page-promo-e13 {\n  display: grid;\n  grid-template-rows: 81% 10%;\n  grid-template-columns: 45% 13%;\n  height: 100%;\n}\n.rb-13-1qr {\n  display: grid;\n  grid-template-rows: 70% 13%;\n  grid-template-columns: 80% 16%;\n  height: 100%;\n}\n.lb-13-1qr {\n  display: grid;\n  grid-template-rows: 85% 10%;\n  grid-template-columns: 5% 13%;\n  height: 100%;\n}\n.rt-13-1qr {\n  display: grid;\n  grid-template-rows: 4% 12%;\n  grid-template-columns: 79% 15%;\n  height: 100%;\n}\n.rb-13-3qr {\n  display: grid;\n  grid-template-rows: 63% 25%;\n  grid-template-columns: 10% 27% 26.5% 26.5%;\n  height: 100%;\n}\n.rb-13-1qr-1 {\n  display: grid;\n  grid-template-rows: 78% 13%;\n  grid-template-columns: 80% 14%;\n  height: 100%;\n}\n.rb-13-2qr {\n  display: grid;\n  grid-template-rows: 78% 14%;\n  grid-template-columns: 60% 15% 15%;\n  height: 100%;\n}\n.rb-13-3qr-1 {\n  display: grid;\n  grid-template-rows: 4% 15% 60% 17%;\n  grid-template-columns: 5% 22% 46% 22%;\n  height: 100%;\n}\n.lb-13-1qr-1 {\n  display: grid;\n  grid-template-rows: 74% 10%;\n  grid-template-columns: 17% 13%;\n  height: 100%;\n}\n.rb-13-1qr-2 {\n  display: grid;\n  grid-template-rows: 87% 10%;\n  grid-template-columns: 78% 12%;\n  height: 100%;\n}\n.rt-13-2qr {\n  display: grid;\n  grid-template-rows: 5% 14%;\n  grid-template-columns: 58% 18% 18%;\n  height: 100%;\n}\n.rb-13-1qr-2 {\n  display: grid;\n  grid-template-rows: 78% 17%;\n  grid-template-columns: 71% 22%;\n  height: 100%;\n}\n.lb-13-1qr-3 {\n  display: grid;\n  grid-template-rows: 80% 16%;\n  grid-template-columns: 16% 21%;\n  height: 100%;\n}\n.rb-13-1qr-3 {\n  display: grid;\n  grid-template-rows: 77% 15%;\n  grid-template-columns: 69% 20%;\n  height: 100%;\n}\n.rb-13-1qr-2 {\n  display: grid;\n  grid-template-rows: 87% 11%;\n  grid-template-columns: 79% 14%;\n  height: 100%;\n}\n.rb-13-1qr-3 {\n  display: grid;\n  grid-template-rows: 86% 10%;\n  grid-template-columns: 81% 14%;\n  height: 100%;\n}\n.rb-13-1qr-4 {\n  display: grid;\n  grid-template-rows: 77% 15%;\n  grid-template-columns: 69% 20%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBkZi1yZWFkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQUVGO0FBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFHRjtBQURBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBSUY7QUFGQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtBQUtGO0FBSEE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTUY7QUFKQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQU9GO0FBTEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVFGO0FBTkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVNGO0FBUEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVVGO0FBUkE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFXRjtBQVRBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBWUY7QUFWQTtFQUNFLGVBQUE7QUFhRjtBQVhBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBY0Y7QUFYQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQWNGO0FBWkE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFlRjtBQWJBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FBZ0JGO0FBZEE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUFpQkY7QUFmQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtBQWtCRjtBQWhCQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtBQW1CRjtBQWpCQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtBQW9CRjtBQWxCQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQXFCRjtBQW5CQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtBQXNCRjtBQXBCQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQXVCRjtBQXJCQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQXdCRjtBQXRCQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQXlCRjtBQXZCQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQTBCRjtBQXhCQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQTJCRjtBQXpCQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQTRCRjtBQTFCQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQTZCRjtBQTNCQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQThCRjtBQTVCQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQStCRjtBQTdCQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQWdDRjtBQTlCQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQWlDRjtBQS9CQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQWtDRjtBQWhDQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQW1DRjtBQWpDQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQW9DRjtBQWxDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQXFDRjtBQW5DQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtBQXNDRjtBQXBDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQXVDRjtBQXJDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQXdDRjtBQXRDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQXlDRjtBQXZDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQTBDRjtBQXhDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQTJDRjtBQXpDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQTRDRjtBQTFDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQTZDRjtBQTNDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQThDRjtBQTVDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQStDRjtBQTdDQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQWdERjtBQTlDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtBQWlERjtBQS9DQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQWtERjtBQWhEQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtBQW1ERjtBQWpEQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQW9ERjtBQWxEQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQXFERjtBQW5EQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQXNERjtBQXBEQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtBQXVERjtBQXJEQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQXdERjtBQXREQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQXlERjtBQXZEQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQTBERjtBQXhEQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQTJERjtBQXpEQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQTRERjtBQTFEQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQTZERiIsImZpbGUiOiJwZGYtcmVhZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjRTIxRjJEO1xuICAtLWlvbi1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFnZS1tYXNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJpZ2h0LXBhZ2UtbWFzay1lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1NSUgMjUlICFpbXBvcnRhbnQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDI3JSAyNiUgMjYlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJpZ2h0LXBhZ2UtbWFzayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjMlIDI1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgMjclIDI2JSAyNiU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yaWdodC1wYWdlLW1hc2stOSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjAlIDMwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZWZ0LXBhZ2UtbWFzayB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sLW0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uci1tIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Yi1tYXNrLXBicCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzAlIDE1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOCUgMTYlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zdWItbWFzay1wcm9tbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODElIDEyJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NSUgMTYlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBicC1tYXNrLXByb21vLTkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDM4JSAyMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzglIDI1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmlyc3QtcGFnZS1wcm9tbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1yb3dzOiA4NyUgMTElO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSAyNyU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlY29uZC1wYWdlLXByb21vIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MSUgMTIlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1JSAxNiU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxlZnQtYm90dG9tLTNxciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogOTAlIDglO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQlIDguNSUgOCUgOCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlci1ib3R0b20tMnFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NCUgMTIlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAxNSUgMTIlIDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVmdC1ib3R0b20tM3FyLTEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg3JSAxMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMiUgMTEuNSUgMTEuNSUgMTEuNSU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJpZ2h0LWJvdHRvbS0zcXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg2JSA5JTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgMTMlIDEzJSAxMyU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlci1ib3R0b20tM3FyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NiUgMTAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAxMyUgMTMlIDEzJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVmdC1ib3R0b20tMXFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MCUgMTIlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSAxNyU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxlZnQtYm90dG9tLTNxci0yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NyUgMTAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIlIDExLjUlIDExLjUlIDExLjUlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yaWdodC1ib3R0b20tMXFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NyUgMTElO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgxJSAxNCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxlZnQtYm90dG9tLTFxci0xIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3OCUgMTAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDklIDI1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmItMTItMXFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NiUgOCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODQlIDExJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGItMTItMXFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MSUgNyU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYi0xMi0xcXItMSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODQlIDclO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDEwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGItMTItMXFyLTIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg2JSA4JTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1JSAxMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJiLTEyLTFxci1sIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NiUgOCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDEzJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmMtMTItMXFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MyUgMTAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxMyU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxiLTEyLTJxciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTElIDclIDQxJSA3JTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4NSUgOSU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnLRgS0xMi0xcXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1JSA2JTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4OSUgOSU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJiLTEyLTFxci0yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4OCUgNiU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODclIDklO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yYi0xMi0xcXItMyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODIlIDExJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NSUgMTYlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sdC0xMi0xcXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQlIDEyJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4JSAxNSU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJ0LTEyLTFxciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNCUgMTIlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc5JSAxNSU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJiLTEyLTFxci00IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MyUgMTAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAxMyU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJiLTEyLTNxciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjMlIDI1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgMjclIDI2LjUlIDI2LjUlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYmMtMTItMXEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg1JSAxMiU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDE2JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmItMTItMXFyLTUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcyJSAxMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzIlIDEzJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGItMTItMXFyLTMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg3JSAxMiU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIlIDE2JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmItMTItMXFyLTYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg3JSAxMiU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjklIDE2JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmlyc3QtcGFnZS1wcm9tby1hcHBzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IDg3JSAxMSU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDUlIDI3JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmlyc3QtcGFnZS1wcm9tby1lMTMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tcm93czogODklIDklO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSAyNiU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlY29uZC1wYWdlLXByb21vLWUxMyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODElIDEwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NSUgMTMlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yYi0xMy0xcXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwJSAxMyU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDE2JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGItMTMtMXFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NSUgMTAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDEzJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucnQtMTMtMXFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0JSAxMiU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzklIDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmItMTMtM3FyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MyUgMjUlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSAyNyUgMjYuNSUgMjYuNSU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJiLTEzLTFxci0xIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3OCUgMTMlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxNCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJiLTEzLTJxciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzglIDE0JTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgMTUlIDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmItMTMtM3FyLTEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQlIDE1JSA2MCUgMTclO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDIyJSA0NiUgMjIlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYi0xMy0xcXItMSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzQlIDEwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNyUgMTMlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yYi0xMy0xcXItMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODclIDEwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3OCUgMTIlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ydC0xMy0ycXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUlIDE0JTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1OCUgMTglIDE4JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmItMTMtMXFyLTIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDc4JSAxNyU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzElIDIyJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGItMTMtMXFyLTMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwJSAxNiU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTYlIDIxJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmItMTMtMXFyLTMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDc3JSAxNSU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjklIDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmItMTMtMXFyLTIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg3JSAxMSU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzklIDE0JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmItMTMtMXFyLTMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg2JSAxMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODElIDE0JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmItMTMtMXFyLTQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDc3JSAxNSU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjklIDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "X+iH":
/*!*************************************************!*\
  !*** ./src/app/pdf-reader/pdf-reader.module.ts ***!
  \*************************************************/
/*! exports provided: PdfReaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfReaderPageModule", function() { return PdfReaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pdf_reader_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pdf-reader-routing.module */ "+IKf");
/* harmony import */ var _pdf_reader_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pdf-reader.page */ "fBVL");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pinch-zoom */ "bznP");








let PdfReaderPageModule = class PdfReaderPageModule {
};
PdfReaderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pdf_reader_routing_module__WEBPACK_IMPORTED_MODULE_5__["PdfReaderPageRoutingModule"],
            ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__["PinchZoomModule"]
        ],
        declarations: [_pdf_reader_page__WEBPACK_IMPORTED_MODULE_6__["PdfReaderPage"]]
    })
], PdfReaderPageModule);



/***/ }),

/***/ "bznP":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-pinch-zoom/__ivy_ngcc__/fesm2015/ngx-pinch-zoom.js ***!
  \*****************************************************************************/
/*! exports provided: PinchZoomComponent, PinchZoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinchZoomComponent", function() { return PinchZoomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinchZoomModule", function() { return PinchZoomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PinchZoomComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PinchZoomComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleZoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pz-zoom-button-out", ctx_r0.isZoomedIn);
} }
const _c0 = ["*"];
const defaultProperties = {
    transitionDuration: 200,
    doubleTap: true,
    doubleTapScale: 2,
    limitZoom: "original image size",
    autoZoomOut: false,
    disabled: false,
    overflow: "hidden",
    zoomControlScale: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    minScale: 0,
    minPanScale: 1.0001,
    disableZoomControl: "auto",
    listeners: "mouse and touch",
    wheel: true,
    wheelZoomFactor: 0.2,
    draggableImage: false
};
const backwardCompatibilityProperties = {
    "transition-duration": "transitionDuration",
    "double-tap": "doubleTap",
    "double-tap-scale": "doubleTapScale",
    "zoom-button": "zoomButton",
    "auto-zoom-out": "autoZoomOut",
    "limit-zoom": "limitZoom"
};

class Touches {
    constructor(properties) {
        this.eventType = undefined;
        this.handlers = {};
        this.startX = 0;
        this.startY = 0;
        this.lastTap = 0;
        this.doubleTapMinTimeout = 300;
        this.tapMinTimeout = 200;
        this.touchstartTime = 0;
        this.i = 0;
        this.isMousedown = false;
        this.touchListeners = {
            "touchstart": "handleTouchstart",
            "touchmove": "handleTouchmove",
            "touchend": "handleTouchend"
        };
        this.mouseListeners = {
            "mousedown": "handleMousedown",
            "mousemove": "handleMousemove",
            "mouseup": "handleMouseup",
            "wheel": "handleWheel"
        };
        this.otherListeners = {
            "resize": "handleResize"
        };
        /*
         * Listeners
         */
        /* Touchstart */
        this.handleTouchstart = (event) => {
            this.elementPosition = this.getElementPosition();
            this.touchstartTime = new Date().getTime();
            if (this.eventType === undefined) {
                this.getTouchstartPosition(event);
            }
            this.runHandler("touchstart", event);
        };
        /* Touchmove */
        this.handleTouchmove = (event) => {
            const touches = event.touches;
            // Pan
            if (this.detectPan(touches)) {
                this.runHandler("pan", event);
            }
            // Pinch
            if (this.detectPinch(event)) {
                this.runHandler("pinch", event);
            }
        };
        /* Touchend */
        this.handleTouchend = (event) => {
            const touches = event.touches;
            // Double Tap
            if (this.detectDoubleTap()) {
                this.runHandler("double-tap", event);
            }
            // Tap
            this.detectTap();
            this.runHandler("touchend", event);
            this.eventType = 'touchend';
            if (touches && touches.length === 0) {
                this.eventType = undefined;
                this.i = 0;
            }
        };
        /* Mousedown */
        this.handleMousedown = (event) => {
            this.isMousedown = true;
            this.elementPosition = this.getElementPosition();
            this.touchstartTime = new Date().getTime();
            if (this.eventType === undefined) {
                this.getMousedownPosition(event);
            }
            this.runHandler("mousedown", event);
        };
        /* Mousemove */
        this.handleMousemove = (event) => {
            //event.preventDefault();
            if (!this.isMousedown) {
                return;
            }
            // Pan
            this.runHandler("pan", event);
            // Linear swipe
            switch (this.detectLinearSwipe(event)) {
                case "horizontal-swipe":
                    event.swipeType = "horizontal-swipe";
                    this.runHandler("horizontal-swipe", event);
                    break;
                case "vertical-swipe":
                    event.swipeType = "vertical-swipe";
                    this.runHandler("vertical-swipe", event);
                    break;
            }
            // Linear swipe
            if (this.detectLinearSwipe(event) ||
                this.eventType === 'horizontal-swipe' ||
                this.eventType === 'vertical-swipe') {
                this.handleLinearSwipe(event);
            }
        };
        /* Mouseup */
        this.handleMouseup = (event) => {
            // Tap
            this.detectTap();
            this.isMousedown = false;
            this.runHandler("mouseup", event);
            this.eventType = undefined;
            this.i = 0;
        };
        /* Wheel */
        this.handleWheel = (event) => {
            this.runHandler("wheel", event);
        };
        /* Resize */
        this.handleResize = (event) => {
            this.runHandler("resize", event);
        };
        this.properties = properties;
        this.element = this.properties.element;
        this.elementPosition = this.getElementPosition();
        this.toggleEventListeners('addEventListener');
    }
    destroy() {
        this.toggleEventListeners('removeEventListener');
    }
    toggleEventListeners(action) {
        let listeners;
        if (this.properties.listeners === 'mouse and touch') {
            listeners = Object.assign(this.touchListeners, this.mouseListeners);
        }
        else {
            listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
        }
        if (this.properties.resize) {
            listeners = Object.assign(listeners, this.otherListeners);
        }
        for (var listener in listeners) {
            const handler = listeners[listener];
            // Window
            if (listener === "resize") {
                if (action === 'addEventListener') {
                    window.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    window.removeEventListener(listener, this[handler], false);
                }
                // Document
            }
            else if (listener === 'mouseup' || listener === "mousemove") {
                if (action === 'addEventListener') {
                    document.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    document.removeEventListener(listener, this[handler], false);
                }
                // Element
            }
            else {
                if (action === 'addEventListener') {
                    this.element.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    this.element.removeEventListener(listener, this[handler], false);
                }
            }
        }
    }
    handleLinearSwipe(event) {
        //event.preventDefault();
        this.i++;
        if (this.i > 3) {
            this.eventType = this.getLinearSwipeType(event);
        }
        if (this.eventType === 'horizontal-swipe') {
            this.runHandler('horizontal-swipe', event);
        }
        if (this.eventType === 'vertical-swipe') {
            this.runHandler('vertical-swipe', event);
        }
    }
    runHandler(eventName, response) {
        if (this.handlers[eventName]) {
            this.handlers[eventName](response);
        }
    }
    /*
     * Detection
     */
    detectPan(touches) {
        return touches.length === 1 && !this.eventType || this.eventType === 'pan';
    }
    detectDoubleTap() {
        if (this.eventType != undefined) {
            return;
        }
        const currentTime = new Date().getTime();
        const tapLength = currentTime - this.lastTap;
        clearTimeout(this.doubleTapTimeout);
        if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
            return true;
        }
        else {
            this.doubleTapTimeout = setTimeout(() => {
                clearTimeout(this.doubleTapTimeout);
            }, this.doubleTapMinTimeout);
        }
        this.lastTap = currentTime;
    }
    detectTap() {
        if (this.eventType != undefined) {
            return;
        }
        const currentTime = new Date().getTime();
        const tapLength = currentTime - this.touchstartTime;
        if (tapLength > 0) {
            if (tapLength < this.tapMinTimeout) {
                this.runHandler("tap", {});
            }
            else {
                this.runHandler("longtap", {});
            }
        }
    }
    detectPinch(event) {
        const touches = event.touches;
        return (touches.length === 2 && this.eventType === undefined) || this.eventType === 'pinch';
    }
    detectLinearSwipe(event) {
        const touches = event.touches;
        if (touches) {
            if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
            }
        }
        else {
            if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
            }
        }
    }
    getLinearSwipeType(event) {
        if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
            const movementX = Math.abs(this.moveLeft(0, event) - this.startX);
            const movementY = Math.abs(this.moveTop(0, event) - this.startY);
            if ((movementY * 3) > movementX) {
                return 'vertical-swipe';
            }
            else {
                return 'horizontal-swipe';
            }
        }
        else {
            return this.eventType;
        }
    }
    getElementPosition() {
        return this.element.getBoundingClientRect();
    }
    getTouchstartPosition(event) {
        this.startX = event.touches[0].clientX - this.elementPosition.left;
        this.startY = event.touches[0].clientY - this.elementPosition.top;
    }
    getMousedownPosition(event) {
        this.startX = event.clientX - this.elementPosition.left;
        this.startY = event.clientY - this.elementPosition.top;
    }
    moveLeft(index, event) {
        const touches = event.touches;
        if (touches) {
            return touches[index].clientX - this.elementPosition.left;
        }
        else {
            return event.clientX - this.elementPosition.left;
        }
    }
    moveTop(index, event) {
        const touches = event.touches;
        if (touches) {
            return touches[index].clientY - this.elementPosition.top;
        }
        else {
            return event.clientY - this.elementPosition.top;
        }
    }
    detectTouchScreen() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var mq = function (query) {
            return window.matchMedia(query).matches;
        };
        if (('ontouchstart' in window)) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }
    /* Public properties and methods */
    on(event, handler) {
        if (event) {
            this.handlers[event] = handler;
        }
    }
}

const IvyPinchDefaultProperties = {
    doubleTap: true,
    doubleTapScale: 2,
    transitionDuration: 200,
    limitZoom: "original image size",
    minScale: 0,
    minPanScale: 1.0001,
    wheel: true,
    wheelZoomFactor: 0.2,
    draggableImage: true,
    listeners: 'auto',
    zoomControlScale: 2
};
class IvyPinch {
    constructor(properties) {
        this.i = 0;
        this.scale = 1;
        this.initialScale = 1;
        this.startX = 0;
        this.startY = 0;
        this.moveX = 0;
        this.moveY = 0;
        this.initialMoveX = 0;
        this.initialMoveY = 0;
        this.moveXC = 0;
        this.moveYC = 0;
        this.lastTap = 0;
        this.draggingMode = false;
        this.distance = 0;
        this.doubleTapTimeout = 0;
        this.initialDistance = 0;
        this.events = {};
        this.maxHtmlContentScale = 3;
        this.maxScale = 3;
        /* Touchstart */
        this.handleTouchstart = (event) => {
            this.getElementPosition();
            if (this.eventType === undefined) {
                this.getTouchstartPosition(event);
            }
        };
        /* Touchend */
        this.handleTouchend = (event) => {
            /* touchend */
            if (event.type === "touchend") {
                this.i = 0;
                this.draggingMode = false;
                const touches = event.touches;
                // Min scale
                if (this.scale < 1) {
                    this.scale = 1;
                }
                // Auto Zoom Out
                if (this.properties.autoZoomOut && this.eventType === 'pinch') {
                    this.scale = 1;
                }
                // Align image
                if (this.eventType === 'pinch' ||
                    this.eventType === 'pan' && this.scale > this.properties.minPanScale) {
                    this.alignImage();
                }
                // Update initial values
                if (this.eventType === 'pinch' ||
                    this.eventType === 'pan' ||
                    this.eventType === 'horizontal-swipe' ||
                    this.eventType === 'vertical-swipe') {
                    this.updateInitialValues();
                }
                this.eventType = 'touchend';
                if (touches && touches.length === 0) {
                    this.eventType = undefined;
                }
            }
            /* mouseup */
            if (event.type === "mouseup") {
                this.draggingMode = false;
                this.updateInitialValues();
                this.eventType = undefined;
            }
        };
        /*
         * Handlers
         */
        this.handlePan = (event) => {
            if (this.scale < this.properties.minPanScale || this.properties.disablePan) {
                return;
            }
            event.preventDefault();
            const { clientX, clientY } = this.getClientPosition(event);
            if (!this.eventType) {
                this.startX = clientX - this.elementPosition.left;
                this.startY = clientY - this.elementPosition.top;
            }
            this.eventType = 'pan';
            this.moveX = this.initialMoveX + (this.moveLeft(event, 0) - this.startX);
            this.moveY = this.initialMoveY + (this.moveTop(event, 0) - this.startY);
            if (this.properties.limitPan) {
                this.limitPanY();
                this.limitPanX();
            }
            /* mousemove */
            if (event.type === "mousemove" && this.scale > this.properties.minPanScale) {
                this.centeringImage();
            }
            this.transformElement(0);
        };
        this.handleDoubleTap = (event) => {
            this.toggleZoom(event);
            return;
        };
        this.handlePinch = (event) => {
            event.preventDefault();
            if (this.eventType === undefined || this.eventType === 'pinch') {
                const touches = event.touches;
                if (!this.eventType) {
                    this.initialDistance = this.getDistance(touches);
                    const moveLeft0 = this.moveLeft(event, 0);
                    const moveLeft1 = this.moveLeft(event, 1);
                    const moveTop0 = this.moveTop(event, 0);
                    const moveTop1 = this.moveTop(event, 1);
                    this.moveXC = ((moveLeft0 + moveLeft1) / 2) - this.initialMoveX;
                    this.moveYC = ((moveTop0 + moveTop1) / 2) - this.initialMoveY;
                }
                this.eventType = 'pinch';
                this.distance = this.getDistance(touches);
                this.scale = this.initialScale * (this.distance / this.initialDistance);
                this.moveX = this.initialMoveX - (((this.distance / this.initialDistance) * this.moveXC) - this.moveXC);
                this.moveY = this.initialMoveY - (((this.distance / this.initialDistance) * this.moveYC) - this.moveYC);
                this.handleLimitZoom();
                if (this.properties.limitPan) {
                    this.limitPanY();
                    this.limitPanX();
                }
                this.transformElement(0);
            }
        };
        this.handleWheel = (event) => {
            event.preventDefault();
            let wheelZoomFactor = this.properties.wheelZoomFactor || 0;
            let zoomFactor = event.deltaY < 0 ? (wheelZoomFactor) : (-wheelZoomFactor);
            let newScale = this.initialScale + zoomFactor;
            /* Round value */
            if (newScale < (1 + wheelZoomFactor)) {
                newScale = 1;
            }
            else if (newScale < this.maxScale && newScale > this.maxScale - wheelZoomFactor) {
                newScale = this.maxScale;
            }
            if (newScale < 1 || newScale > this.maxScale) {
                return;
            }
            if (newScale === this.scale) {
                return;
            }
            this.getElementPosition();
            this.scale = newScale;
            /* Get cursor position over image */
            let xCenter = (event.clientX - this.elementPosition.left) - this.initialMoveX;
            let yCenter = (event.clientY - this.elementPosition.top) - this.initialMoveY;
            this.setZoom({
                scale: newScale,
                center: [xCenter, yCenter]
            });
        };
        this.handleResize = (_event) => {
            this.setAutoHeight();
        };
        this.element = properties.element;
        this.elementTarget = this.element.querySelector('*').tagName;
        this.parentElement = this.element.parentElement;
        this.properties = Object.assign({}, IvyPinchDefaultProperties, properties);
        this.pollLimitZoom();
        this.touches = new Touches({
            element: properties.element,
            listeners: this.properties.listeners,
            resize: this.properties.autoHeight
        });
        /* Init */
        this.setBasicStyles();
        /*
         * Listeners
         */
        this.touches.on('touchstart', this.handleTouchstart);
        this.touches.on('touchend', this.handleTouchend);
        this.touches.on('mousedown', this.handleTouchstart);
        this.touches.on('mouseup', this.handleTouchend);
        this.touches.on('pan', this.handlePan);
        this.touches.on('mousemove', this.handlePan);
        this.touches.on('pinch', this.handlePinch);
        if (this.properties.wheel) {
            this.touches.on('wheel', this.handleWheel);
        }
        if (this.properties.doubleTap) {
            this.touches.on('double-tap', this.handleDoubleTap);
        }
        if (this.properties.autoHeight) {
            this.touches.on('resize', this.handleResize);
        }
    }
    handleLimitZoom() {
        const limitZoom = this.maxScale;
        const minScale = this.properties.minScale || 0;
        if (this.scale > limitZoom || this.scale <= minScale) {
            const imageWidth = this.getImageWidth();
            const imageHeight = this.getImageHeight();
            const enlargedImageWidth = imageWidth * this.scale;
            const enlargedImageHeight = imageHeight * this.scale;
            const moveXRatio = this.moveX / (enlargedImageWidth - imageWidth);
            const moveYRatio = this.moveY / (enlargedImageHeight - imageHeight);
            if (this.scale > limitZoom) {
                this.scale = limitZoom;
            }
            if (this.scale <= minScale) {
                this.scale = minScale;
            }
            const newImageWidth = imageWidth * this.scale;
            const newImageHeight = imageHeight * this.scale;
            this.moveX = -Math.abs((moveXRatio * (newImageWidth - imageWidth)));
            this.moveY = -Math.abs((-moveYRatio * (newImageHeight - imageHeight)));
        }
    }
    getLimitZoom() {
        if (this.properties.limitZoom === "original image size") {
            if (this.elementTarget === "IMG") {
                let img = this.element.getElementsByTagName("img")[0];
                if (img.naturalWidth && img.offsetWidth) {
                    this.maxScale = img.naturalWidth / img.offsetWidth;
                    return this.maxScale;
                }
            }
            else {
                this.maxScale = this.maxHtmlContentScale;
                return this.maxScale;
            }
        }
        else {
            this.maxScale = this.properties.limitZoom || 0;
            return this.maxScale;
        }
    }
    moveLeft(event, index = 0) {
        const clientX = this.getClientPosition(event, index).clientX;
        return clientX - this.elementPosition.left;
    }
    moveTop(event, index = 0) {
        const clientY = this.getClientPosition(event, index).clientY;
        return clientY - this.elementPosition.top;
    }
    /*
     * Detection
     */
    centeringImage() {
        const img = this.element.getElementsByTagName(this.elementTarget)[0];
        const initialMoveX = this.moveX;
        const initialMoveY = this.moveY;
        if (this.moveY > 0) {
            this.moveY = 0;
        }
        if (this.moveX > 0) {
            this.moveX = 0;
        }
        if (img) {
            this.limitPanY();
            this.limitPanX();
        }
        if (img && this.scale < 1) {
            if (this.moveX < this.element.offsetWidth * (1 - this.scale)) {
                this.moveX = this.element.offsetWidth * (1 - this.scale);
            }
        }
        return initialMoveX !== this.moveX || initialMoveY !== this.moveY;
    }
    limitPanY() {
        const imgHeight = this.getImageHeight();
        const scaledImgHeight = imgHeight * this.scale;
        const parentHeight = this.parentElement.offsetHeight;
        const elementHeight = this.element.offsetHeight;
        if (scaledImgHeight < parentHeight) {
            this.moveY = (parentHeight - elementHeight * this.scale) / 2;
        }
        else {
            const imgOffsetTop = ((imgHeight - elementHeight) * this.scale) / 2;
            if (this.moveY > imgOffsetTop) {
                this.moveY = imgOffsetTop;
            }
            else if ((scaledImgHeight + Math.abs(imgOffsetTop) - parentHeight) + this.moveY < 0) {
                this.moveY = -(scaledImgHeight + Math.abs(imgOffsetTop) - parentHeight);
            }
        }
    }
    limitPanX() {
        const imgWidth = this.getImageWidth();
        const scaledImgWidth = imgWidth * this.scale;
        const parentWidth = this.parentElement.offsetWidth;
        const elementWidth = this.element.offsetWidth;
        if (scaledImgWidth < parentWidth) {
            this.moveX = (parentWidth - elementWidth * this.scale) / 2;
        }
        else {
            const imgOffsetLeft = ((imgWidth - elementWidth) * this.scale) / 2;
            if (this.moveX > imgOffsetLeft) {
                this.moveX = imgOffsetLeft;
            }
            else if ((scaledImgWidth + Math.abs(imgOffsetLeft) - parentWidth) + this.moveX < 0) {
                this.moveX = -(imgWidth * this.scale + Math.abs(imgOffsetLeft) - parentWidth);
            }
        }
    }
    setBasicStyles() {
        this.element.style.display = 'flex';
        this.element.style.alignItems = 'center';
        this.element.style.justifyContent = 'center';
        this.element.style.transformOrigin = '0 0';
        this.setImageSize();
        this.setDraggableImage();
    }
    removeBasicStyles() {
        this.element.style.display = '';
        this.element.style.alignItems = '';
        this.element.style.justifyContent = '';
        this.element.style.transformOrigin = '';
        this.removeImageSize();
        this.removeDraggableImage();
    }
    setDraggableImage() {
        const imgElement = this.getImageElement();
        if (imgElement) {
            imgElement.draggable = this.properties.draggableImage;
        }
    }
    removeDraggableImage() {
        const imgElement = this.getImageElement();
        if (imgElement) {
            imgElement.draggable = true;
        }
    }
    setImageSize() {
        const imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (imgElement.length) {
            imgElement[0].style.maxWidth = '100%';
            imgElement[0].style.maxHeight = '100%';
            this.setAutoHeight();
        }
    }
    setAutoHeight() {
        const imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (!this.properties.autoHeight || !imgElement.length) {
            return;
        }
        const imgNaturalWidth = imgElement[0].getAttribute("width");
        const imgNaturalHeight = imgElement[0].getAttribute("height");
        const sizeRatio = imgNaturalWidth / imgNaturalHeight;
        const parentWidth = this.parentElement.offsetWidth;
        imgElement[0].style.maxHeight = parentWidth / sizeRatio + "px";
    }
    removeImageSize() {
        const imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (imgElement.length) {
            imgElement[0].style.maxWidth = '';
            imgElement[0].style.maxHeight = '';
        }
    }
    getElementPosition() {
        this.elementPosition = this.element.parentElement.getBoundingClientRect();
    }
    getTouchstartPosition(event) {
        const { clientX, clientY } = this.getClientPosition(event);
        this.startX = clientX - this.elementPosition.left;
        this.startY = clientY - this.elementPosition.top;
    }
    getClientPosition(event, index = 0) {
        let clientX;
        let clientY;
        if (event.type === "touchstart" || event.type === "touchmove") {
            clientX = event.touches[index].clientX;
            clientY = event.touches[index].clientY;
        }
        if (event.type === "mousedown" || event.type === "mousemove") {
            clientX = event.clientX;
            clientY = event.clientY;
        }
        return {
            clientX,
            clientY
        };
    }
    resetScale() {
        this.scale = 1;
        this.moveX = 0;
        this.moveY = 0;
        this.updateInitialValues();
        this.transformElement(this.properties.transitionDuration);
    }
    updateInitialValues() {
        this.initialScale = this.scale;
        this.initialMoveX = this.moveX;
        this.initialMoveY = this.moveY;
    }
    getDistance(touches) {
        return Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2));
    }
    getImageHeight() {
        const img = this.element.getElementsByTagName(this.elementTarget)[0];
        return img.offsetHeight;
    }
    getImageWidth() {
        const img = this.element.getElementsByTagName(this.elementTarget)[0];
        return img.offsetWidth;
    }
    transformElement(duration) {
        this.element.style.transition = "all " + duration + "ms";
        this.element.style.transform = "matrix(" + Number(this.scale) + ", 0, 0, " + Number(this.scale) + ", " + Number(this.moveX) + ", " + Number(this.moveY) + ")";
    }
    isTouchScreen() {
        const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        if (('ontouchstart' in window)) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return this.getMatchMedia(query);
    }
    getMatchMedia(query) {
        return window.matchMedia(query).matches;
    }
    isDragging() {
        if (this.properties.disablePan) {
            return false;
        }
        const imgHeight = this.getImageHeight();
        const imgWidth = this.getImageWidth();
        if (this.scale > 1) {
            return imgHeight * this.scale > this.parentElement.offsetHeight ||
                imgWidth * this.scale > this.parentElement.offsetWidth;
        }
        if (this.scale === 1) {
            return imgHeight > this.parentElement.offsetHeight ||
                imgWidth > this.parentElement.offsetWidth;
        }
    }
    pollLimitZoom() {
        let poll = setInterval(() => {
            if (this.getLimitZoom()) {
                clearInterval(poll);
            }
        }, 10);
    }
    getImageElement() {
        const imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (imgElement.length) {
            return imgElement[0];
        }
    }
    toggleZoom(event = false) {
        if (this.initialScale === 1) {
            if (event && event.changedTouches) {
                if (this.properties.doubleTapScale === undefined) {
                    return;
                }
                const changedTouches = event.changedTouches;
                this.scale = this.initialScale * this.properties.doubleTapScale;
                this.moveX = this.initialMoveX - (changedTouches[0].clientX - this.elementPosition.left) * (this.properties.doubleTapScale - 1);
                this.moveY = this.initialMoveY - (changedTouches[0].clientY - this.elementPosition.top) * (this.properties.doubleTapScale - 1);
            }
            else {
                let zoomControlScale = this.properties.zoomControlScale || 0;
                this.scale = this.initialScale * (zoomControlScale + 1);
                this.moveX = this.initialMoveX - this.element.offsetWidth * (this.scale - 1) / 2;
                this.moveY = this.initialMoveY - this.element.offsetHeight * (this.scale - 1) / 2;
            }
            this.centeringImage();
            this.updateInitialValues();
            this.transformElement(this.properties.transitionDuration);
        }
        else {
            this.resetScale();
        }
    }
    setZoom(properties) {
        this.scale = properties.scale;
        let xCenter;
        let yCenter;
        let visibleAreaWidth = this.element.offsetWidth;
        let visibleAreaHeight = this.element.offsetHeight;
        let scalingPercent = (visibleAreaWidth * this.scale) / (visibleAreaWidth * this.initialScale);
        if (properties.center) {
            xCenter = properties.center[0];
            yCenter = properties.center[1];
        }
        else {
            xCenter = visibleAreaWidth / 2 - this.initialMoveX;
            yCenter = visibleAreaHeight / 2 - this.initialMoveY;
        }
        this.moveX = this.initialMoveX - ((scalingPercent * xCenter) - xCenter);
        this.moveY = this.initialMoveY - ((scalingPercent * yCenter) - yCenter);
        this.centeringImage();
        this.updateInitialValues();
        this.transformElement(this.properties.transitionDuration);
    }
    alignImage() {
        const isMoveChanged = this.centeringImage();
        if (isMoveChanged) {
            this.updateInitialValues();
            this.transformElement(this.properties.transitionDuration);
        }
    }
    destroy() {
        this.removeBasicStyles();
        this.touches.destroy();
    }
}

class PinchZoomComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.transitionDuration = 200;
        this.doubleTap = true;
        this.doubleTapScale = 2;
        this.autoZoomOut = false;
        this.disabled = false;
        this.zoomControlScale = 1;
        this.backgroundColor = "rgba(0,0,0,0.85)";
        this.minPanScale = 1.0001;
        this.minScale = 0;
        this.listeners = 'mouse and touch';
        this.wheel = true;
        this.autoHeight = false;
        this.wheelZoomFactor = 0.2;
        this.draggableImage = false;
        this.applyOptionsDefault(defaultProperties, {});
    }
    set properties(value) {
        if (value) {
            this._properties = value;
        }
    }
    get properties() {
        return this._properties;
    }
    get hostOverflow() {
        return this.properties['overflow'];
    }
    get hostBackgroundColor() {
        return this.properties['backgroundColor'];
    }
    get isTouchScreen() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var mq = function (query) {
            return window.matchMedia(query).matches;
        };
        if (('ontouchstart' in window)) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }
    get isDragging() {
        return this.pinchZoom.isDragging();
    }
    get isDisabled() {
        return this.properties['disabled'];
    }
    get scale() {
        return this.pinchZoom.scale;
    }
    get isZoomedIn() {
        return this.scale > 1;
    }
    ngOnInit() {
        this.initPinchZoom();
        /* Calls the method until the image size is available */
        this.pollLimitZoom();
    }
    ngOnChanges(changes) {
        let changedOptions = this.getProperties(changes);
        changedOptions = this.renameProperties(changedOptions);
        this.applyOptionsDefault(defaultProperties, changedOptions);
    }
    ngOnDestroy() {
        this.destroy();
    }
    initPinchZoom() {
        if (this.properties['disabled']) {
            return;
        }
        this.properties['element'] = this.elementRef.nativeElement.querySelector('.pinch-zoom-content');
        this.pinchZoom = new IvyPinch(this.properties);
    }
    getProperties(changes) {
        let properties = {};
        for (var prop in changes) {
            if (prop !== 'properties') {
                properties[prop] = changes[prop].currentValue;
            }
            if (prop === 'properties') {
                properties = changes[prop].currentValue;
            }
        }
        return properties;
    }
    renameProperties(options) {
        for (var prop in options) {
            if (backwardCompatibilityProperties[prop]) {
                options[backwardCompatibilityProperties[prop]] = options[prop];
                delete options[prop];
            }
        }
        return options;
    }
    applyOptionsDefault(defaultOptions, options) {
        this.properties = Object.assign({}, defaultOptions, options);
    }
    toggleZoom() {
        this.pinchZoom.toggleZoom();
    }
    isControl() {
        if (this.isDisabled) {
            return false;
        }
        if (this.properties['disableZoomControl'] === "disable") {
            return false;
        }
        if (this.isTouchScreen && this.properties['disableZoomControl'] === "auto") {
            return false;
        }
        return true;
    }
    pollLimitZoom() {
        this.pinchZoom.pollLimitZoom();
    }
    destroy() {
        this.pinchZoom.destroy();
    }
}
PinchZoomComponent.ɵfac = function PinchZoomComponent_Factory(t) { return new (t || PinchZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
PinchZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PinchZoomComponent, selectors: [["pinch-zoom"], ["", "pinch-zoom", ""]], hostVars: 4, hostBindings: function PinchZoomComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", ctx.hostOverflow)("background-color", ctx.hostBackgroundColor);
    } }, inputs: { transitionDuration: ["transition-duration", "transitionDuration"], doubleTap: ["double-tap", "doubleTap"], doubleTapScale: ["double-tap-scale", "doubleTapScale"], autoZoomOut: ["auto-zoom-out", "autoZoomOut"], disabled: "disabled", zoomControlScale: "zoomControlScale", backgroundColor: "backgroundColor", minPanScale: "minPanScale", minScale: "minScale", listeners: "listeners", wheel: "wheel", autoHeight: "autoHeight", wheelZoomFactor: "wheelZoomFactor", draggableImage: "draggableImage", properties: "properties", limitZoom: ["limit-zoom", "limitZoom"], disablePan: "disablePan", overflow: "overflow", disableZoomControl: "disableZoomControl", limitPan: "limitPan" }, exportAs: ["pinchZoom"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 3, consts: [[1, "pinch-zoom-content"], ["class", "pz-zoom-button pz-zoom-control-position-bottom", 3, "pz-zoom-button-out", "click", 4, "ngIf"], [1, "pz-zoom-button", "pz-zoom-control-position-bottom", 3, "click"]], template: function PinchZoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PinchZoomComponent_div_2_Template, 1, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pz-dragging", ctx.isDragging);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControl());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%]{display:block;overflow:hidden;position:relative}.pinch-zoom-content[_ngcontent-%COMP%]{height:inherit}.pz-dragging[_ngcontent-%COMP%]{cursor:all-scroll}.pz-zoom-button[_ngcontent-%COMP%]{-webkit-user-select:none;background-color:rgba(0,0,0,.8);background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6IiBpZD0ic3ZnXzEiIGNsYXNzPSIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjxwYXRoIGQ9Ik0xMiAxMGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxeiIgaWQ9InN2Z18zIiBjbGFzcz0iIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9zdmc+),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6TTcgOWg1djFIN3oiIGlkPSJzdmdfMiIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==);background-position:50%,-1000px;background-repeat:no-repeat,no-repeat;background-size:40px;border-radius:4px;color:#fff;cursor:pointer;height:56px;opacity:.5;position:absolute;transition:opacity .1s;user-select:none;width:56px;z-index:1000}.pz-zoom-button-out[_ngcontent-%COMP%]{background-position:-1000px,50%}.pz-zoom-button[_ngcontent-%COMP%]:hover{opacity:.7}.pz-zoom-button.pz-zoom-control-position-right[_ngcontent-%COMP%]{margin-top:-28px;right:16px;top:50%}.pz-zoom-button.pz-zoom-control-position-right-bottom[_ngcontent-%COMP%]{bottom:32px;right:16px}.pz-zoom-button.pz-zoom-control-position-bottom[_ngcontent-%COMP%]{bottom:16px;left:50%;margin-left:-28px}.pz-zoom-control[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.8);border-radius:4px;overflow:hidden;position:absolute}.pz-zoom-control.pz-zoom-control-position-right[_ngcontent-%COMP%]{margin-top:-48px;right:16px;top:50%}.pz-zoom-control.pz-zoom-control-position-right-bottom[_ngcontent-%COMP%]{bottom:32px;right:16px}.pz-zoom-control.pz-zoom-control-position-bottom[_ngcontent-%COMP%]{bottom:16px;left:50%;margin-left:-48px}.pz-zoom-in[_ngcontent-%COMP%], .pz-zoom-out[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;cursor:pointer;height:48px;opacity:1;width:48px}.pz-zoom-in[_ngcontent-%COMP%]:hover, .pz-zoom-out[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,100%,.2)}.pz-zoom-control-position-bottom[_ngcontent-%COMP%]   .pz-zoom-in[_ngcontent-%COMP%], .pz-zoom-control-position-bottom[_ngcontent-%COMP%]   .pz-zoom-out[_ngcontent-%COMP%]{float:right}.pz-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}.pz-disabled[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,100%,0)}.pz-zoom-in[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48cGF0aCBkPSJNLTE1LjgzNjczNDQyMDQ2MTY1Myw0NC41MzU0MDkzMDY3MTAxOCBoNTguMjA0MDgwODI3NTkzMDkgdi02LjU3NjIyNjcyMzM2OTIyMTUgSC0xNS44MzY3MzQ0MjA0NjE2NTMgeiIgZmlsbD0ibm9uZSIgaWQ9InN2Z18yIiBjbGFzcz0iIiBzdHJva2U9Im5vbmUiLz48L2c+PC9zdmc+)}.pz-zoom-out[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==)}"] });
PinchZoomComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
PinchZoomComponent.propDecorators = {
    properties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['properties',] }],
    transitionDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['transition-duration',] }],
    doubleTap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['double-tap',] }],
    doubleTapScale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['double-tap-scale',] }],
    autoZoomOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['auto-zoom-out',] }],
    limitZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['limit-zoom',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    disablePan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    overflow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    zoomControlScale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disableZoomControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    limitPan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minPanScale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minScale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listeners: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    wheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    wheelZoomFactor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    draggableImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hostOverflow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.overflow',] }],
    hostBackgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.background-color',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinchZoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pinch-zoom, [pinch-zoom]',
                exportAs: 'pinchZoom',
                template: "<div class=\"pinch-zoom-content\" [class.pz-dragging]=\"isDragging\">\n\t<ng-content></ng-content>\n</div>\n\n<!-- Control: one button -->\n<div class=\"pz-zoom-button pz-zoom-control-position-bottom\" \n\t[class.pz-zoom-button-out]=\"isZoomedIn\" \n\t*ngIf=\"isControl()\" \n\t(click)=\"toggleZoom()\"></div>",
                styles: [":host{display:block;overflow:hidden;position:relative}.pinch-zoom-content{height:inherit}.pz-dragging{cursor:all-scroll}.pz-zoom-button{-webkit-user-select:none;background-color:rgba(0,0,0,.8);background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6IiBpZD0ic3ZnXzEiIGNsYXNzPSIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjxwYXRoIGQ9Ik0xMiAxMGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxeiIgaWQ9InN2Z18zIiBjbGFzcz0iIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9zdmc+),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6TTcgOWg1djFIN3oiIGlkPSJzdmdfMiIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==);background-position:50%,-1000px;background-repeat:no-repeat,no-repeat;background-size:40px;border-radius:4px;color:#fff;cursor:pointer;height:56px;opacity:.5;position:absolute;transition:opacity .1s;user-select:none;width:56px;z-index:1000}.pz-zoom-button-out{background-position:-1000px,50%}.pz-zoom-button:hover{opacity:.7}.pz-zoom-button.pz-zoom-control-position-right{margin-top:-28px;right:16px;top:50%}.pz-zoom-button.pz-zoom-control-position-right-bottom{bottom:32px;right:16px}.pz-zoom-button.pz-zoom-control-position-bottom{bottom:16px;left:50%;margin-left:-28px}.pz-zoom-control{background-color:rgba(0,0,0,.8);border-radius:4px;overflow:hidden;position:absolute}.pz-zoom-control.pz-zoom-control-position-right{margin-top:-48px;right:16px;top:50%}.pz-zoom-control.pz-zoom-control-position-right-bottom{bottom:32px;right:16px}.pz-zoom-control.pz-zoom-control-position-bottom{bottom:16px;left:50%;margin-left:-48px}.pz-zoom-in,.pz-zoom-out{background-position:50%;background-repeat:no-repeat;cursor:pointer;height:48px;opacity:1;width:48px}.pz-zoom-in:hover,.pz-zoom-out:hover{background-color:hsla(0,0%,100%,.2)}.pz-zoom-control-position-bottom .pz-zoom-in,.pz-zoom-control-position-bottom .pz-zoom-out{float:right}.pz-disabled{cursor:default;opacity:.5}.pz-disabled:hover{background-color:hsla(0,0%,100%,0)}.pz-zoom-in{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48cGF0aCBkPSJNLTE1LjgzNjczNDQyMDQ2MTY1Myw0NC41MzU0MDkzMDY3MTAxOCBoNTguMjA0MDgwODI3NTkzMDkgdi02LjU3NjIyNjcyMzM2OTIyMTUgSC0xNS44MzY3MzQ0MjA0NjE2NTMgeiIgZmlsbD0ibm9uZSIgaWQ9InN2Z18yIiBjbGFzcz0iIiBzdHJva2U9Im5vbmUiLz48L2c+PC9zdmc+)}.pz-zoom-out{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==)}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { transitionDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['transition-duration']
        }], doubleTap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['double-tap']
        }], doubleTapScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['double-tap-scale']
        }], autoZoomOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['auto-zoom-out']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
        }], zoomControlScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minPanScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listeners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], wheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], wheelZoomFactor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], draggableImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], properties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['properties']
        }], hostOverflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.overflow']
        }], hostBackgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.background-color']
        }], limitZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['limit-zoom']
        }], disablePan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], overflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableZoomControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], limitPan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class PinchZoomModule {
}
PinchZoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PinchZoomModule });
PinchZoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PinchZoomModule_Factory(t) { return new (t || PinchZoomModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PinchZoomModule, { declarations: function () { return [PinchZoomComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [PinchZoomComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinchZoomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    PinchZoomComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    PinchZoomComponent
                ],
                providers: [],
                bootstrap: [],
                entryComponents: [
                    PinchZoomComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-pinch-zoom
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-pinch-zoom.js.map

/***/ }),

/***/ "fBVL":
/*!***********************************************!*\
  !*** ./src/app/pdf-reader/pdf-reader.page.ts ***!
  \***********************************************/
/*! exports provided: PdfReaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfReaderPage", function() { return PdfReaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_reader_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf-reader.page.html */ "rp8r");
/* harmony import */ var _pdf_reader_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf-reader.page.scss */ "QB7D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _props_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../props.service */ "6COz");





let PdfReaderPage = class PdfReaderPage {
    constructor(p) {
        this.p = p;
        this.qrs = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [3, 4, 32, 35, 87, 107, 114],
            [2, 3, 15, 21, 44, 94, 102, 113, 117],
            [2, 3, 11, 18, 37, 44, 49, 59, 67, 74, 82, 102],
            [1, 2, 3, 4, 6, 8, 10, 11, 32, 42, 46, 75, 83, 103, 110, 111, 115, 125, 134, 135],
            [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 21, 22, 35, 83, 91, 96, 101, 109, 129, 136, 162],
            [1, 2, 3, 7, 8, 17, 18, 19, 29, 48, 51, 55, 73, 93, 98]
        ];
        this.images = [];
        this.sliderOpt = {
            zoom: {
                maxRatio: 10,
            },
        };
    }
    ngOnInit() {
        this.images = this.getImages();
    }
    getImages() {
        const pagesLocation = this.p.rootPublishesSite + this.p.pdfReading + '/pages/Page';
        const result = [];
        for (let x = 1; x <= this.p.getPagesCount(this.p.pdfReading); x++) {
            result.push(pagesLocation + x + '.jpg');
        }
        return result;
    }
    isQR(issue, ind) {
        const page = ind + 1;
        return this.p.pdfReading === issue && this.qrs[this.p.pdfReading - 1].includes(page);
    }
    isQRE(ind) {
        const page = ind + 1;
        return this.p.pdfReading === 10 && page === 3;
    }
    openQr(ind, lang) {
        const page = ind + 1;
        switch (this.p.pdfReading) {
            case 11: {
                switch (page) {
                    case 3: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://я.tv/#/watch?video=snr24_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=snr24_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=snr24_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 4: {
                        switch (lang) {
                            case 'cn': {
                                window.open('https://eurasian.press/#/g-cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://eurasian.press/#/g-en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 6: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://xn--41a.tv/#/watch?video=allrum_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://xn--41a.tv/#/watch?video=allrum_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://xn--41a.tv/#/watch?video=allrum_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 8: {
                        switch (lang) {
                            case 'ru': {
                                window.open('http://я.tv/#/watch?video=robots_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('http://я.tv/#/watch?video=robots_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('http://я.tv/#/watch?video=robots_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 9: {
                        switch (lang) {
                            case 'ru': {
                                window.open('http://я.tv/#/watch?video=robots_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('http://я.tv/#/watch?video=robots_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('http://я.tv/#/watch?video=robots_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 10: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://я.tv/#/watch?video=mindf_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=mindf_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=mindf_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 32: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://я.tv/#/watch?video=kk_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=kk_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=kk_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 42: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://я.tv/#/watch?video=ww1_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=ww1_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=ww1_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 46: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://я.tv/#/watch?video=ww2_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=ww2_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=ww2_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 75: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://я.tv/#/watch?video=ww3_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=ww3_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=ww3_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 83: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://я.tv/#/watch?video=ww4_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=ww4_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=ww4_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 110: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://я.tv/#/watch?video=ww5_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=ww5_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=ww5_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 111: {
                        switch (lang) {
                            case 'ru': {
                                window.open('http://я.tv/#/watch?video=galanz_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('http://я.tv/#/watch?video=galanz_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('http://я.tv/#/watch?video=galanz_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 115: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://я.tv/#/watch?video=ww6_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=ww6_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=ww6_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 125: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://я.tv/#/watch?video=ww7_ru', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=ww7_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=ww7_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                }
                break;
            }
            case 10: {
                switch (page) {
                    case 3: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://www.youtube.com/watch?v=qxDrQGoMtEM', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=shh_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=shh_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 11: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://www.youtube.com/watch?v=DrqFQPNz2J4', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=chdr_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=chdr_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 18: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://tvzvezda.ru/schedule/films-online/201805151040-vf2t.htm/', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://xn--41a.tv/#/watch?video=10_1_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://xn--41a.tv/#/watch?video=10_1_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 37: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://tvzvezda.ru/schedule/films-online/201805161027-ur9x.htm', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=10_2_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=10_2_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 44: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://tvzvezda.ru/schedule/films-online/201805171024-hhdt.htm/', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=10_3_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=10_3_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 49: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://tvzvezda.ru/schedule/films-online/201805181036-tjx8.htm/', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=10_4_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=10_4_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 59: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://tvzvezda.ru/schedule/films-online/201805221036-8z7w.htm', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=10_5_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=10_5_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 67: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://tvzvezda.ru/schedule/films-online/201805231040-c9gr.htm/', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=10_6_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=10_6_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 74: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://tvzvezda.ru/schedule/films-online/201805251026-tf8x.htm/', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=10_7_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=10_7_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 82: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://tvzvezda.ru/schedule/films-online/201805251039-k4t5.htm/', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=10_8_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=10_8_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                    case 102: {
                        switch (lang) {
                            case 'ru': {
                                window.open('https://www.youtube.com/watch?v=UWxeVyXqgLs', '_blank');
                                break;
                            }
                            case 'cn': {
                                window.open('https://я.tv/#/watch?video=wsbs_cn', '_blank');
                                break;
                            }
                            case 'en': {
                                window.open('https://я.tv/#/watch?video=wsbs_en', '_blank');
                                break;
                            }
                        }
                        break;
                    }
                }
            }
        }
    }
    openPBP() {
        window.open('https://yapbp.org', '_blank');
    }
    openPromo() {
        window.open('http://www.eurasian.press', '_blank');
    }
    hideMask(ind) {
        const page = ind + 1;
        const e = [];
        e.push(this.p.pdfReading === 11 && page === 2);
        e.push(this.p.pdfReading === 10 && page === 2);
        e.push(this.p.pdfReading === 9 && page === 2);
        e.push(this.p.pdfReading === 9 && page === 117);
        return e.some(x => x === true);
    }
    openQr9(ind) {
        const page = ind + 1;
        switch (page) {
            case 3: {
                window.open('http://kremlin.ru/events/president/transcripts/statements/64447/videos#', '_blank');
                break;
            }
            case 15: {
                window.open('https://youtu.be/60In5DUEXAQ', '_blank');
                break;
            }
            case 21: {
                window.open('https://xn--41a.tv/#/watch?video=voina_i_mif_21_titr_eng-00_x264.mp4', '_blank');
                break;
            }
            case 44: {
                window.open('https://www.ntv.ru/video/1969601/#ts=12', '_blank');
                break;
            }
            case 94: {
                window.open('https://youtu.be/8HZ4DnVfWYQ', '_blank');
                break;
            }
            case 102: {
                window.open('https://www.globalprice.info/?p=statistics/bigmac', '_blank');
                break;
            }
            case 113: {
                window.open('https://youtu.be/v1NBNioUzME', '_blank');
                break;
            }
        }
    }
    openPromoQr(url) {
        window.open(url, '_blank');
    }
};
PdfReaderPage.ctorParameters = () => [
    { type: _props_service__WEBPACK_IMPORTED_MODULE_4__["PropsService"] }
];
PdfReaderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pdf-reader',
        template: _raw_loader_pdf_reader_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pdf_reader_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PdfReaderPage);



/***/ }),

/***/ "rp8r":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pdf-reader/pdf-reader.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button [text]=\"p.tr('Go Back')\" class=\"text-white\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <pinch-zoom [limit-zoom]=\"10\">\n    <ion-list>\n      <ion-item class=\"image\" *ngFor=\"let img of images; let ind = index\">\n        <ion-img [src]=\"img\"></ion-img>\n        <div class=\"page-mask\" *ngIf=\"isQR(9, ind)\">\n          <div class=\"left-page-mask\">\n\n          </div>\n          <div class=\"sub-mask-promo\" *ngIf=\"(ind + 1) == 2\">\n            <div></div><div></div><div></div>\n            <div class=\"cursor-pointer\" (click)=\"openPromo()\"></div>\n          </div>\n          <div class=\"pbp-mask-promo-9\" *ngIf=\"(ind + 1) == 117\">\n            <div></div><div></div><div></div>\n            <div class=\"cursor-pointer\" (click)=\"openPBP()\"></div>\n          </div>\n          <div class=\"right-page-mask-9\" *ngIf=\"!hideMask(ind)\">\n            <div></div><div></div><div></div>\n            <div class=\"cursor-pointer\" (click)=\"openQr9(ind)\"></div>\n          </div>\n        </div>\n        <div class=\"page-mask\" *ngIf=\"isQR(10, ind)\">\n          <div class=\"left-page-mask\">\n            <div class=\"sub-mask-pbp\" *ngIf=\"ind == 58\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPBP()\"></div>\n            </div>\n          </div>\n          <div class=\"sub-mask-promo\" *ngIf=\"(ind + 1) == 2\">\n            <div></div><div></div><div></div>\n            <div class=\"cursor-pointer\" (click)=\"openPromo()\"></div>\n          </div>\n          <div class=\"right-page-mask\" [class.right-page-mask-e]=\"isQRE(ind)\" *ngIf=\"!hideMask(ind)\">\n            <div></div><div></div><div></div><div></div><div></div>\n            <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n            <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n            <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n          </div>\n        </div>\n\n\n        <div class=\"page-mask\" *ngIf=\"isQR(11, ind)\">\n          <div class=\"l-m\">\n            <div class=\"first-page-promo\" *ngIf=\"(ind + 1) == 1\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromo()\"></div>\n            </div>\n            <div class=\"left-bottom-3qr-1\" *ngIf=\"(ind + 1) == 6\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"center-bottom-3qr\" *ngIf=\"(ind + 1) == 8\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"left-bottom-1qr\" *ngIf=\"(ind + 1) == 11\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=turk_ru')\"></div>\n            </div>\n            <div class=\"left-bottom-3qr-2\" *ngIf=\"(ind + 1) == 32\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"right-bottom-3qr\" *ngIf=\"(ind + 1) == 111\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"left-bottom-1qr-1\" *ngIf=\"(ind + 1) == 135\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://eurasian.press/#/ndch')\"></div>\n            </div>\n          </div>\n\n          <div class=\"r-m\">\n            <div class=\"second-page-promo\" *ngIf=\"(ind + 1) == 2\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromo()\"></div>\n            </div>\n            <div class=\"left-bottom-3qr\" *ngIf=\"(ind + 1) == 3\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"center-bottom-2qr\" *ngIf=\"(ind + 1) == 4\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"right-page-mask\" *ngIf=\"(ind + 1) == 10\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"right-page-mask\" *ngIf=\"(ind + 1) == 42\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"right-page-mask\" *ngIf=\"(ind + 1) == 46\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"right-page-mask\" *ngIf=\"(ind + 1) == 75\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"right-page-mask\" *ngIf=\"(ind + 1) == 83\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"right-bottom-1qr\" *ngIf=\"(ind + 1) == 103\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://i2.app.link/overall-aitu_product-eurasia_mag-eurasia')\"></div>\n            </div>\n            <div class=\"right-page-mask\" *ngIf=\"(ind + 1) == 110\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"right-page-mask\" *ngIf=\"(ind + 1) == 115\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"right-page-mask\" *ngIf=\"(ind + 1) == 125\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'cn')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openQr(ind,'en')\"></div>\n            </div>\n            <div class=\"left-bottom-1qr-1\" *ngIf=\"(ind + 1) == 134\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://forte.kz/camry75')\"></div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"page-mask\" *ngIf=\"isQR(12, ind)\">\n          <div class=\"l-m\">\n            <div class=\"first-page-promo\" *ngIf=\"(ind + 1) == 1\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromo()\"></div>\n            </div>\n            <div class=\"lb-12-1qr\" *ngIf=\"(ind + 1) == 4\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=mcis_open_day&lang=ru')\"></div>\n            </div>\n            <div class=\"rc-12-1qr\" *ngIf=\"(ind + 1) == 8\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://news.rambler.ru/science/46708613/?utm_content=news_media&utm_medium=read_more&utm_source=copylink')\"></div>\n            </div>\n            <div class=\"lb-12-1qr-1\" *ngIf=\"(ind + 1) == 11\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://yandex.ru/video/preview/?filmId=13074616915509073076&text=%D0%B2%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5+%D0%BB%D0%B0%D0%B2%D1%80%D0%BE%D0%B2%D0%B0+%D0%BD%D0%B0+MCIS+2021&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_JfyjxSwWv8')\"></div>\n            </div>\n            <div class=\"lb-12-1qr-2\" *ngIf=\"(ind + 1) == 13\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=mcis_vpmo_knr&lang=ru&start=44m27s')\"></div>\n            </div>\n            <div class=\"lb-12-1qr-2\" *ngIf=\"(ind + 1) == 14\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=mcis_mo_viet&lang=ru&start=21s')\"></div>\n            </div>\n            <div class=\"lb-12-1qr-2\" *ngIf=\"(ind + 1) == 15\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=mcis_plen_zas&lang=ru&start=2m57s')\"></div>\n            </div>\n            <div class=\"lb-12-2qr\" *ngIf=\"(ind + 1) == 16\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://news.rambler.ru/troops/47150492/?utm_content=news_media&utm_medium=read_more&utm_source=copylink')\"></div>\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://news.rambler.ru/science/46708613/?utm_content=news_media&utm_medium=read_more&utm_source=copylink')\"></div>\n            </div>\n            <div class=\"rb-12-1qr-2\" *ngIf=\"(ind + 1) == 18\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://news.rambler.ru/troops/47150492/?utm_content=news_media&utm_medium=read_more&utm_source=copylink')\"></div>\n            </div>\n            <div class=\"lt-12-1qr\" *ngIf=\"(ind + 1) == 22\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=sberkz_ru&lang=ru')\"></div>\n            </div>\n            <div class=\"rb-12-3qr\" *ngIf=\"(ind + 1) == 162\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_beslan&lang=ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_beslan&lang=zh')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_beslan&lang=en')\"></div>\n            </div>\n          </div>\n\n          <div class=\"r-m\">\n            <div class=\"first-page-promo-apps\" *ngIf=\"(ind + 1) == 1\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://www.eurasian.press/#/download')\"></div>\n            </div>\n            <div class=\"second-page-promo\" *ngIf=\"(ind + 1) == 2\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromo()\"></div>\n            </div>\n            <div class=\"rb-12-1qr\" *ngIf=\"(ind + 1) == 3\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=mcis_putin_video&lang=ru')\"></div>\n            </div>\n            <div class=\"rb-12-1qr\" *ngIf=\"(ind + 1) == 5\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=mcis_vpmo_sho&lang=ru')\"></div>\n            </div>\n            <div class=\"rb-12-1qr-l\" *ngIf=\"(ind + 1) == 7\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://news.rambler.ru/troops/47150492/?utm_content=news_media&utm_medium=read_more&utm_source=copylink')\"></div>\n            </div>\n            <div class=\"rb-12-1qr\" *ngIf=\"(ind + 1) == 10\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://www.youtube.com/watch?v=mqavipNey7A&t=2666s')\"></div>\n            </div>\n            <div class=\"rb-12-1qr\" *ngIf=\"(ind + 1) == 10\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://www.youtube.com/watch?v=mqavipNey7A&t=2666s')\"></div>\n            </div>\n            <div class=\"rb-12-1qr\" *ngIf=\"(ind + 1) == 12\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=mcis_fsb_rus&lang=ru')\"></div>\n            </div>\n            <div class=\"rb-12-1qr\" *ngIf=\"(ind + 1) == 13\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=mcis_vpmo_blr&lang=ru&start=9m39s')\"></div>\n            </div>\n            <div class=\"rb-12-1qr\" *ngIf=\"(ind + 1) == 14\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=mcis_vpr_gos&lang=ru')\"></div>\n            </div>\n            <div class=\"rb-12-1qr\" *ngIf=\"(ind + 1) == 15\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=mcis_plen_zas_role&lang=ru&start=16m21s')\"></div>\n            </div>\n            <div class=\"rс-12-1qr\" *ngIf=\"(ind + 1) == 18\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://news.rambler.ru/science/46708613/?utm_content=news_media&utm_medium=read_more&utm_source=copylink')\"></div>\n            </div>\n            <div class=\"rb-12-1qr-3\" *ngIf=\"(ind + 1) == 21\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=spanf')\"></div>\n            </div>\n            <div class=\"rt-12-1qr\" *ngIf=\"(ind + 1) == 22\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=sberkz_kz&lang=ru')\"></div>\n            </div>\n            <div class=\"rb-12-1qr-4\" *ngIf=\"(ind + 1) == 35\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=wp_cn&lang=ru')\"></div>\n            </div>\n            <div class=\"rb-12-3qr\" *ngIf=\"(ind + 1) == 83\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww8&lang=ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww8&lang=zh')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww8&lang=en')\"></div>\n            </div>\n            <div class=\"lbc-12-1q\" *ngIf=\"(ind + 1) == 91\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://akab.kz/')\"></div>\n            </div>\n            <div class=\"rb-12-3qr\" *ngIf=\"(ind + 1) == 96\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww9&lang=ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww9&lang=zh')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww9&lang=en')\"></div>\n            </div>\n            <div class=\"rb-12-3qr\" *ngIf=\"(ind + 1) == 101\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww10&lang=ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww10&lang=zh')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww10&lang=en')\"></div>\n            </div>\n            <div class=\"rb-12-3qr\" *ngIf=\"(ind + 1) == 109\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww11&lang=ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww11&lang=zh')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww11&lang=en')\"></div>\n            </div>\n            <div class=\"rb-12-3qr\" *ngIf=\"(ind + 1) == 129\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww12&lang=ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww12&lang=zh')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww12&lang=en')\"></div>\n            </div>\n            <div class=\"rb-12-3qr\" *ngIf=\"(ind + 1) == 136\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww13&lang=ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww13&lang=zh')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=vr_ww13&lang=en')\"></div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"page-mask\" *ngIf=\"isQR(13, ind)\">\n          <div class=\"l-m\">\n            <div class=\"first-page-promo-e13\" *ngIf=\"(ind + 1) == 1\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromo()\"></div>\n            </div>\n            <div class=\"rb-13-1qr\" *ngIf=\"(ind + 1) == 2\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://fond.historyrussia.org/izdaniya/vestnik-vorontsovo-pole.html')\"></div>\n            </div>\n            <div class=\"rt-13-1qr\" *ngIf=\"(ind + 1) == 7\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://www.youtube.com/watch?v=OwK8oyD5uns')\"></div>\n            </div>\n            <div class=\"rb-13-1qr-1\" *ngIf=\"(ind + 1) == 18\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=ryatoru&lang=zh')\"></div>\n            </div>\n            <div class=\"rb-13-3qr-1\" *ngIf=\"(ind + 1) == 19\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://www.youtube.com/watch?v=k_Zh0CwwDXU')\"></div>\n              <div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://iz.ru/video/embed/1153359')\"></div>\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://iz.ru/1217727/2021-09-06/v-sovfede-podderzhali-ideiu-priravnivaniia-propagandy-natcizma-k-ekstremizmu')\"></div>\n            </div>\n            <div class=\"lb-13-1qr-3\" *ngIf=\"(ind + 1) == 73\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://я.tv/#/watch?video=30letlukoil&lang=ru')\"></div>\n            </div>\n            <div class=\"rb-13-1qr-2\" *ngIf=\"(ind + 1) == 98\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('http://www.agp.com.kz/')\"></div>\n            </div>\n          </div>\n          <div class=\"r-m\">\n            <div class=\"first-page-promo-apps\" *ngIf=\"(ind + 1) == 1\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://www.eurasian.press/#/download')\"></div>\n            </div>\n            <div class=\"second-page-promo\" *ngIf=\"(ind + 1) == 2\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromo()\"></div>\n            </div>\n            <div class=\"lb-13-1qr\" *ngIf=\"(ind + 1) == 3\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://eurasian.press/#/bcalledexam')\"></div>\n            </div>\n            <div class=\"lb-13-1qr\" *ngIf=\"(ind + 1) == 8\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://eurasian.press/#/sdvttoyears')\"></div>\n            </div>\n            <div class=\"rb-13-3qr\" *ngIf=\"(ind + 1) == 17\">\n              <div></div><div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=interlukbbc&lang=ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=interlukbbc&lang=zh')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=interlukbbc&lang=en')\"></div>\n            </div>\n            <div class=\"rb-13-2qr\" *ngIf=\"(ind + 1) == 18\">\n              <div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=ryatoru&lang=ru')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://xn--41a.tv/#/watch?video=ryatoru&lang=en')\"></div>\n            </div>\n            <div class=\"lb-13-1qr-1\" *ngIf=\"(ind + 1) == 29\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://ayala.kz/ru/power/')\"></div>\n            </div>\n            <div class=\"rb-13-1qr-2\" *ngIf=\"(ind + 1) == 48\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://bsgp.kz/ru_RU/')\"></div>\n            </div>\n            <div class=\"rt-13-2qr\" *ngIf=\"(ind + 1) == 51\">\n              <div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://www.youtube.com/watch?list=PLLjLTQ2qRC2ZCklTv7SNK8zuntFQMxak1&v=JJG5FbQp73o&feature=emb_logo')\"></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://www.youtube.com/watch?v=-AX7TGV3h-0&feature=emb_logo')\"></div>\n            </div>\n            <div class=\"rb-13-1qr-2\" *ngIf=\"(ind + 1) == 55\">\n              <div></div><div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('http://static.kremlin.ru/media/events/video/ru/video_low/0GLvhTBpmgrBWwfhmxuHAwAzd4wjTbUW.mp4')\"></div>\n            </div>\n            <div class=\"rb-13-1qr-3\" *ngIf=\"(ind + 1) == 93\">\n              <div></div><div></div><div></div>\n              <div class=\"cursor-pointer\" (click)=\"openPromoQr('https://eurasian.press/#/temirtransserv')\"></div>\n            </div>\n          </div>\n        </div>\n\n      </ion-item>\n    </ion-list>\n  </pinch-zoom>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pdf-reader-pdf-reader-module.js.map