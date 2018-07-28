import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppWay2Service } from '../../../app-way2.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.sass']
})
export class RankingComponent implements OnInit {
  getData:  any;
  constructor(
    private httpAppService: AppWay2Service,
    private http: Http
  ) { }

  ngOnInit() {
    const returnCompetitions = this.httpAppService.getCompetitions()
      .subscribe(
        data => this.getData = data,
        error => alert(error),
        () => console.log(this.getData)
   );
  }

}
