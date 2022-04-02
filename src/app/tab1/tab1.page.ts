import { Component } from '@angular/core';
import {PropsService} from '../props.service';
import {NavController} from '@ionic/angular';
import {DocumentViewer, DocumentViewerOptions} from '@awesome-cordova-plugins/document-viewer/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public p: PropsService, private nav: NavController, private document: DocumentViewer) {

  }
  options: DocumentViewerOptions = {
    title: 'The Eurasian'
  };
  openLatestPublish() {
    if (this.p.lastPublishNumber >= 14){
      this.document.viewDocument(this.p.rootPublishesSite + this.p.lastPublishNumber + '/ru-mobile.pdf', 'application/pdf', this.options);
      // console.log(this.p.rootPublishesSite + publish + '/ru-mobile.pdf');
      // window.open(this.p.rootPublishesSite + publish + '/ru-mobile.pdf');
    }
    else{
      this.p.pdfReading = this.p.lastPublishNumber;
      this.nav.navigateForward('/pdf-reader');
    }
  }
}
