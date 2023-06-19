import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { NoInternetModule } from '../no-internet/no-internet.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    NoInternetModule,
  ],
  declarations: [DetailPage],
  exports:[
    NoInternetModule
  ]
})
export class DetailPageModule {}
