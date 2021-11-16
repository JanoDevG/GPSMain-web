import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../../services/supervisor/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GPS, response} from '../../../../models/account';
import {GpsService} from '../../../../services/supervisor/gps.service';
import {GPSResponse} from './GPSResponse';
import {ResponseString} from '../../../../models/ResponseString';

@Component({
  selector: 'gpsmain-control-gps',
  templateUrl: './control-gps.component.html',
  styleUrls: ['./control-gps.component.css']
})
export class ControlGpsComponent implements OnInit {

  constructor(private apiGps: GpsService,
              private route: ActivatedRoute, private router: Router) {
  }

  gPSs: Array<GPS> = new Array<GPS>();

  ngOnInit(): void {
    this.apiGps.obtenerGPSs().subscribe((value: GPSResponse) => {
      this.gPSs = value.body;
    });
  }

  eliminarGPS(gps: GPS) {
    this.apiGps.eliminarGPS(gps._id).subscribe(() => {
      console.log('eliminado');
      this.router.navigate(['/panel/supervisor']);
    }, error => {
      console.log('cuenta no se pudo eliminar: ' + error);
    });
  }

  activarGPS(gps: GPS) {
    this.apiGps.activarGPS(gps).subscribe((response: ResponseString) => {
      this.router.navigate(['/panel/supervisor']);
    });
  }

  desactivarGPS(gps: GPS) {
    this.apiGps.desactivarGPS(gps).subscribe((response: ResponseString) => {
      this.router.navigate(['/panel/supervisor']);
    });
  }

}
