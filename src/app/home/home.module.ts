import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ApplicationPipeModule } from '../pipes/application-pipe-modules.module';
import { FactCardModule } from '../fact-card/fact-card.module';
import { NoInternetModule } from '../no-internet/no-internet.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ApplicationPipeModule,
    FactCardModule,
    NoInternetModule
  ],
  declarations: [
    HomePage, 
  ], 
})
export class HomePageModule {}
