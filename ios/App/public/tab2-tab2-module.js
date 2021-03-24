(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --color: #ffffff;\n  --background: #E21F2D;\n  --ion-border-color: transparent;\n}\n\nion-card {\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 45%;\n}\n\n.journals-row {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBSUE7RUFFRSxvQ0FBQTtFQUNBLFVBQUE7QUFGRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQURGIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRTIxRjJEO1xyXG4gIC0taW9uLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmltZy1oZWlnaHR7XHJcblxyXG59XHJcbmlvbi1jYXJke1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI2UyZGNkYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG4uam91cm5hbHMtcm93e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _props_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../props.service */ "6COz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let Tab2Page = class Tab2Page {
    constructor(p, nav) {
        this.p = p;
        this.nav = nav;
    }
    openPublish(publish) {
        this.p.pdfReading = publish;
        this.nav.navigateForward('/pdf-reader');
    }
};
Tab2Page.ctorParameters = () => [
    { type: _props_service__WEBPACK_IMPORTED_MODULE_4__["PropsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"dc font text-large\">\n      The Eurasian\n    </ion-title>\n    <div class=\"lang\">\n      <ion-select (ionChange)=\"p.setLang(p.lang)\" [selectedText]=\"p.getShortLangName()\" [(ngModel)]=\"p.lang\" [okText]=\"p.tr('OK')\" [cancelText]=\"p.tr('CANCEL')\">\n        <ion-select-option *ngFor=\"let lang of p.languages\" [value]=\"lang[0]\">{{lang[1]}}</ion-select-option>\n      </ion-select>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"journals-row\">\n    <ion-card (click)=\"openPublish(1)\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center bold\">{{p.tr('Issue')}} № 1</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-img class=\"img-height\" [src]=\"p.getThumb(1)\"></ion-img>\n        <div class=\"cx ion-margin\">\n          <ion-button class=\"bold eurasian-color\" color=\"none\">{{p.tr('READ')}}</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card (click)=\"openPublish(2)\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center bold\">{{p.tr('Issue')}} № 2</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-img class=\"img-height\" [src]=\"p.getThumb(2)\"></ion-img>\n        <div class=\"cx ion-margin\">\n          <ion-button class=\"bold eurasian-color\" color=\"none\">{{p.tr('READ')}}</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"journals-row\">\n    <ion-card (click)=\"openPublish(3)\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center bold\">{{p.tr('Issue')}} № 3</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-img class=\"img-height\" [src]=\"p.getThumb(3)\"></ion-img>\n        <div class=\"cx ion-margin\">\n          <ion-button class=\"bold eurasian-color\" color=\"none\">{{p.tr('READ')}}</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card (click)=\"openPublish(4)\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center bold\">{{p.tr('Issue')}} № 4</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-img class=\"img-height\" [src]=\"p.getThumb(4)\"></ion-img>\n        <div class=\"cx ion-margin\">\n          <ion-button class=\"bold eurasian-color\" color=\"none\">{{p.tr('READ')}}</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"journals-row\">\n    <ion-card (click)=\"openPublish(5)\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center bold\">{{p.tr('Issue')}} № 5</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-img class=\"img-height\" [src]=\"p.getThumb(5)\"></ion-img>\n        <div class=\"cx ion-margin\">\n          <ion-button class=\"bold eurasian-color\" color=\"none\">{{p.tr('READ')}}</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card (click)=\"openPublish(6)\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center bold\">{{p.tr('Issue')}} № 6</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-img class=\"img-height\" [src]=\"p.getThumb(6)\"></ion-img>\n        <div class=\"cx ion-margin\">\n          <ion-button class=\"bold eurasian-color\" color=\"none\">{{p.tr('READ')}}</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"journals-row\">\n    <ion-card (click)=\"openPublish(7)\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center bold\">{{p.tr('Issue')}} № 7</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-img class=\"img-height\" [src]=\"p.getThumb(7)\"></ion-img>\n        <div class=\"cx ion-margin\">\n          <ion-button class=\"bold eurasian-color\" color=\"none\">{{p.tr('READ')}}</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card (click)=\"openPublish(8)\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center bold\">{{p.tr('Issue')}} № 8</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-img class=\"img-height\" [src]=\"p.getThumb(8)\"></ion-img>\n        <div class=\"cx ion-margin\">\n          <ion-button class=\"bold eurasian-color\" color=\"none\">{{p.tr('READ')}}</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"journals-row\">\n    <ion-card (click)=\"openPublish(9)\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center bold\">{{p.tr('Issue')}} № 9</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-img class=\"img-height\" [src]=\"p.getThumb(9)\"></ion-img>\n        <div class=\"cx ion-margin\">\n          <ion-button class=\"bold eurasian-color\" color=\"none\">{{p.tr('READ')}}</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card (click)=\"openPublish(10)\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center bold\">{{p.tr('Issue')}} № 10</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-img class=\"img-height\" [src]=\"p.getThumb(10)\"></ion-img>\n        <div class=\"cx ion-margin\">\n          <ion-button class=\"bold eurasian-color\" color=\"none\">{{p.tr('READ')}}</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map