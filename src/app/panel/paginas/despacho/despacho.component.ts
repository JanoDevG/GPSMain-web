import {Component, OnInit} from '@angular/core';
import {Fleet} from '../../../models/Fleet';
import {FleetService} from '../../../services/supervisor/fleet.service';
import {GpsService} from '../../../services/supervisor/gps.service';
import {Router} from '@angular/router';
import {AccountService} from '../../../services/supervisor/account.service';

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
  nameBackoffice: String = '';

  ngOnInit(): void {
    this.nameBackoffice = String(localStorage.getItem('clave'));

    this.apiFleet.obtenerFlotaPorBackoffice().subscribe(value => {
      this.flotas = value.body;
    }, error => {
      console.log('No se pueden obtener flotas: ' + error);
    });

  }

  gestionarFlota(fleet: Fleet) {
    localStorage.setItem('patente', String(fleet.patent));
    localStorage.setItem('idGPS', String(fleet.gpsAssigned));
    this.router.navigate(['/panel/despacho/Ver']);
  }

}
