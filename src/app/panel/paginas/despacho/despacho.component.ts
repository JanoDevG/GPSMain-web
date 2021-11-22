import {Component, OnInit} from '@angular/core';
import {Fleet} from '../../../models/Fleet';
import {FleetService} from '../../../services/supervisor/fleet.service';

@Component({
  selector: 'gpsmain-despacho',
  templateUrl: './despacho.component.html',
  styleUrls: ['./despacho.component.css']
})
export class DespachoComponent implements OnInit {

  constructor(private apiFleet: FleetService) {
  }

  flotas: Array<Fleet> = new Array<Fleet>();
  nameBackoffice: String = '';

  ngOnInit(): void {
    this.nameBackoffice = String(localStorage.getItem('clave'));
    this.apiFleet.obtenerFlotas().subscribe(value => {
      this.flotas = value.body;
    }, error => {
      console.log('No se pueden obtener flotas: ' + error);
    });
  }

  gestionarFlota(fleet: Fleet){

  }

}
