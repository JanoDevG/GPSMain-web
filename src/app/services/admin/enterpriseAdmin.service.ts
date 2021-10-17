import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {response} from '../../models/account';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseAdminService {

  private url = 'http://localhost:8081/api/';

  constructor(private http: HttpClient) {
  }

  headersCreateEnterprise(body: response, clietnSecret: String) {
    let headers = {
      'Content-Type': 'application/json',
      'Xoption': 'CREATE',
      'Xmail':  String(body.body.mail),

    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  headersDeleteEnterprise(body: response, enterpriseName: String) {
    let headers = {
      'Content-Type': 'application/json',
      'Xoption': 'DELETE',
      'Xmail':  String(body.body.mail),
      'XenterpriseName': String(enterpriseName),
    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  createEnterprise(form: response, enterpriseName: String) {
    let direccion = this.url + 'admin/enterprise';
    return this.http.post<Response>(direccion, form, this.headersCreateEnterprise(form, enterpriseName));
  }

  deleteEnterprise(form: response, enterpriseName: String) {
    let direccion = this.url + 'admin/enterprise';
    return this.http.delete<Response>(direccion, this.headersDeleteEnterprise(form, enterpriseName));
  }

}
