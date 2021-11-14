import {Component, OnInit} from '@angular/core';
import {GpsService} from '../../../../services/supervisor/gps.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Fleet, ListFleetsResponse} from '../../../../models/Fleet';
import {GPSResponse} from '../control-gps/GPSResponse';
import {GPS} from '../../../../models/account';
import {FleetService} from '../../../../services/supervisor/fleet.service';

@Component({
  selector: 'gpsmain-control-vehiculos',
  templateUrl: './control-vehiculos.component.html',
  styleUrls: ['./control-vehiculos.component.css']
})
export class ControlVehiculosComponent implements OnInit {

  constructor(private apiFleet: FleetService,
              private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit(): void {
    this.apiFleet.obtenerFlotas().subscribe((value: ListFleetsResponse) => {
      this.fleets = value.body;
    });
    //TODO prepara botón de eliminar flotas
    //TODO preparar botón y vista para asignar un GPS nuevo
  }

  fleets: Array<Fleet> = new Array<Fleet>();

  eliminarFlota(fleet: Fleet) {
    this.apiFleet.eliminarFlota(fleet).subscribe((res) => {
      console.log('eliminado');
      console.log(res.body);
      this.router.navigate(['/panel/supervisor']);
    }, error => {
      console.log('flota no se pudo eliminar: ' + error.toString());

    });
  }

  removerGPS(fleet: Fleet) {
    this.apiFleet.removerGPS(fleet).subscribe((res) => {
      console.log('eliminado');
      console.log(res.body);
      this.router.navigate(['/panel/supervisor']);
    }, error => {
      console.log('No se pudo desvincular GSP: ' + error);
    });
  }
}
