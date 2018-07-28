import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('X-Auth-Token', '7b933291c89c4d81a95f623143de8466');

@Injectable({
  providedIn: 'root'
})
export class AppWay2Service {

  constructor(
    private http: Http
  ) { }
  getCompetitions() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.get('http://api.football-data.org/v1/competitions/444/leagueTable', options)
    .pipe(map(data => data.json()));
  }
}
