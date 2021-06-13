import {EventEmitter, Injectable} from '@angular/core';
import {WSCmd} from './wscmd';
import {User} from './user';
import {WebsocketService} from './websocket.service';
import {Verification} from './verification';
import { Storage } from '@ionic/storage';
import {HTTP} from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class PropsService {
  constructor(private storage: Storage, private http: HTTP) {
  }
  public rootPublishesSite = 'https://data-eurasian.ru/publishes/';
  public languages = [
    ['AR', 'اللغة العربية'],
    ['ZH', '汉语'],
    ['EN', 'English'],
    ['HI', 'हिन्दी'],
    ['FA', 'زبان فارسي'],
    ['PT', 'Português'],
    ['RU', 'Русский'],
    ['ES', 'Español']
  ];
  private publishes = [
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
    [11, 135]
  ];
  lastPublishNumber = 11;
  userId = '';
  user: User = null;
  ws: WebsocketService = null;
  pdfReading = 11;
  lastPublishIMG = this.rootPublishesSite + this.lastPublishNumber + '/thumb.jpg';
  event = new EventEmitter();
  lang = 'EN';
  getShortLangName(){
    return this.lang;
  }
  init(){
    this.storage.get('lang').then(value => {
      if (value != null){
        this.lang = value;
      }
    });
    // this.http.get('https://data-eurasian.ru/config.json', {}, {})
    //   .then(response => {
    //     console.log(response.data);
    //     const jsonConfig = JSON.parse(response.data);
    //     const lastIssue = jsonConfig.lastIssue;
    //     if (!isNaN(lastIssue)){
    //       this.lastPublishNumber = lastIssue;
    //       this.lastPublishIMG = this.rootPublishesSite + this.lastPublishNumber + '/thumb.jpg';
    //     }
    //   })
    //   .catch(error => {
    //   });
  }
  setLang(lang) {
    this.storage.set('lang', lang);
  }
  getPagesCount(numb: number){
    const find = this.publishes.find(x => x[0] === numb);
    if (find != null){
      return find[1];
    }
    else{
      return 0;
    }
  }
  addLeftZeros(input: any, length: number = 4){
    let result = input.toString();
    while (result.length < length){
      result = '0' + result;
    }
    return result;
  }
  getThumb(publish: any){
    return this.rootPublishesSite + publish.toString() + '/thumb.jpg';
  }
  setUser(body: any) {
    this.user = body as User;
    this.userId = this.user.id;
    // this.storage.set('userId', this.userId);
    this.event.emit('userReceived');
  }
  wrongVerifyCode(){
    this.event.emit('wrongVerifyCode');
  }

  getVerifyCode(user: User) {
    this.ws.send(new WSCmd('regUser', user));
  }

  checkVerifyCode(v: Verification) {
    this.ws.send(new WSCmd('verifyCode', v));
  }

  userAlreadyExists() {
    this.event.emit('userAlreadyExists');
  }

  getUserName() {
    if (this.user != null){
      return this.user.surname + ' ' + this.user.name;
    }
    else{
      return '';
    }
  }
  getUserEmail(){
    if (this.user != null){
      return this.user.email;
    }
    else{
      return '';
    }
  }

  verifyCodeHasBeenSend() {
    this.event.emit('verifyCodeHasBeenSend');
  }

  passwordHasBeenSend() {
    this.event.emit('passwordHasBeenSend');
  }

  recoverPassword(email: string) {
    this.ws.send(new WSCmd('recoverPassword', email));
  }

  pendLogin(email: string, password: string) {
    this.ws.send(new WSCmd('login', [email, password]));
  }

  sendEmail(text: any) {
    this.ws.send(new WSCmd('supportEmail', [this.userId, text]));
  }
  tr(v: string){
    switch (this.lang){
      case 'AR':
        switch (v){
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
        switch (v){
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
        switch (v){
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
        switch (v){
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
        switch (v){
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
        switch (v){
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
        switch (v){
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
}
