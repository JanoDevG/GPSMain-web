import {Component, OnInit} from '@angular/core';
import {GPS} from 'src/app/models/account';
import {GpsService} from '../../../../../services/supervisor/gps.service';
import {ResponseString} from '../../../../../models/ResponseString';
import {AccountService} from '../../../../../services/supervisor/account.service';

@Component({
  selector: 'gpsmain-gestionar-gps',
  templateUrl: './gestionar-gps.component.html',
  styleUrls: ['./gestionar-gps.component.css']
})
export class GestionarGpsComponent implements OnInit {

  constructor(private apiGPS: GpsService,
              private apiAccount: AccountService,
              private apiCuenta: AccountService) {
  }

  gpss: GPSAccountAndBusiness = new GPSAccountAndBusiness(new Array<GPS>(), new Array<GPS>());

  ngOnInit(): void {
    this.apiGPS.traerGPSs().subscribe(value => {
      this.gpss = value.body;
    });
  }

  asignarGPS(gps: GPS) {
    this.apiGPS.asignarGPS(gps).subscribe((res: ResponseString) => {
      if (res.status === 'OK') {
        alert('GPS asignado exitosamente');
      } else {
        alert('No se puede remover GPS');
        console.error(res.body);
      }
    });
  }

  removerGPS(gps: GPS) {
    this.apiGPS.removerGPS(gps).subscribe((res: ResponseString) => {
      if (res.status === 'OK') {
        alert('GPS removido exitosamente');
      } else {
        alert('No se puede remover GPS');
        console.error(res.body);
      }
    });
  }

}

export class GPSAccountAndBusinessResponse {
  constructor(public status: String,
              public body: GPSAccountAndBusiness) {
  }
}

export class GPSAccountAndBusiness {
  constructor(public gpsAccount: Array<GPS>,
              public gpsBusiness: Array<GPS>) {
  }
}
