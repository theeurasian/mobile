import { Component } from '@angular/core';
import {PropsService} from '../props.service';
import {NavController} from '@ionic/angular';
import {DocumentViewer, DocumentViewerOptions} from '@awesome-cordova-plugins/document-viewer/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public p: PropsService, public nav: NavController, private document: DocumentViewer) {}
  options: DocumentViewerOptions = {
    title: 'The Eurasian'
  };

  openPublish(publish: number) {
    if (publish >= 14){
      this.document.viewDocument(this.p.rootPublishesSite + publish + '/ru-mobile.pdf', 'application/pdf', this.options);
      // console.log(this.p.rootPublishesSite + publish + '/ru-mobile.pdf');
      // window.open(this.p.rootPublishesSite + publish + '/ru-mobile.pdf');
    }
    else{
      this.p.pdfReading = publish;
      this.nav.navigateForward('/pdf-reader');
    }
  }

  getPublishes() {
    const res = [];
    for (let x = 1; x <= this.p.lastPublishNumber; x++){
      res.push(x);
    }
    return res;
  }
}
