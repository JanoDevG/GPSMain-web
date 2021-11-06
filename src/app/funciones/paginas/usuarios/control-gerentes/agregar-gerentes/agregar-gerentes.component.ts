import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../../../services/supervisor/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {responseCRUDAccount} from '../../control-backoffice/agregar-backoffice/responseCRUDAccount';
import {account, Activity, GPS} from '../../../../../models/account';

@Component({
  selector: 'gpsmain-agregar-gerentes',
  templateUrl: './agregar-gerentes.component.html',
  styleUrls: ['./agregar-gerentes.component.css']
})
export class AgregarGerentesComponent implements OnInit {

  constructor(private apiAccount: AccountService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  newAccount: account = new account('', '', '', new Array<Activity>(), new Array<GPS>(), '', '', '', '');

  onCreate() {
    this.newAccount.password = window.btoa(unescape(encodeURIComponent(this.newAccount.password.toString())));
    this.newAccount.profile = 'manager';
    this.apiAccount.createAccount(this.newAccount, 'CREATE').subscribe((value: responseCRUDAccount) => {
      if (value.status == 'CREATED') {
        this.router.navigate(['/panel/supervisor']);
      } else {
        // TODO enviar mensaje de mal creación de cuenta nueva
      }
    });
  }
}
