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

  facts: Fact[] = []

  constructor(
    private astronomyService: AstronomyService,
    private loadingController: LoadingController
  ) { }

  ngOnInit(){
    this.getFacts()
  }

  async getFacts() {
    const loading = await this.loadingController.create({
      message: "Please Wait",
      translucent: true,
    })
    await loading.present()
    this.astronomyService.getFacts()
    .subscribe(t => { 
      this.facts = t;
      loading.dismiss()
     })
  }

}
