import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpsmain-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
 name: any;
 apellidos: any;
  constructor() {

    this.name = localStorage.getItem('clave');
    this.apellidos = localStorage.getItem('apellidos');


  }

  ngOnInit(): void {
  }

}
