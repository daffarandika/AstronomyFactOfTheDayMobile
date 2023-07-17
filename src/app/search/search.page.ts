import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AstronomyService } from '../services/astronomy.service';
import { Fact } from 'src/data/fact';
import { LoadingController } from '@ionic/angular';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  dateModel: string = new Date().toISOString();
  fact?: Fact;
  today: string = new Date().toISOString().substring(0,10);
  showCalendar: boolean = false;

  constructor(
    private astronomyService: AstronomyService,
    public messageService: MessageService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  dateChanged(loading: HTMLIonLoadingElement){
    loading.present()
    this.astronomyService.getFactByDate(this.dateModel.substring(0,10))
    .then((f) => { 
          this.fact = f;
          this.messageService.clear();
          loading.dismiss();
        });
  }
   
  openCalendar() {
    this.showCalendar = true;
  }
  async cancelCalendar() {
    const loading = await this.loadingController.create({
      message: "Please Wait",
      translucent: true,
    })
    this.showCalendar = false;
    this.dateChanged(loading)
  }

  done(){
    alert(`/tabs/search/detail/${this.dateModel}`)
  }

  cancel() {

  }

}
