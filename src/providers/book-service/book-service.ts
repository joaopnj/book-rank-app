import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BookServiceProvider {

  private apiUrl: string = 'http://localhost:3000';
  headers: Headers = new Headers();
  options = new RequestOptions({ headers: this.headers });

  constructor(public httpClient: HttpClient) {
  }

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
