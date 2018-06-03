import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Disciplina } from '../../models/disciplina';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { DisciplinaAluno } from '../../models/disciplina-aluno';

@Injectable()
export class DisciplinaServiceProvider {

  private apiUrl: string = 'http://localhost:3000';
  headers: Headers = new Headers();
  options = new RequestOptions({ headers: this.headers });

  constructor(public httpClient: HttpClient) {
  }

  public listByCourse(curso: string): Observable<Disciplina[]> {
    let params = new HttpParams();
    params = params.append("curso", curso);
    return this.httpClient.get<Disciplina[]>(this.apiUrl + '/disciplinasbycurso', {params: params} );
  }

  public save(user: User, disciplinas: Disciplina[]): Observable<DisciplinaAluno> {
    let requisition = new DisciplinaAluno();
    requisition.disciplinas = disciplinas;
    requisition.aluno = user;
    return this.httpClient.post<DisciplinaAluno>(this.apiUrl + '/disciplinaaluno', requisition).map(response => {
      return new DisciplinaAluno(response);
    }) .catch((error) => {

    error.status % 500 == 0 ? console.log(error.statusText) : ""; 
    
    return Observable.throw(error.statusText);
    });
  }

}
