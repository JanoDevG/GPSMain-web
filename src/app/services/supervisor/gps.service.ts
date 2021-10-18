import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Usuario} from '../../models/usuario';
import {account} from '../../models/account';

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  url = 'http://localhost:4500/api/';


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

  //return this.http.get(this.url);

  obtenerGPSs(){

  }

  crearGPS(){

  }

  eliminarGPS(){

  }

}
