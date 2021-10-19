import {Component, OnInit} from '@angular/core';
import {account, Activity, GPS} from '../../../../models/account';
import {AccountService} from '../../../../services/supervisor/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ListAccount} from './ListAccount';

@Component({
  selector: 'gpsmain-control-backoffice',
  templateUrl: './control-backoffice.component.html',
  styleUrls: ['./control-backoffice.component.css']
})
export class ControlBackofficeComponent implements OnInit {

  constructor(private apiAccount: AccountService,
              private route: ActivatedRoute, private router: Router) {
  }

  accounts: Array<account> = new Array<account>();

  accountMail: String = '';


  ngOnInit(): void {
    this.apiAccount.getAccounts('backoffice').subscribe(value => {
      this.accounts = value.body;
    });
  }

  eliminarCuenta(account: account) {
    this.apiAccount.deleteAccount(account, 'DELETE').subscribe(data => {
      console.log('eliminado');

    }, error => {
      console.log('no eliminado');

    })


  }


}
