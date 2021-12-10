import {Component, OnInit} from '@angular/core';
import {Fleet} from '../../../models/Fleet';
import {FleetService} from '../../../services/supervisor/fleet.service';
import {GpsService} from '../../../services/supervisor/gps.service';
import {GPS} from '../../../models/account';
import {Router} from '@angular/router';

@Component({
  selector: 'gpsmain-despacho',
  templateUrl: './despacho.component.html',
  styleUrls: ['./despacho.component.css']
})
export class DespachoComponent implements OnInit {

  constructor(private apiFleet: FleetService,
              private apiGPS: GpsService,
              private router: Router) {
  }

  flotas: Array<Fleet> = new Array<Fleet>();
  gPSs: Array<GPS> = new Array<GPS>();
  nameBackoffice: String = '';

  ngOnInit(): void {
    this.nameBackoffice = String(localStorage.getItem('clave'));

    this.apiFleet.obtenerFlotas().subscribe(value => {
      this.flotas = value.body;
    }, error => {
      console.log('No se pueden obtener flotas: ' + error);
    });

    this.apiGPS.obtenerGPSs().subscribe(res => {
      this.gPSs = res.body;
    }, error => console.error('no se puede obtener lista de gps' + error));


  }

  gestionarFlota(fleet: Fleet) {
    localStorage.setItem('patente', String(fleet.patent));
    localStorage.setItem('idGPS', String(fleet.gpsAssigned));
    this.router.navigate(['/panel/despacho/Ver']);
  }

}
