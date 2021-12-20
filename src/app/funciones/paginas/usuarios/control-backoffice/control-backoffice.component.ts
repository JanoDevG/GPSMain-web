import {Component, OnInit} from '@angular/core';
import {account} from '../../../../models/account';
import {AccountService} from '../../../../services/supervisor/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GpsService} from '../../../../services/supervisor/gps.service';

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

  ngOnInit(): void {
    this.apiAccount.getAccounts('backoffice').subscribe(value => {
      this.accounts = value.body;
    });
  }

  gestionarGPS(account: account) {
    localStorage.setItem('correoCuenta', String(account.mail));
    this.router.navigate(['/funciones/gestionar-gps']);
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
