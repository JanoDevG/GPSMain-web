import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataAdminService {

  url = 'http://localhost:8081/api/';

  constructor(private http: HttpClient) {
  }

  getCountBusiness() {
    let direccion = this.url + 'admin/enterprise/count-business';
    return this.http.get<number>(direccion);
  }

  getCountUsers() {
    let direccion = this.url + 'admin/enterprise/count-users';
    return this.http.get<number>(direccion);
  }

}
