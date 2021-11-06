import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GPSResponse} from '../../funciones/paginas/usuarios/control-gps/GPSResponse';

@Injectable({
  providedIn: 'root'
})
export class FleetService {

  url = 'http://localhost:8081/api/';


  constructor(private http: HttpClient) {
  }

  private headersFleetGet() {
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

  private headersFleetDelete(gpsId: String) {
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

  private headersFleetCreate() {
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
/*
  obtenerFlotas() {
    return this.http.get<GPSResponse>(this.url + 'gps/get-all-gps', this.headersGPSGet());
  }

  crearGPS() {
    return this.http.post(this.url + 'gps/create-gps', null, this.headersGPSCreate());
  }

  eliminarGPS(gpsId: String) {
    return this.http.delete(this.url + 'gps/delete-gps', this.headersGPSDelete(gpsId));
  }

 */

}
