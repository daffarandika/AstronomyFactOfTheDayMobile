import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoInternetComponent } from './no-internet.component';



@NgModule({
  declarations: [NoInternetComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NoInternetComponent
  ]
})
export class NoInternetModule { }
