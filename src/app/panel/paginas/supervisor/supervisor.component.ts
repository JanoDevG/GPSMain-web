import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpsmain-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
 name: any;
 apellidos: any;
  clientsecret:string = "";



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
  guardarClave(){



    localStorage.setItem('clientsecret',this.clientsecret);


  }


  ngOnInit(): void {
  }

}
