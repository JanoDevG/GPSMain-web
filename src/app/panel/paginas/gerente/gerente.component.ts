import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpsmain-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css']
})
export class GerenteComponent implements OnInit {

  name: any;
  apellidos: any;
  constructor() {

    this.name = localStorage.getItem('clave');
    this.apellidos = localStorage.getItem('apellidos');

  }

  cerrarsesion(){

    localStorage.removeItem('clave');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('clientsecret');
    localStorage.removeItem('supervisorMail');


  }


  ngOnInit(): void {
  }

}
