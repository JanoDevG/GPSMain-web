import {Component, OnInit} from '@angular/core';
import {FleetService} from '../../../../services/supervisor/fleet.service';
import {ResponseViaje, Viaje} from 'src/app/Mapa/paginas/ruta/ruta.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'gpsmain-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {

  constructor(private apiFleet: FleetService,
              private route: ActivatedRoute, private router: Router) {
  }

  viajes: Array<Viaje> = new Array<Viaje>();
  ultimoIndice: number = 0;


  ngOnInit(): void {
    localStorage.setItem('supervisorMail', 'ajgutierrez@bimbo.cl');
    this.apiFleet.obtenerViajesDeFlota().subscribe((res: ResponseViaje) => {
      this.viajes = res.body;
    });
    localStorage.removeItem('supervisorMail');
  }

  eliminarViaje(viaje: Viaje) {
    this.apiFleet.eliminarviaje(viaje, String(localStorage.getItem('patente'))).subscribe(res => {
      if (res.status === 'OK') {
        alert('Viaje Eliminado con éxito');
        this.router.navigate(['/panel/despacho/Destinos']);
      } else {
        alert('No se pudo eliminar el viaje');
        this.router.navigate(['/panel/despacho/Destinos']);
      }
    });
  }

}
