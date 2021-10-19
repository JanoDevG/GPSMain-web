import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {account} from '../../models/account';
import {isNull} from 'util';
import {isEmpty} from 'rxjs/operators';
import {responseCRUDAccount} from '../../funciones/paginas/usuarios/control-backoffice/agregar-backoffice/responseCRUDAccount';
import {ListAccount} from '../../funciones/paginas/usuarios/control-backoffice/ListAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url = 'http://localhost:8081/api/';


  constructor(private http: HttpClient) {
  }

  private headersAccount(body: account, option: String, mailAccount: String) {
    let headers;
    if (option == '') { // se asume get y get all
      if (mailAccount == '') { // se asume get all
      } else {
        headers = {
          'Content-Type': 'application/json',
          'Xmail': String(localStorage.getItem('supervisorMail')),
          'XmailAccount': String(mailAccount),
          'XclientSecret': String(localStorage.getItem('clientSecret'))

        };
      }
    } else {
      headers = {
        'Xoption': String(option),
        'Content-Type': 'application/json',
        'Xmail': String(localStorage.getItem('supervisorMail')),
        'XclientSecret': String(localStorage.getItem('clientSecret'))
      };
    }
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  private headersGetAllAccounts(profile: String) {
    let headers = {
      'Content-Type': 'application/json',
      'Xmail': String(localStorage.getItem('supervisorMail')),
      'XclientSecret': String(localStorage.getItem('clientSecret')),
      'Xprofile': String(profile)
    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  getAccounts(profile: String) {
    return this.http.get<ListAccount>(this.url + 'account/get-all-accounts', this.headersGetAllAccounts(profile));
  }

  getAccount(body: account, mailAccount: String) {
    return this.http.get(this.url + 'account/get-account', this.headersAccount(body, '', mailAccount));
  }

  updateAccount(body: account, option: String) {
    return this.http.put<responseCRUDAccount>(this.url + 'account/update-account', body, this.headersAccount(body, option, ''));
  }

  createAccount(body: account, option: String) {
    return this.http.post<responseCRUDAccount>(this.url + 'account/create-account', body, this.headersAccount(body, option, ''));

  }

  deleteAccount(body: account, option: String, mailAccount: String) {
    return this.http.delete<responseCRUDAccount>(this.url + 'account/delete-account?mail=' + mailAccount, this.headersAccount(body, option, ''));

  }

}
