(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userreg-userreg-module"],{

/***/ "BlJ4":
/*!*******************************************!*\
  !*** ./src/app/userreg/userreg.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --color: #ffffff;\n  --background: #E21F2D;\n  --ion-border-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVzZXJyZWcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FBQ0YiLCJmaWxlIjoidXNlcnJlZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAtLWJhY2tncm91bmQ6ICNFMjFGMkQ7XHJcbiAgLS1pb24tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "JdFB":
/*!*******************************************!*\
  !*** ./src/app/userreg/userreg.module.ts ***!
  \*******************************************/
/*! exports provided: UserregPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserregPageModule", function() { return UserregPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _userreg_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userreg-routing.module */ "PYVd");
/* harmony import */ var _userreg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userreg.page */ "K+fH");







let UserregPageModule = class UserregPageModule {
};
UserregPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _userreg_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserregPageRoutingModule"]
        ],
        declarations: [_userreg_page__WEBPACK_IMPORTED_MODULE_6__["UserregPage"]]
    })
], UserregPageModule);



/***/ }),

/***/ "K+fH":
/*!*****************************************!*\
  !*** ./src/app/userreg/userreg.page.ts ***!
  \*****************************************/
/*! exports provided: UserregPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserregPage", function() { return UserregPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_userreg_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./userreg.page.html */ "bl9j");
/* harmony import */ var _userreg_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userreg.page.scss */ "BlJ4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user */ "5uJF");
/* harmony import */ var _props_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../props.service */ "6COz");
/* harmony import */ var _verification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../verification */ "tFcB");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let UserregPage = class UserregPage {
    constructor(props, toastController, nav) {
        this.props = props;
        this.toastController = toastController;
        this.nav = nav;
        this.surname = '';
        this.name = '';
        this.email = '';
        this.password = '';
        this.verificationCode = '';
        this.commitCodeSend = false;
        this.verifyCodeHasBeenSend = false;
    }
    ngOnDestroy() {
        this.events.unsubscribe();
    }
    ngOnInit() {
        if (this.props.userId !== '') {
            this.nav.navigateForward('/tabs/tab1');
        }
        this.events = this.props.event.subscribe(event => {
            if (event === 'wrongVerifyCode') {
                this.commitCodeSend = false;
                this.toastController.create({
                    message: 'Код введён неверно',
                    duration: 2000
                }).then(toast => toast.present());
            }
            if (event === 'userReceived') {
                this.commitCodeSend = false;
                this.toastController.create({
                    message: 'Регистрация прошла успешно.',
                    duration: 2000
                }).then(toast => toast.present());
                this.nav.navigateForward('/tabs/tab4');
            }
            if (event === 'userAlreadyExists') {
                this.toastController.create({
                    message: 'Пользоатель с таким e-mail уже зарегистрирован',
                    duration: 2000
                }).then(toast => toast.present());
            }
            if (event === 'verifyCodeHasBeenSend') {
                this.verifyCodeHasBeenSend = true;
            }
        });
    }
    getCode() {
        const user = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        user.name = this.name;
        user.surname = this.surname;
        user.email = this.email;
        user.password = this.password;
        this.props.getVerifyCode(user);
    }
    isGetCodeDisabled() {
        const r = new RegExp('^[^@]+@[^.]+\\..*');
        const errorInput = this.surname.trim() === '' || this.name.trim() === '' || this.password.trim() === '' || !r.test(this.email);
        return errorInput || this.verifyCodeHasBeenSend;
    }
    commitCode() {
        this.commitCodeSend = true;
        const v = new _verification__WEBPACK_IMPORTED_MODULE_6__["Verification"]();
        v.code = this.verificationCode;
        v.user = this.email;
        this.props.checkVerifyCode(v);
    }
};
UserregPage.ctorParameters = () => [
    { type: _props_service__WEBPACK_IMPORTED_MODULE_5__["PropsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
UserregPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-userreg',
        template: _raw_loader_userreg_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_userreg_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserregPage);



/***/ }),

/***/ "PYVd":
/*!***************************************************!*\
  !*** ./src/app/userreg/userreg-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UserregPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserregPageRoutingModule", function() { return UserregPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _userreg_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userreg.page */ "K+fH");




const routes = [
    {
        path: '',
        component: _userreg_page__WEBPACK_IMPORTED_MODULE_3__["UserregPage"]
    }
];
let UserregPageRoutingModule = class UserregPageRoutingModule {
};
UserregPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserregPageRoutingModule);



/***/ }),

/***/ "bl9j":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userreg/userreg.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Назад\" class=\"text-white\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <div class=\"\">\n    <div class=\"ion-margin\">\n      <div class=\"ion-padding-top\">\n        <h1 class=\"bold\">Новый пользователь</h1>\n      </div>\n      <div class=\"ion-padding-top\">\n        <div>Заполните данные чтобы зарегистрироваться и получить доступ к покупке и просмотру журналов</div>\n      </div>\n      <ion-list lines=\"full\" class=\"ion-padding-top\">\n        <ion-item>\n          <ion-label position=\"fixed\">E-mail</ion-label>\n          <ion-input type=\"email\" [(ngModel)]=\"email\" placeholder=\"введите ваш e-mail\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"fixed\">Фамилия</ion-label>\n          <ion-input [(ngModel)]=\"surname\" placeholder=\"введите вашу фамилию\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"fixed\">Имя</ion-label>\n          <ion-input [(ngModel)]=\"name\" placeholder=\"введите ваше имя\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"fixed\">Пароль</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"придумайте пароль\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <div class=\"cx my-1\">\n        <ion-button [disabled]=\"isGetCodeDisabled()\" class=\"bold eurasian-color\" color=\"none\" size=\"medium\" (click)=\"getCode()\">продолжить</ion-button>\n      </div>\n      <div class=\"ion-padding-top\" *ngIf=\"verifyCodeHasBeenSend\">\n        <div>Проверьте вашу почту и введите полученный проверочный код в поле ниже</div>\n        <ion-item class=\"ion-padding-top\">\n          <ion-label position=\"fixed\">Код</ion-label>\n          <ion-input [(ngModel)]=\"verificationCode\" placeholder=\"код подтверждения\"></ion-input>\n        </ion-item>\n        <div class=\"cx my-1\">\n          <ion-button [disabled]=\"verificationCode.trim().length != 4\" class=\"bold eurasian-color\" color=\"none\" size=\"medium\" (click)=\"commitCode()\">подтвердить</ion-button>\n        </div>\n        <div class=\"cx my-1\" *ngIf=\"commitCodeSend\">\n          <ion-spinner name=\"lines\"></ion-spinner>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "tFcB":
/*!*********************************!*\
  !*** ./src/app/verification.ts ***!
  \*********************************/
/*! exports provided: Verification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verification", function() { return Verification; });
class Verification {
    constructor() {
        this.user = '';
        this.code = '';
    }
}


/***/ })

}]);
//# sourceMappingURL=userreg-userreg-module.js.map