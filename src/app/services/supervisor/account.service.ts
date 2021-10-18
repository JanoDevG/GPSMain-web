import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {account} from '../../models/account';
import {isNull} from 'util';
import {isEmpty} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  url = 'http://localhost:4500/api/';


  constructor(private http: HttpClient) {
  }

  headersAccount(body: account, clietnSecret: String, option: String, mailAccount: String) {
    let headers;
    if (option == '') { // se asume get y get all
      if (mailAccount == '') {
        headers = {
          'Content-Type': 'application/json',
          'Xmail': String(body.mail),
          'XclientSecret': String(clietnSecret),
          'XmailAccount': String(mailAccount)

        };
      } else {
        headers = {
          'Content-Type': 'application/json',
          'Xmail': String(body.mail),
          'XclientSecret': String(clietnSecret)

        };
      }
    } else {
      headers = {
        'Xoption': String(option),
        'Content-Type': 'application/json',
        'Xmail': String(body.mail),
        'XclientSecret': String(clietnSecret)

      };
    }
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  getAccounts(body: account, clietnSecret: String) {
    return this.http.get(this.url + 'account/get-account', this.headersAccount(body, clietnSecret, '', ''));
  }

  getAccount(body: account, clietnSecret: String, mailAccount: String) {
    return this.http.get(this.url + 'account/get-all-accounts', this.headersAccount(body, clietnSecret, '', mailAccount));
  }

  updateAccount(body: account, clietnSecret: String, option: String) {
    return this.http.get(this.url + 'account/update-account', this.headersAccount(body, clietnSecret, option, ''));
  }

  createAccount(body: account, clietnSecret: String, option: String) {
    return this.http.get(this.url + 'account/create-account', this.headersAccount(body, clietnSecret, option, ''));

  }

  deleteAccount(body: account, clietnSecret: String, option: String) {
    return this.http.get(this.url + 'account/delete-account', this.headersAccount(body, clietnSecret, option, ''));

  }

}
