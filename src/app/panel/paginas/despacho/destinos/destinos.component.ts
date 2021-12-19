import {Component, OnInit} from '@angular/core';
import {FleetService} from '../../../../services/supervisor/fleet.service';
import {ResponseViaje, Viaje} from 'src/app/Mapa/paginas/ruta/ruta.component';

@Component({
  selector: 'gpsmain-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {

  constructor(private apiFleet: FleetService) {
  }

  viajes: Array<Viaje> = new Array<Viaje>();



  ngOnInit(): void {
    localStorage.setItem('supervisorMail', 'ajgutierrez@bimbo.cl');
    this.apiFleet.obtenerViajesDeFlota().subscribe((res: ResponseViaje) => {
      this.viajes = res.body;
      this.viajes[0].destino.destino
    });
    localStorage.removeItem('supervisorMail');
  }

}
