import { Component, OnInit, Input } from '@angular/core';
import { Fact } from 'src/data/fact';

@Component({
  selector: 'app-fact-card',
  templateUrl: './fact-card.component.html',
  styleUrls: ['./fact-card.component.scss'],
})
export class FactCardComponent  implements OnInit {

  @Input() fact?: Fact
  @Input() color?: string
  @Input() redirectTo?: string

  constructor() { }

  ngOnInit() {}

}
