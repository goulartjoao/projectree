import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) { }

  get(route: string, params?: any) {
    return this._http.get(environment.URL_API + route, {
      params,
    });
  }

  post(route: string, body?: any, params?: any) {
    return this._http.post(environment.URL_API + route, body, {
      params,
    });
  }

  put(route: string, body?: any, params?: any) {
    return this._http.put(environment.URL_API + route, body, {
      params,
    });
  }
}
