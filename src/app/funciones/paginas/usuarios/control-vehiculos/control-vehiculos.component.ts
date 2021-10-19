import { Component, OnInit } from '@angular/core';
import {GpsService} from '../../../../services/supervisor/gps.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Fleet} from '../../../../models/Fleet';
import {GPSResponse} from '../control-gps/GPSResponse';
import {GPS} from '../../../../models/account';

@Component({
  selector: 'gpsmain-control-vehiculos',
  templateUrl: './control-vehiculos.component.html',
  styleUrls: ['./control-vehiculos.component.css']
})
export class ControlVehiculosComponent implements OnInit {

  constructor(private apiGps: GpsService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.apiGps.obtenerGPSs().subscribe((value: GPSResponse) => {
      this.gPSs = value.body;
    });
  }

  fleets: Array<Fleet> = new Array<Fleet>();

  eliminarGPS(gps: GPS) {
    this.apiGps.eliminarGPS(gps._id).subscribe(() => {
      console.log('eliminado');
      this.router.navigate(['/panel/supervisor']);
    }, error => {
      console.log('cuenta no se pudo eliminar: ' + error);
    });
  }
}
