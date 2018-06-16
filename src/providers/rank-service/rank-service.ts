import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Rank } from '../../models/rank';

@Injectable()
export class RankServiceProvider {

  private apiUrl: string = 'http://localhost:3000';
  headers: Headers = new Headers();
  options = new RequestOptions({ headers: this.headers });


  constructor(public httpClient: HttpClient) {
  }

  public createRank(rank: Rank): Observable<Rank> {
    return this.httpClient.post<Rank>(this.apiUrl + '/createrank', rank);
  }

}
