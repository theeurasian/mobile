import {Component, OnDestroy, OnInit} from '@angular/core';
import {PropsService} from '../props.service';
import {NavController, ToastController} from '@ionic/angular';
import {User} from '../user';
import {Verification} from '../verification';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.page.html',
  styleUrls: ['./userlogin.page.scss'],
})
export class UserloginPage implements OnInit, OnDestroy {

  constructor(private props: PropsService, public toastController: ToastController, private nav: NavController) { }

  email = '';
  password = '';
  loginPending = false;
  events;

  ngOnDestroy(): void {
    this.events.unsubscribe();
  }
  ngOnInit() {
    if (this.props.userId !== ''){
      this.nav.navigateForward('');
    }
    this.events = this.props.event.subscribe(event => {
      if (event === 'passwordHasBeenSend'){
        this.loginPending = false;
        this.toastController.create({
          message: 'Пароль был отправлен вам на e-mail',
          duration: 2000
        }).then(toast => toast.present());
      }
      if (event === 'wrongLogin'){
        this.loginPending = false;
        this.toastController.create({
          message: 'Пользоатель с таким e-mail не зарегистрирован',
          duration: 2000
        }).then(toast => toast.present());
      }
      if (event === 'wrongPassword'){
        this.loginPending = false;
        this.toastController.create({
          message: 'Пароль введён неверно',
          duration: 2000
        }).then(toast => toast.present());
      }
      if (event === 'userReceived'){
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
}
