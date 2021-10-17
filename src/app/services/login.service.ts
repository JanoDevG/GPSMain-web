import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserLogin} from '../auth/paginas/login/login';
import {response} from '../auth/paginas/login/account';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8081/api/';

  constructor(private http: HttpClient) {
  }

  createHeaders(form: UserLogin) {
    let headers = {
      'Content-Type': 'application/json',
      'Xmail': form.Xmail.toString(),
      'Xpassword': window.btoa(unescape(encodeURIComponent(form.Xpassword.toString()))), // encriptado en Base64
      'Access-Control-Allow-Origin': '*'
    }
    let requestOptions = {
      headers: new HttpHeaders(headers),
    }
    return requestOptions

  }

  loginByEmail(form: UserLogin) {
    let direccion = this.url + 'login';
    return this.http.get<response>(direccion, this.createHeaders(form));

  }

}
