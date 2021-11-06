import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../../services/supervisor/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {account} from '../../../../models/account';

@Component({
  selector: 'gpsmain-control-gerentes',
  templateUrl: './control-gerentes.component.html',
  styleUrls: ['./control-gerentes.component.css']
})
export class ControlGerentesComponent implements OnInit {

  constructor(private apiAccount: AccountService,
              private route: ActivatedRoute, private router: Router) {
  }

  accounts: Array<account> = new Array<account>();

  ngOnInit(): void {
    this.apiAccount.getAccounts('manager').subscribe(value => {
      this.accounts = value.body;
    });
  }

  eliminarCuenta(account: account) {
    this.apiAccount.deleteAccount(account, 'DELETE', account.mail).subscribe(data => {
      console.log('eliminado');
      if (data.status == 'OK') {
        this.router.navigate(['/panel/supervisor']);
      }
    }, error => {
      console.log('cuenta no se pudo eliminar: ' + error);
    });
  }

}
