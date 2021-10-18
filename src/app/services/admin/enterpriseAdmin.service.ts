import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {account, response} from '../../models/account';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseAdminService {

  private url = 'http://localhost:8081/api/';

  constructor(private http: HttpClient) {
  }

  headersCreateEnterprise(body: account, clietnSecret: String) {
    let headers = {
      'Content-Type': 'application/json',
      'Xoption': 'CREATE',
      'Xmail': String(body.mail),

    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  headersDeleteEnterprise(body: account, enterpriseName: String) {
    let headers = {
      'Content-Type': 'application/json',
      'Xoption': 'DELETE',
      'Xmail': String(body.mail),
      'XenterpriseName': String(enterpriseName),
    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  createEnterprise(account: account, enterpriseName: String) {
    let direccion = this.url + 'admin/enterprise';
    return this.http.post<Response>(direccion, account, this.headersCreateEnterprise(account, enterpriseName));
  }

  deleteEnterprise(account: account, enterpriseName: String) {
    let direccion = this.url + 'admin/enterprise';
    return this.http.delete<Response>(direccion, this.headersDeleteEnterprise(account, enterpriseName));
  }

}
