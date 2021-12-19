import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Viaje} from '../../Mapa/paginas/ruta/ruta.component';
import {ResponseString} from '../../models/ResponseString';

@Injectable({
  providedIn: 'root'
})
export class CoordenadasService {

  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:8081/api/gps/';

  private headers() {
    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return requestOptions;
  }

  crearRuta(viaje: Viaje) {
    return this.http.post(this.url + 'inset-trip', viaje, this.headers());
  }

  agregarCoordendas(viaje: Viaje) {
    return this.http.put(this.url + 'inset-coordinates', viaje, this.headers());
  }

  ingresarRuta(ruta: String[]) {
    return this.http.post<ResponseString>(this.url + 'insert-new-route', ruta, this.headers());
  }

}
