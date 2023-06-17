import { Component, OnInit, Input } from '@angular/core';
import { AstronomyService } from '../services/astronomy.service';
import { ActivatedRoute } from '@angular/router';
import { Fact } from 'src/data/fact';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  @Input() fact?: Fact

  constructor(
    private astronomyService: AstronomyService,
    private route: ActivatedRoute,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getFact()
  }

  async getFact(){
    const loading = await this.loadingController.create({
      message: 'Please wait',
      translucent: true,
    })
    await loading.present()
    this.astronomyService.getFactByDate(this.route.snapshot.paramMap.get('date')!).subscribe( f => { 
        this.fact = f
        loading.dismiss() 
      }
    )
  }

}
