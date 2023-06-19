import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropSentencePipe } from './crop-sentence.pipe';



@NgModule({
  declarations: [CropSentencePipe],
  imports: [
    CommonModule
  ],
  exports: [
    CropSentencePipe
  ]
})
export class ApplicationPipeModule { }
