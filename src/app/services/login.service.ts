import { Injectable } from '@angular/core';


import {LoginI} from '../models/login.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url =  'http://localhost:8081/api/' ;


  constructor(private  http: HttpClient) { }

  loginByEmail(form: LoginI):Observable<any>{
    let direccion = this.url + "login";

    return this.http.post<any>(direccion,form);

  }


}
