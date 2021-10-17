import {Component, Inject, Input, OnInit} from '@angular/core';
import {GetDataAdminService} from '../../../services/admin/getDataAdmin.service';
import {error} from 'protractor';

@Component({
  selector: 'gpsmain-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public empresas: Number = 0;
  public usuarios: Number = 0;

  constructor(private countBusinessService: GetDataAdminService
  ) {
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
