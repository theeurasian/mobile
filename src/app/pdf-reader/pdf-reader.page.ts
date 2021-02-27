import { Component, OnInit } from '@angular/core';
import {PropsService} from '../props.service';

@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.page.html',
  styleUrls: ['./pdf-reader.page.scss'],
})
export class PdfReaderPage implements OnInit {
  constructor(public p: PropsService) { }
  images = [];
  sliderOpt = {
    zoom: {
      maxRatio: 10,
    },
  };
  ngOnInit() {
    this.images = this.getImages();
  }
  getImages(){
    const pagesLocation = 'assets/publishes/' + this.p.pdfReading + '/pages/Page';
    const result = [];
    for (let x = 1; x <= this.p.getPagesCount(this.p.pdfReading); x++){
      result.push(pagesLocation + x + '.jpg');
    }
    return result;
  }
}
