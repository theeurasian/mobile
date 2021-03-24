(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userlogin-userlogin-module"],{

/***/ "CRqt":
/*!*******************************************************!*\
  !*** ./src/app/userlogin/userlogin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UserloginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserloginPageRoutingModule", function() { return UserloginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _userlogin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userlogin.page */ "f/XR");




const routes = [
    {
        path: '',
        component: _userlogin_page__WEBPACK_IMPORTED_MODULE_3__["UserloginPage"]
    }
];
let UserloginPageRoutingModule = class UserloginPageRoutingModule {
};
UserloginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserloginPageRoutingModule);



/***/ }),

/***/ "Ir/L":
/*!***********************************************!*\
  !*** ./src/app/userlogin/userlogin.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --color: #ffffff;\n  --background: #E21F2D;\n  --ion-border-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVzZXJsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUFDRiIsImZpbGUiOiJ1c2VybG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRTIxRjJEO1xyXG4gIC0taW9uLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "cebi":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userlogin/userlogin.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Назад\" class=\"text-white\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <div class=\"cx cy\">\n    <div class=\"ion-margin\">\n      <div class=\"ion-padding-top\">\n        <h1 class=\"bold\">Авторизация</h1>\n      </div>\n      <div class=\"ion-padding-top\">\n        <div>Введите ваш почтовый адрес и пароль указанные при регистрации</div>\n      </div>\n      <ion-list lines=\"full\" class=\"ion-padding-top\">\n        <ion-item>\n          <ion-label position=\"fixed\">E-mail</ion-label>\n          <ion-input type=\"email\" [(ngModel)]=\"email\" placeholder=\"введите ваш e-mail\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"fixed\">Пароль</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"придумайте пароль\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <div class=\"cx my-1\">\n        <ion-button [disabled]=\"isSendLoginDisabled()\" class=\"bold eurasian-color\" color=\"none\" size=\"medium\" (click)=\"pendLogin()\">ПРОДОЛЖИТЬ</ion-button>\n      </div>\n      <div class=\"cx my-1\" *ngIf=\"loginPending\">\n        <ion-spinner name=\"lines\"></ion-spinner>\n      </div>\n      <div class=\"ion-padding-top ion-text-center\">\n        <div>Не помните пароль? Нажмите \"Восстановить пароль\"</div>\n      </div>\n      <div class=\"cx my-1\">\n        <ion-button [disabled]=\"isRecoveryPasswordDisabled()\" class=\"bold eurasian-color\" color=\"none\" size=\"medium\" (click)=\"resetPassword()\">ВОССТАНОВИТЬ ПАРОЛЬ</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "f/XR":
/*!*********************************************!*\
  !*** ./src/app/userlogin/userlogin.page.ts ***!
  \*********************************************/
/*! exports provided: UserloginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserloginPage", function() { return UserloginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_userlogin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./userlogin.page.html */ "cebi");
/* harmony import */ var _userlogin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userlogin.page.scss */ "Ir/L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _props_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../props.service */ "6COz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let UserloginPage = class UserloginPage {
    constructor(props, toastController, nav) {
        this.props = props;
        this.toastController = toastController;
        this.nav = nav;
        this.email = '';
        this.password = '';
        this.loginPending = false;
    }
    ngOnDestroy() {
        this.events.unsubscribe();
    }
    ngOnInit() {
        if (this.props.userId !== '') {
            this.nav.navigateForward('');
        }
        this.events = this.props.event.subscribe(event => {
            if (event === 'passwordHasBeenSend') {
                this.loginPending = false;
                this.toastController.create({
                    message: 'Пароль был отправлен вам на e-mail',
                    duration: 2000
                }).then(toast => toast.present());
            }
            if (event === 'wrongLogin') {
                this.loginPending = false;
                this.toastController.create({
                    message: 'Пользоатель с таким e-mail не зарегистрирован',
                    duration: 2000
                }).then(toast => toast.present());
            }
            if (event === 'wrongPassword') {
                this.loginPending = false;
                this.toastController.create({
                    message: 'Пароль введён неверно',
                    duration: 2000
                }).then(toast => toast.present());
            }
            if (event === 'userReceived') {
                // this.loginPending = false;
                // this.toastController.create({
                //   message: 'Авторизация прошла успешно.',
                //   duration: 2000
                // }).then(toast => toast.present());
                this.nav.navigateForward('/tabs/tab4');
            }
        });
    }
    isSendLoginDisabled() {
        const r = new RegExp('^[^@]+@[^.]+\\..*');
        const errorInput = this.password.trim() === '' || !r.test(this.email);
        return errorInput || this.loginPending;
    }
    resetPassword() {
        this.props.recoverPassword(this.email);
    }
    pendLogin() {
        this.loginPending = true;
        this.props.pendLogin(this.email, this.password);
    }
    isRecoveryPasswordDisabled() {
        const r = new RegExp('^[^@]+@[^.]+\\..*');
        return !r.test(this.email);
    }
};
UserloginPage.ctorParameters = () => [
    { type: _props_service__WEBPACK_IMPORTED_MODULE_4__["PropsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
UserloginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-userlogin',
        template: _raw_loader_userlogin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_userlogin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserloginPage);



/***/ }),

/***/ "ysQ6":
/*!***********************************************!*\
  !*** ./src/app/userlogin/userlogin.module.ts ***!
  \***********************************************/
/*! exports provided: UserloginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserloginPageModule", function() { return UserloginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _userlogin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userlogin-routing.module */ "CRqt");
/* harmony import */ var _userlogin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userlogin.page */ "f/XR");







let UserloginPageModule = class UserloginPageModule {
};
UserloginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _userlogin_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserloginPageRoutingModule"]
        ],
        declarations: [_userlogin_page__WEBPACK_IMPORTED_MODULE_6__["UserloginPage"]]
    })
], UserloginPageModule);



/***/ })

}]);
//# sourceMappingURL=userlogin-userlogin-module.js.map