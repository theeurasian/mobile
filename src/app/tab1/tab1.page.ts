import { Component } from '@angular/core';
import {PropsService} from '../props.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public p: PropsService, private nav: NavController) {

  }

  openLatestPublish() {
    this.p.pdfReading = this.p.lastPublishNumber;
    this.nav.navigateForward('/pdf-reader');
  }
}
