import { Component } from '@angular/core';
import {PropsService} from '../props.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public p: PropsService, public nav: NavController) {}

  openPublish(publish: number) {
    this.p.pdfReading = publish;
    this.nav.navigateForward('/pdf-reader');
  }
}
