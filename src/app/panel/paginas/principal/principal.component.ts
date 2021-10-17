import {Component, Inject, Input, OnInit} from '@angular/core';
import {CountBusinessService} from '../../../services/admin/countBusiness.service';
import {error} from 'protractor';
import {CountUsersService} from '../../../services/admin/countUsers.service';

@Component({
  selector: 'gpsmain-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public empresas: Number = 0;
  public usuarios: Number = 0;

  constructor(private countBusinessService: CountBusinessService,
              private countUsersService: CountUsersService
  ) {
  }


  ngOnInit(): void {
    this.countBusinessService.getCountBusiness().subscribe((value: Number) => {
      this.empresas = value;
    });
    this.countUsersService.getCountUsers().subscribe((value: Number) => {
      this.usuarios = value;
    });
  }

}
