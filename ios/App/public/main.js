(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORK\theeurasian\mobile\android\src\main.ts */"zUnb");


/***/ }),

/***/ "6COz":
/*!**********************************!*\
  !*** ./src/app/props.service.ts ***!
  \**********************************/
/*! exports provided: PropsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropsService", function() { return PropsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _wscmd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wscmd */ "8ZNU");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");





let PropsService = class PropsService {
    constructor(storage, http) {
        this.storage = storage;
        this.http = http;
        //public rootPublishesSite = 'https://data-eurasian.ru/publishes/';
        this.rootPublishesSite = 'https://eurasian.press/publishes/';
        this.languages = [
            ['AR', 'اللغة العربية'],
            ['ZH', '汉语'],
            ['EN', 'English'],
            ['HI', 'हिन्दी'],
            ['FA', 'زبان فارسي'],
            ['PT', 'Português'],
            ['RU', 'Русский'],
            ['ES', 'Español']
        ];
        this.publishes = [
            [1, 164],
            [2, 204],
            [3, 184],
            [4, 296],
            [5, 164],
            [6, 67],
            [7, 157],
            [8, 137],
            [9, 129],
            [10, 111],
            [11, 135],
            [12, 163],
            [13, 99]
        ];
        this.lastPublishNumber = 14;
        this.userId = '';
        this.user = null;
        this.ws = null;
        this.pdfReading = 14;
        this.lastPublishIMG = this.rootPublishesSite + this.lastPublishNumber + '/thumb.jpg';
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lang = 'EN';
        this.http.get('https://eurasian.press/publishes/config.json', {}, {})
            .then(response => {
            console.log(response.data);
            const jsonConfig = JSON.parse(response.data);
            const lastIssue = jsonConfig.lastIssue;
            if (!isNaN(lastIssue)) {
                this.lastPublishNumber = lastIssue;
                this.lastPublishIMG = this.rootPublishesSite + this.lastPublishNumber + '/thumb.jpg';
            }
        })
            .catch(error => {
        });
    }
    getShortLangName() {
        return this.lang;
    }
    init() {
        this.storage.get('lang').then(value => {
            if (value != null) {
                this.lang = value;
            }
        });
    }
    setLang(lang) {
        this.storage.set('lang', lang);
    }
    getPagesCount(numb) {
        const find = this.publishes.find(x => x[0] === numb);
        if (find != null) {
            return find[1];
        }
        else {
            return 0;
        }
    }
    addLeftZeros(input, length = 4) {
        let result = input.toString();
        while (result.length < length) {
            result = '0' + result;
        }
        return result;
    }
    getThumb(publish) {
        return this.rootPublishesSite + publish.toString() + '/thumb.jpg';
    }
    setUser(body) {
        this.user = body;
        this.userId = this.user.id;
        // this.storage.set('userId', this.userId);
        this.event.emit('userReceived');
    }
    wrongVerifyCode() {
        this.event.emit('wrongVerifyCode');
    }
    getVerifyCode(user) {
        this.ws.send(new _wscmd__WEBPACK_IMPORTED_MODULE_2__["WSCmd"]('regUser', user));
    }
    checkVerifyCode(v) {
        this.ws.send(new _wscmd__WEBPACK_IMPORTED_MODULE_2__["WSCmd"]('verifyCode', v));
    }
    userAlreadyExists() {
        this.event.emit('userAlreadyExists');
    }
    getUserName() {
        if (this.user != null) {
            return this.user.surname + ' ' + this.user.name;
        }
        else {
            return '';
        }
    }
    getUserEmail() {
        if (this.user != null) {
            return this.user.email;
        }
        else {
            return '';
        }
    }
    verifyCodeHasBeenSend() {
        this.event.emit('verifyCodeHasBeenSend');
    }
    passwordHasBeenSend() {
        this.event.emit('passwordHasBeenSend');
    }
    recoverPassword(email) {
        this.ws.send(new _wscmd__WEBPACK_IMPORTED_MODULE_2__["WSCmd"]('recoverPassword', email));
    }
    pendLogin(email, password) {
        this.ws.send(new _wscmd__WEBPACK_IMPORTED_MODULE_2__["WSCmd"]('login', [email, password]));
    }
    sendEmail(text) {
        this.ws.send(new _wscmd__WEBPACK_IMPORTED_MODULE_2__["WSCmd"]('supportEmail', [this.userId, text]));
    }
    tr(v) {
        switch (this.lang) {
            case 'AR':
                switch (v) {
                    case 'OK': return 'تأكيد';
                    case 'CANCEL': return 'إلغاء';
                    case 'Issue': return 'عدد المجلة';
                    case 'READ': return 'تصفح المجلة';
                    case 'click here to read': return 'انقر للتصفح المجلة';
                    case 'new magazine issue': return 'العدد الجديد من المجلة';
                    case 'Magazine': return 'المجلة';
                    case 'Issues': return 'أعداد المجلة';
                    case 'Contacts': return 'بيانات المتصل';
                    case 'Contact Us': return 'اتصل بنا';
                    case 'Editorial Office address': return 'عنوان هيئة التحرير في روسيا';
                    case 'Editorial Office address in the Republic of Kazakhstan': return 'عنوان هيئة التحرير في كازاخستان';
                    case '8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City': return 'P.O. Box 82 Business Centre “Gorod Stolits”, Presnenskaya nab. 8/1, Moscow, 123112 Russian Federation';
                    case '25 Esenberlina street, AIFC, Nur-Sultan, 010000': return 'ul. Esenberlina 25, Nur-Sultan, Republic of Kazakhstan, 010000 ';
                    case 'Phone:': return 'رقم هاتف';
                    case 'Go Back': return 'العودة إلى الصفحة السابقة';
                }
                break;
            case 'RU':
                switch (v) {
                    case 'OK': return 'OK';
                    case 'CANCEL': return 'Отмена';
                    case 'Issue': return 'Выпуск';
                    case 'READ': return 'ПРОСМОТРЕТЬ';
                    case 'click here to read': return 'нажмите чтобы просмотреть';
                    case 'new magazine issue': return 'новый выпуск журнала';
                    case 'Magazine': return 'Журнал';
                    case 'Issues': return 'Выпуски';
                    case 'Contacts': return 'Контакты';
                    case 'Contact Us': return 'Свяжитесь с нами';
                    case 'Editorial Office address': return 'Адрес редакции РФ';
                    case 'Editorial Office address in the Republic of Kazakhstan': return 'Адрес редакции РК';
                    case '8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City': return '123112, а/ я № 82, Российская Федерация, г. Москва, Пресненская набережная, д.8, стр. 1, Бизнес Центр «Город Столиц»';
                    case '25 Esenberlina street, AIFC, Nur-Sultan, 010000': return '010000, Республика Казахстан, г. Нур-Султан, ул. Есенберлина, 25\n';
                    case 'Phone:': return 'Тел.';
                    case 'Go Back': return 'Назад';
                }
                break;
            case 'FA':
                switch (v) {
                    case 'OK': return 'تایید';
                    case 'CANCEL': return 'لغو';
                    case 'Issue': return 'شماره ی مجله';
                    case 'READ': return 'چشم انداز';
                    case 'click here to read': return 'برای مرور مجله کلیک کنید';
                    case 'new magazine issue': return 'شماره ی جدید مجله';
                    case 'Magazine': return 'مجله';
                    case 'Issues': return 'شماره های مجله';
                    case 'Contacts': return 'اطلاعات تماس';
                    case 'Contact Us': return 'تماس با ما';
                    case 'Editorial Office address': return 'آدرس هیئت تحریریه در روسیه';
                    case 'Editorial Office address in the Republic of Kazakhstan': return 'آدرس هیئت تحریریه در قزاقستان';
                    case '8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City': return 'P.O. Box 82 Business Centre “Gorod Stolits”, Presnenskaya nab. 8/1, Moscow, 123112 Russian Federation';
                    case '25 Esenberlina street, AIFC, Nur-Sultan, 010000': return 'ul. Esenberlina 25, Nur-Sultan, Republic of Kazakhstan, 010000';
                    case 'Phone:': return 'شماره ی تلفن';
                    case 'Go Back': return 'بازگشت به صفحه قبلی';
                }
                break;
            case 'HI':
                switch (v) {
                    case 'OK': return 'हाँ';
                    case 'CANCEL': return 'रद्द करें';
                    case 'Issue': return 'अंक';
                    case 'READ': return 'देखें ';
                    case 'click here to read': return 'देखने के लिए दबाएँ';
                    case 'new magazine issue': return 'पत्रिका का नया अंक';
                    case 'Magazine': return 'पत्रिका';
                    case 'Issues': return 'अंक';
                    case 'Contacts': return 'संपर्क ';
                    case 'Contact Us': return 'हमसे संपर्क करें';
                    case 'Editorial Office address': return 'सम्पादकीय कार्यालय रूस का पता';
                    case 'Editorial Office address in the Republic of Kazakhstan': return 'सम्पादकीय कार्यालय कज़ाकिस्तान का पता';
                    case '8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City': return '123112, पोस्ट बॉक्स न. 82, रूस, मॉस्को, प्रेस्नेन्स्काया नाबेरेझनाया- 8, बिल्डिंग -1, बिज़नेस सेंटर “गोरद स्तोलीत्स”\n';
                    case '25 Esenberlina street, AIFC, Nur-Sultan, 010000': return '010000, कज़ाकिस्तान गणराज्य, नूर-सुल्तान, एसेन्बरलीना, 25 \n';
                    case 'Phone:': return 'दूरभाष';
                    case 'Go Back': return 'पिछले पृष्ठ पर वापस जाएँ';
                }
                break;
            case 'PT':
                switch (v) {
                    case 'OK': return 'OK (Confirmar)';
                    case 'CANCEL': return 'Cancelar';
                    case 'Issue': return 'Lançamento';
                    case 'READ': return 'VER';
                    case 'click here to read': return 'clique para ver';
                    case 'new magazine issue': return 'Lançamento de novo número da revista';
                    case 'Magazine': return 'Revista';
                    case 'Issues': return 'Lançamentos';
                    case 'Contacts': return 'Contatos';
                    case 'Contact Us': return 'Contacte-nos';
                    case 'Editorial Office address': return 'Endereço do Conselho Editorial na Federação Russa';
                    case 'Editorial Office address in the Republic of Kazakhstan': return 'Endereço do Conselho Editorial na República do Cazaquistão';
                    case '8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City': return 'CEP 123112, C.P.: 82, Federação Russa, Moscou, Naberezhnaya Presnenskaya, 8, ed. 1, Business Center Gorod Stolits';
                    case '25 Esenberlina street, AIFC, Nur-Sultan, 010000': return '010000, República do Cazaquistão, Nur-Sultã, Rua Esenberlina, 25';
                    case 'Phone:': return 'Telefone';
                    case 'Go Back': return 'Voltar à página anterior';
                }
                break;
            case 'ES':
                switch (v) {
                    case 'OK': return 'Confirmar';
                    case 'CANCEL': return 'Cancelar';
                    case 'Issue': return 'Edición';
                    case 'READ': return 'LEER';
                    case 'click here to read': return 'haga click aquí para leer';
                    case 'new magazine issue': return 'nueva edición de revista';
                    case 'Magazine': return 'Revista';
                    case 'Issues': return 'Ediciones';
                    case 'Contacts': return 'Información de contacto';
                    case 'Contact Us': return 'Contáctenos';
                    case 'Editorial Office address': return 'Dirección de la redacción en República de Kazajstán';
                    case 'Editorial Office address in the Republic of Kazakhstan': return 'Dirección de la oficina editorial en la República de Kazajstán';
                    case '8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City': return '123112, a/p 82, Federación de Rusia, Moscú, Presnenskaya naberezhnaya 8, ed. 1, Centro de Negocios Capital City';
                    case '25 Esenberlina street, AIFC, Nur-Sultan, 010000': return '010000, República de Kazajstán, c. Nur-Sultan, calle Esenberlina, 25';
                    case 'Phone:': return 'Teléfono';
                    case 'Go Back': return 'Volver';
                }
                break;
            case 'ZH':
                switch (v) {
                    case 'OK': return '确认';
                    case 'CANCEL': return '取消';
                    case 'Issue': return '出版';
                    case 'READ': return '阅览';
                    case 'click here to read': return '点击阅览';
                    case 'new magazine issue': return '新出版';
                    case 'Magazine': return '杂志';
                    case 'Issues': return '出版';
                    case 'Contacts': return '联系方式';
                    case 'Contact Us': return '与我们联系';
                    case 'Editorial Office address': return '俄罗斯联邦出版社地址';
                    case 'Editorial Office address in the Republic of Kazakhstan': return '哈萨克斯坦共和国出版社地址';
                    case '8 Presnenskaya naberezhnaya, bldg. 1, Gorod Stolitz Business Center, P.O. Box 82, Moscow City': return '123112， 邮箱82, 俄罗斯联邦， 莫斯科市，普列斯年斯卡亚沿河街, 8楼1屋，“首都城市”商务大厦';
                    case '25 Esenberlina street, AIFC, Nur-Sultan, 010000': return '010000, 哈萨克斯坦共和国， 努尔苏丹市， 叶圣别尔林路25号';
                    case 'Phone:': return '电话';
                    case 'Go Back': return '退回';
                }
                break;
            default: return v;
        }
    }
};
PropsService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] }
];
PropsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PropsService);



