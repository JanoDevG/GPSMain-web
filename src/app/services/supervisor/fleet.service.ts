import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Fleet, ListFleetsResponse} from '../../models/Fleet';
import {ResponseString} from '../../models/ResponseString';
import {ResponseViaje, Viaje} from 'src/app/Mapa/paginas/ruta/ruta.component';

@Injectable({
  providedIn: 'root'
})
export class FleetService {

  url = 'http://localhost:8081/api/';


  constructor(private http: HttpClient) {
  }

  private headersGetAllFleets() {
    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Xmail': String(localStorage.getItem('supervisorMail')),
      'XclientSecret': String(localStorage.getItem('clientSecret')),
    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  private headersGetFleet() {
    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Xpatent': String(localStorage.getItem('patente')),
    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  private assignedGPS(fleet: Fleet, option: String) {
    let headers;
    if (option == 'ASSIGNER') {
      headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Xmail': String(localStorage.getItem('supervisorMail')),
        'XclientSecret': String(localStorage.getItem('clientSecret')),
        'xfleetPatent': String(fleet.patent),
        'Xoption': String(option)
      };
    } else {
      headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Xmail': String(localStorage.getItem('supervisorMail')),
        'XclientSecret': String(localStorage.getItem('clientSecret')),
        'xfleetPatent': String(fleet.patent),
        'Xoption': String(option)
      };
    }
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  private headersCD(fleet: Fleet, option: String) {
    let headers;
    if (option == 'CREATE') {
      headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Xmail': String(localStorage.getItem('supervisorMail')),
        'XclientSecret': String(localStorage.getItem('clientSecret')),
        'Xoption': 'CREATE'
      };
    } else {
      headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Xmail': String(localStorage.getItem('supervisorMail')),
        'XclientSecret': String(localStorage.getItem('clientSecret')),
        'Xoption': 'DELETE',
        'XfleetPatent': String(fleet.patent)
      };
    }

    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  obtenerViajesDeFlota() {
    return this.http.get<ResponseViaje>(this.url + 'gps/get-trips', this.headersGetFleet());
  }

  obtenerFlota() {
    return this.http.get<Fleet>(this.url + 'fleet/get-fleet', this.headersGetFleet());
  }

  obtenerFlotas() {
    return this.http.get<ListFleetsResponse>(this.url + 'fleet/get-all-fleets', this.headersGetAllFleets());
  }

  crearFlota(fleet: Fleet) {
    return this.http.post<ResponseString>(this.url + 'fleet/create-fleet', fleet, this.headersCD(fleet, 'CREATE'));
  }

  eliminarFlota(fleet: Fleet) {
    return this.http.delete<ResponseString>(this.url + 'fleet/delete-fleet', this.headersCD(fleet, 'DELETE'));
  }

  asignarGPS(fleet: Fleet) {
    return this.http.post<ResponseString>(this.url + 'fleet/assigned-gps', null, this.assignedGPS(fleet, 'ASSIGNER'));
  }

  removerGPS(fleet: Fleet) {
    return this.http.post<ResponseString>(this.url + 'fleet/remove-gps', null, this.assignedGPS(fleet, 'REMOVE'));
  }

  eliminarviaje(viaje: Viaje, patente: String) {
    return this.http.post<ResponseString>(this.url + 'gps/delete-trip', viaje, this.headersGetFleet());
  }

}
