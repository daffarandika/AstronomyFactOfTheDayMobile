import { Component } from '@angular/core';
import { AstronomyService } from '../services/astronomy.service';
import { Fact } from 'src/data/fact';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  randomFacts: Fact[] = []
  todaysFact?: Fact

  constructor(
    private astronomyService: AstronomyService,
    private loadingController: LoadingController
  ) { }

  async ngOnInit(){
    const loading = await this.loadingController.create({
      message: "Please Wait",
      translucent: true,
    })
    await loading.present()
    this.getTodaysFact(loading)
    this.getRandomFacts(loading)
  }

  handleRefresh(event: any) {
    this.astronomyService.getRandomFacts()
      .subscribe(t => { 
        this.randomFacts = t;
        event.target.complete();
      })
  }
  
  getTodaysFact(loading: HTMLIonLoadingElement) {
    this.astronomyService.getTodaysFact()
      .subscribe(fact => {
        this.todaysFact = fact;
        loading.dismiss()
      })
  }

  getRandomFacts(loading: HTMLIonLoadingElement) {
    this.astronomyService.getRandomFacts()
      .subscribe(facts => { 
        this.randomFacts = facts;
        loading.dismiss()
      })
  }

}