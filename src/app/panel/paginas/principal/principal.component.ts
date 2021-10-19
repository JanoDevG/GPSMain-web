import {Component, Inject, Input, OnInit} from '@angular/core';
import {GetDataAdminService} from '../../../services/admin/getDataAdmin.service';
import {error} from 'protractor';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'gpsmain-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public empresas: Number = 0;
  public usuarios: Number = 0;

  name: any;
  apellidos: any;
  clientsecret:string = "";

  constructor(private countBusinessService: GetDataAdminService,private fb: FormBuilder
  ) {

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
    localStorage.setItem('clientSecret',this.clientsecret);
  }



  ngOnInit(): void {
    this.countBusinessService.getCountBusiness().subscribe((value: Number) => {
      this.empresas = value;
    });
    this.countBusinessService.getCountUsers().subscribe((value: Number) => {
      this.usuarios = value;
    });
  }

}
