import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
// import { Disciplina } from '../../models/disciplina';
import 'rxjs/Rx';
import { BaseServiceProvider } from '../base-service/base-service';

@Injectable()
export class AuthServiceProvider extends BaseServiceProvider{

  public login(user: User): Observable<User> {
    return this.httpClient.post(this.apiUrl + '/login', user).map(response => {
        return new User(response);
      }) .catch((error) => {

      error.status % 500 == 0 ? console.log(error.statusText) : "";

      return Observable.throw(error.statusText);
      });
  }

  public removeFirstAcess(user: User): Observable<User> {
    return this.httpClient.put(this.apiUrl + '/usuario/removeFirstAcess', user).map(response => {
        return new User(response);
      }) .catch((error) => {

      error.status % 500 == 0 ? console.log(error.statusText) : "";

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

  public me(login: string): Observable<User> {
    let params = new HttpParams();
    params = params.append("login", login);
    return this.httpClient.get<User>(this.apiUrl + '/usuario/me', {params: params} ).map(response => {
        return new User(response);
      }) .catch((error) => {

      error.status % 500 == 0 ? console.log(error.statusText) : "";

      return Observable.throw(error.statusText);
      });
  }

}
