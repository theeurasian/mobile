import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../user';
import {PropsService} from '../props.service';
import {Verification} from '../verification';
import {NavController, ToastController} from '@ionic/angular';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.page.html',
  styleUrls: ['./userreg.page.scss'],
})
export class UserregPage implements OnInit, OnDestroy {

  constructor(private props: PropsService, public toastController: ToastController, private nav: NavController) { }

  surname = '';
  name = '';
  email = '';
  password = '';
  verificationCode = '';
  commitCodeSend = false;
  verifyCodeHasBeenSend = false;
  events;

  ngOnDestroy(): void {
    this.events.unsubscribe();
  }
  ngOnInit() {
    if (this.props.userId !== ''){
      this.nav.navigateForward('/tabs/tab1');
    }
    this.events = this.props.event.subscribe(event => {
      if (event === 'wrongVerifyCode'){
        this.commitCodeSend = false;
        this.toastController.create({
          message: 'Код введён неверно',
          duration: 2000
        }).then(toast => toast.present());
      }
      if (event === 'userReceived'){
        this.commitCodeSend = false;
        this.toastController.create({
          message: 'Регистрация прошла успешно.',
          duration: 2000
        }).then(toast => toast.present());
        this.nav.navigateForward('/tabs/tab4');
      }
      if (event === 'userAlreadyExists'){
        this.toastController.create({
          message: 'Пользоатель с таким e-mail уже зарегистрирован',
          duration: 2000
        }).then(toast => toast.present());
      }
      if (event === 'verifyCodeHasBeenSend'){
        this.verifyCodeHasBeenSend = true;
      }
    });
  }

  getCode() {
    const user = new User();
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
    const v = new Verification();
    v.code = this.verificationCode;
    v.user = this.email;
    this.props.checkVerifyCode(v);
  }
}
