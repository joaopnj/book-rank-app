import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class BaseServiceProvider {

  public apiUrl: string = 'http://localhost:3000';
  public headers: Headers = new Headers();
  public options = new RequestOptions({ headers: this.headers });

  constructor(public httpClient: HttpClient) {
  }

}
