import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfReaderPage } from './pdf-reader.page';

const routes: Routes = [
  {
    path: '',
    component: PdfReaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfReaderPageRoutingModule {}
