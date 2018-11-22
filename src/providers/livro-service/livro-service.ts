import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Livro } from '../../models/livro';
import { Observable } from 'rxjs';
import { BaseServiceProvider } from '../base-service/base-service';

@Injectable()
export class LivroServiceProvider extends BaseServiceProvider{

  listByDisciplina(dicisplina: string): Observable<Livro[]> {
    let params = new HttpParams();
    params = params.append("curso", dicisplina);
    return this.httpClient.get<Livro[]>(this.apiUrl + '/livrosbydisciplina', {params: params} );

  }

}
