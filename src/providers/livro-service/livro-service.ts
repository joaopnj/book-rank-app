import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Livro } from '../../models/livro';
import { Observable } from 'rxjs';

@Injectable()
export class LivroServiceProvider {
  
  private apiUrl: string = 'http://localhost:3000';
  headers: Headers = new Headers();
  options = new RequestOptions({ headers: this.headers });

  constructor(public httpClient: HttpClient) {
  }

  listByDisciplina(dicisplina: string): Observable<Livro[]> {
    let params = new HttpParams();
    params = params.append("curso", dicisplina);
    return this.httpClient.get<Livro[]>(this.apiUrl + '/livrosbydisciplina', {params: params} );

  }

}
