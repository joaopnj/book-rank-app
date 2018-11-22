import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Rank } from '../../models/rank';
import { BaseServiceProvider } from '../base-service/base-service';

@Injectable()
export class RankServiceProvider extends BaseServiceProvider{

  public createRank(rank: Rank): Observable<Rank> {
    return this.httpClient.post<Rank>(this.apiUrl + '/createrank', rank);
  }

}
