import { Component, OnInit, Input } from '@angular/core';
import { AstronomyService } from '../services/astronomy.service';
import { ActivatedRoute } from '@angular/router';
import { Fact } from 'src/data/fact';
import { LoadingController } from '@ionic/angular';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  @Input() fact?: Fact

  constructor(
    private astronomyService: AstronomyService,
    public messageService: MessageService,
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
    this.astronomyService.getFactByDate(this.route.snapshot.paramMap.get('date')!)
      .subscribe({
        next: (fact) => {
          this.fact = fact
          loading.dismiss()
        },
        error: (err) => {
          this.messageService.set(err.message)
          loading.dismiss()
        },
      })
  }
}
