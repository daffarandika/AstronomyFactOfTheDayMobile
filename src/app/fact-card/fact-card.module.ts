import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactCardComponent } from './fact-card.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ApplicationPipeModule } from '../pipes/application-pipe-modules.module';

@NgModule({
  declarations: [FactCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ApplicationPipeModule
  ],
  exports: [
    FactCardComponent
  ]
})
export class FactCardModule { }
