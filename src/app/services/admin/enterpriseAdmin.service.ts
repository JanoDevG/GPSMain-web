import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseAdminService {

  url = 'http://localhost:8081/api/';

  constructor(private http: HttpClient) {
  }

  headersCreateEnterprise(body: any){

  }

  headersCreateEnterprise(body: any){

  }

  createHeaders(body: any) {
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
