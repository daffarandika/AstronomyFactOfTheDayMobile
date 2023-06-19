import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { NoInternetModule } from '../no-internet/no-internet.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    NoInternetModule,
  ],
  declarations: [SearchPage],
  exports: [
    NoInternetModule,
  ]
})
export class SearchPageModule {}
