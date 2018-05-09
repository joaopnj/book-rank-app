import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
// import { Disciplina } from '../../models/disciplina';
import 'rxjs/Rx';

@Injectable()
export class AuthServiceProvider {

  private apiUrl: string = 'http://localhost:3000';
  headers: Headers = new Headers();
  options = new RequestOptions({ headers: this.headers });

  constructor(public http: Http,
              public httpClient: HttpClient) {
  }

  public register(user: User): Observable<User> {
    return this.http.post(this.apiUrl + '/usuario', user, this.options)
      .map(res => res.json());
  }

  public login(user: User): Observable<User> {
    return this.httpClient.post(this.apiUrl + '/login', user).map(response => {
        return new User(response);
      }) .catch((error) => {

      if (error.status == 500) {
          console.log(error.statusText);
      } else if (error.status == 588) {
        console.log(error.statusText);
      }
      
      return Observable.throw(error.statusText);
      });
  }

  public createUser(user: User): Observable<User> {
    return this.httpClient.post(this.apiUrl + '/usuario', user).map(response => {
        return new User(response);
      }) .catch((error) => {

      error.status % 500 == 0 ? console.log(error.statusText) : "";    
      
      return Observable.throw(error.statusText);
      });
  }


  // registerDiscipline(disciplina: Disciplina, user: User): Observable<Disciplina> {
  //   return this.http.post(apiUrl+'/usuario/disciplina', disciplina ,this.options)
  //     .map(res => res.json());
  // }
}
