import { Component } from '@angular/core';
import { AstronomyService } from '../services/astronomy.service';
import { Fact } from 'src/data/fact';
import { LoadingController } from '@ionic/angular';
import { MessageService } from '../services/message.service';

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
    public messageService: MessageService,
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
      .subscribe({
          error: (err) => {
            this.messageService.set(err.message);
            loading.dismiss()
          },
          next: (todaysFact) => {
            this.messageService.clear();
            this.todaysFact = todaysFact;
          }, 
        });
  }

  getRandomFacts(loading: HTMLIonLoadingElement) {
    this.astronomyService.getRandomFacts()
    .subscribe({
        error: (err) => {
          this.messageService.set(err.message);
          loading.dismiss()
        },
        next: (randomFacts) => {
          this.messageService.clear();
          this.randomFacts = randomFacts;
          loading.dismiss()
        }, 
    });
  }

}