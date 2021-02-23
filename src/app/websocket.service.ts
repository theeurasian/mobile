import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {PropsService} from './props.service';
import {WSCmd} from './wscmd';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private ws: WebSocket;
  private noConnectionUrl = '/no-connection';
  private established = false;
  private retries = 0;
  private retriesLimit = 3;
  constructor(
    private router: Router,
    private props: PropsService,
  )
  {
    this.init();
  }
  isOpen(){
    return this.established;
  }
  private init(){
    this.ws = new WebSocket(`ws://192.168.1.101:2222`);
    this.retries += 1;
    if (this.retries > this.retriesLimit){
      if (!this.router.url.includes(this.noConnectionUrl)){
      }
    }
    this.ws.onopen = () => {
      this.invoke();
      this.established = true;
      this.ws.onclose = () => {
        this.established = false;
        this.init();
      };
      this.ws.onmessage = (event) => {
        console.log(event);
        const wsCmd = new WSCmd(event.data);
        switch (wsCmd.name) {
          case 'user': {
            this.props.setUser(wsCmd.body);
            break;
          }
          case 'wrongVerifyCode': {
            this.props.wrongVerifyCode();
            break;
          }
          case 'userAlreadyExists': {
            this.props.userAlreadyExists();
            break;
          }
          case 'verifyCodeHasBeenSend': {
            this.props.verifyCodeHasBeenSend();
            break;
          }
          case 'passwordHasBeenSend': {
            this.props.passwordHasBeenSend();
            break;
          }
          default: {
            console.log('WebSocket received unknown command ' + wsCmd.name);
            break;
          }
        }
      };
    };
    this.ws.onerror = () => {
      this.init();
    };
  }

  private invoke(){
    this.props.init(this);
  }

  public send(cmd: WSCmd){
    this.ws.send(cmd.toJson());
  }
}
