import { Component, OnInit } from '@angular/core';
import {account} from '../../../../models/account';
import {AccountService} from '../../../../services/supervisor/account.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'gpsmain-control-backoffice',
  templateUrl: './control-backoffice.component.html',
  styleUrls: ['./control-backoffice.component.css']
})
export class ControlBackofficeComponent implements OnInit {

  constructor(private apiAccount: AccountService,
              private route: ActivatedRoute, private router: Router) { }

  accounts : Array<account> = new Array<account>();

  ngOnInit(): void {
    this.apiAccount.getAccounts()
  }

}