/***/ }),

/***/ "8ZNU":
/*!**************************!*\
  !*** ./src/app/wscmd.ts ***!
  \**************************/
/*! exports provided: WSCmd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WSCmd", function() { return WSCmd; });
class WSCmd {
    constructor(data, body = null) {
        try {
            const parse = JSON.parse(data);
            this.name = parse.name;
            this.guid = parse.guid;
            this.body = parse.body;
        }
        catch (_a) {
            this.name = data != null ? data.toString() : 'noValue';
            this.body = body != null ? body : 'noValue';
        }
    }
    toJson() {
        return JSON.stringify(this);
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _props_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./props.service */ "6COz");





let AppComponent = class AppComponent {
    constructor(p) {
        this.p = p;
        p.init();
    }
};
AppComponent.ctorParameters = () => [
    { type: _props_service__WEBPACK_IMPORTED_MODULE_4__["PropsService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot()],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }, _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'tab4',
        loadChildren: () => Promise.all(/*! import() | tab4-tab4-module */[__webpack_require__.e("common"), __webpack_require__.e("tab4-tab4-module")]).then(__webpack_require__.bind(null, /*! ./tab4/tab4.module */ "1GDv")).then(m => m.Tab4PageModule)
    },
    {
        path: 'pdf-reader',
        loadChildren: () => __webpack_require__.e(/*! import() | pdf-reader-pdf-reader-module */ "pdf-reader-pdf-reader-module").then(__webpack_require__.bind(null, /*! ./pdf-reader/pdf-reader.module */ "X+iH")).then(m => m.PdfReaderPageModule)
    },
    {
        path: 'userreg',
        loadChildren: () => Promise.all(/*! import() | userreg-userreg-module */[__webpack_require__.e("common"), __webpack_require__.e("userreg-userreg-module")]).then(__webpack_require__.bind(null, /*! ./userreg/userreg.module */ "JdFB")).then(m => m.UserregPageModule)
    },
    {
        path: 'userlogin',
        loadChildren: () => __webpack_require__.e(/*! import() | userlogin-userlogin-module */ "userlogin-userlogin-module").then(__webpack_require__.bind(null, /*! ./userlogin/userlogin.module */ "ysQ6")).then(m => m.UserloginPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map