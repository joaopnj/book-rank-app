import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import { BaseServiceProvider} from '../base-service/base-service';

@Injectable()
export class BookServiceProvider extends BaseServiceProvider {

  public listByDiscipline(disciplina: string): Observable<Book[]> {
    let params = new HttpParams();
    params = params.append("disciplina", disciplina);
    return this.httpClient.get<Book[]>(this.apiUrl + '/livrosbydisciplina', {params: params} );
  }

  public findLivroByName(book: string): Observable<Book> {
    let params = new HttpParams();
    params = params.append("book", book);
    return this.httpClient.get<Book>(this.apiUrl + '/findlivrobyname', {params: params} );
  }
}
