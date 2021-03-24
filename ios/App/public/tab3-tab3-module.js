(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _props_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../props.service */ "6COz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let Tab3Page = class Tab3Page {
    constructor(p, toastController) {
        this.p = p;
        this.toastController = toastController;
        this.text = '';
    }
    sendEmail() {
        this.p.sendEmail(this.text);
        this.text = '';
        this.toastController.create({
            message: 'Письмо успешно отправлено.',
            duration: 2000
        }).then(toast => toast.present());
    }
};
Tab3Page.ctorParameters = () => [
    { type: _props_service__WEBPACK_IMPORTED_MODULE_4__["PropsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"dc font text-large\">\n      The Eurasian\n    </ion-title>\n    <div class=\"lang\">\n      <ion-select (ionChange)=\"p.setLang(p.lang)\" [selectedText]=\"p.getShortLangName()\" [(ngModel)]=\"p.lang\" [okText]=\"p.tr('OK')\" [cancelText]=\"p.tr('CANCEL')\">\n        <ion-select-option *ngFor=\"let lang of p.languages\" [value]=\"lang[0]\">{{lang[1]}}</ion-select-option>\n      </ion-select>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"\">\n    <div class=\"ion-margin\">\n      <ion-grid class=\"\">\n        <ion-row>\n          <h5 class=\"bold\">{{p.tr('Contact Us')}}</h5>\n        </ion-row>\n        <ion-row>\n          <div class=\"font-small\">\n\n          </div>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"ion-padding-top font-small\">\n              {{p.tr('Phone:')}} <a href=\"tel:88003008118\">8 (800) 300 81 18</a>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"ion-padding-top font-small\">\n              Email: <a href=\"mailto:theeurasian@mail.ru\">theeurasian@mail.ru</a>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class=\"\">\n        <ion-row>\n          <h5 class=\"bold\">{{p.tr('Editorial Office address')}}</h5>\n        </ion-row>\n        <ion-row>\n          <div class=\"font-small\">\n            <div>{{p.tr('8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City')}}</div>\n          </div>\n        </ion-row>\n        <ion-row>\n          <div class=\"ion-padding-top font-small\">\n            {{p.tr('Phone:')}} <a href=\"tel:87172381421\">8 (7172) 38 14 21</a>\n          </div>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class=\"\">\n        <ion-row>\n          <h5 class=\"bold\">{{p.tr('Editorial Office address in the Republic of Kazakhstan')}}</h5>\n        </ion-row>\n        <ion-row>\n          <div class=\"font-small\">\n            <div>{{p.tr('25 Esenberlina street, AIFC, Nur-Sultan, 010000')}}</div>\n          </div>\n        </ion-row>\n        <ion-row>\n          <div class=\"ion-padding-top font-small\">\n            {{p.tr('Phone:')}} <a href=\"tel:88003008118\">8 (800) 300 81 18</a>\n          </div>\n        </ion-row>\n      </ion-grid>\n\n<!--      <div>-->\n<!--        <h5 class=\"bold eurasian-text-color margin-from-contacts\">Отправьте нам сообщение</h5>-->\n<!--        <ion-item>-->\n<!--          <ion-label position=\"floating\">Текст сообщения</ion-label>-->\n<!--          <ion-textarea [(ngModel)]=\"text\"></ion-textarea>-->\n<!--        </ion-item>-->\n<!--        <div class=\"cx my-1\">-->\n<!--          <ion-button [disabled]=\"props.userId == ''\" class=\"bold eurasian-color\" color=\"none\" size=\"medium\" (click)=\"sendEmail()\">ОТПРАВИТЬ</ion-button>-->\n<!--        </div>-->\n<!--        <div class=\"font-small ion-text-center\" *ngIf=\"props.userId == ''\">-->\n<!--          Авторизуйтесь чтобы иметь возможность отправить сообщение-->\n<!--        </div>-->\n<!--      </div>-->\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_5__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --color: #ffffff;\n  --background: #E21F2D;\n  --ion-border-color: transparent;\n}\n\n.margin-from-contacts {\n  margin-top: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUYiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAtLWJhY2tncm91bmQ6ICNFMjFGMkQ7XHJcbiAgLS1pb24tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubWFyZ2luLWZyb20tY29udGFjdHN7XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map