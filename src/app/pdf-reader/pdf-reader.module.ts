import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfReaderPageRoutingModule } from './pdf-reader-routing.module';

import { PdfReaderPage } from './pdf-reader.page';
import {PinchZoomModule} from 'ngx-pinch-zoom';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfReaderPageRoutingModule,
    PinchZoomModule
  ],
  declarations: [PdfReaderPage]
})
export class PdfReaderPageModule {}
