import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Usuario} from '../../models/usuario';
import {account, GPS} from '../../models/account';
import {GPSResponse} from '../../funciones/paginas/usuarios/control-gps/GPSResponse';
import {ResponseString} from '../../models/ResponseString';

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  url = 'http://localhost:8081/api/';


  constructor(private http: HttpClient) {
  }

  private headersGPSGet() {
    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Xmail': String(localStorage.getItem('supervisorMail')),
      'XclientSecret': String(localStorage.getItem('clientSecret'))
    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  private headersGPSDelete(gpsId: String) {
    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Xmail': String(localStorage.getItem('supervisorMail')),
      'XclientSecret': String(localStorage.getItem('clientSecret')),
      'XgpsId': String(gpsId),
      'Xoption': 'DELETE'

    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  private headersGPSCreate() {
    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Xmail': String(localStorage.getItem('supervisorMail')),
      'XclientSecret': String(localStorage.getItem('clientSecret')),
      'Xoption': 'CREATE'

    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  obtenerGPSs() {
    return this.http.get<GPSResponse>(this.url + 'gps/get-all-gps', this.headersGPSGet());
  }

  crearGPS() {
    return this.http.post(this.url + 'gps/create-gps', null, this.headersGPSCreate());
  }

  eliminarGPS(gpsId: String) {
    return this.http.delete(this.url + 'gps/delete-gps', this.headersGPSDelete(gpsId));
  }

  activarGPS(gps: GPS) {
    return this.http.put<ResponseString>(this.url + 'gps/activate-gps', gps, this.headersGPSGet());
  }

  desactivarGPS(gps: GPS) {
    return this.http.put<ResponseString>(this.url + 'gps/invalidate-gps', gps, this.headersGPSGet());
  }

}
