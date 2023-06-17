import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @Input() date: Date = new Date();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  dateChanged(){
    this.router.navigateByUrl(`/tabs/search/detail/${this.date.toString().substring(0, 10)}`)
  }

}
