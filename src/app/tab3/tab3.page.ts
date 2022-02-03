import { Component } from '@angular/core';
import {PropsService} from '../props.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  text = '';

  constructor(public p: PropsService, public toastController: ToastController) {}

  sendEmail() {
    this.p.sendEmail(this.text);
    this.text = '';
    this.toastController.create({
      message: 'Письмо успешно отправлено.',
      duration: 2000
    }).then(toast => toast.present());
  }
}
