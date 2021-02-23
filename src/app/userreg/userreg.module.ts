import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserregPageRoutingModule } from './userreg-routing.module';

import { UserregPage } from './userreg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserregPageRoutingModule
  ],
  declarations: [UserregPage]
})
export class UserregPageModule {}
