import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Disciplina } from '../../models/disciplina';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { DisciplinaAluno } from '../../models/disciplina-aluno';
import { DisciplinaAlunoObject } from '../../models/disciplina-aluno-obj';
import { BaseServiceProvider } from '../base-service/base-service';

@Injectable()
export class DisciplinaServiceProvider extends BaseServiceProvider{

  public listByCourse(curso: string): Observable<Disciplina[]> {
    let params = new HttpParams();
    params = params.append("curso", curso);
    return this.httpClient.get<Disciplina[]>(this.apiUrl + '/disciplinasbycurso', {params: params} );
  }

  public listByUser(user: string): Observable<DisciplinaAlunoObject[]> {
    let params = new HttpParams();
    params = params.append("user", user);
    return this.httpClient.get<DisciplinaAlunoObject[]>(this.apiUrl + '/disciplinasbyaluno', {params: params} );
  }

  public saveAluno(user: User, disciplinas: Disciplina[]): Observable<DisciplinaAluno> {
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

  public saveProfessor(user: User, disciplinas: Disciplina[]): Observable<Disciplina[]> {
    let requisition = new DisciplinaAluno();
    requisition.disciplinas = disciplinas;
    requisition.aluno = user;
    return this.httpClient.post<DisciplinaAluno>(this.apiUrl + '/disciplinasprofessor', requisition).map(response => {
      return new Disciplina(response);
    }) .catch((error) => {

    error.status % 500 == 0 ? console.log(error.statusText) : "";

    return Observable.throw(error.statusText);
    });
  }

}
