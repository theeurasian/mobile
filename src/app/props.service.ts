import {EventEmitter, Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import {WSCmd} from './wscmd';
import {User} from './user';
import {WebsocketService} from './websocket.service';
import {Verification} from './verification';

@Injectable({
  providedIn: 'root'
})
export class PropsService {
  constructor(private storage: Storage) {
  }
  private publishes = [
    [1, 164],
    [2, 204],
    [3, 184],
    [4, 296],
    [5, 164],
    [6, 67],
    [7, 157],
    [8, 137],
    [9, 129]
  ];
  private lastPublishNumber = 9;
  userId = '';
  user: User = null;
  ws: WebsocketService = null;
  pdfReading = 0;
  lastPublishIMG = 'assets/publishes/' + this.lastPublishNumber + '/thumb.jpg';
  event = new EventEmitter();
  init(ws: WebsocketService){
    this.ws = ws;
    this.storage.get('userId').then(value => {
      if (value != null){
        this.userId = value;
        if (this.userId !== ''){
          this.ws.send(new WSCmd('getUser', this.userId));
        }
      }
    });
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
    return 'assets/publishes/' + publish.toString() + '/thumb.jpg';
  }
  setUser(body: any) {
    this.user = body as User;
    this.userId = this.user.id;
    this.storage.set('userId', this.userId);
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
}
