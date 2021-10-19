import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../../../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../../../../services/supervisor/account.service';
import {account, Activity, GPS, response} from '../../../../../models/account';
import {responseCRUDAccount} from './responseCRUDAccount';

@Component({
  selector: 'gpsmain-agregar-backoffice',
  templateUrl: './agregar-backoffice.component.html',
  styleUrls: ['./agregar-backoffice.component.css']
})
export class AgregarBackofficeComponent implements OnInit {


  constructor(private apiAccount: AccountService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  newAccount: account = new account('', '', '', new Array<Activity>(), new Array<GPS>(), '', '', '', '');
  response: responseCRUDAccount = new responseCRUDAccount('', '');

  onCreate() {
    this.newAccount.password = window.btoa(unescape(encodeURIComponent(this.newAccount.password.toString())));
    this.newAccount.profile = 'backoffice';
    this.apiAccount.createAccount(this.newAccount, 'CREATE').subscribe(value => {
      this.response = value;
    });
    if (this.response.status == 'OK') {
      this.router.navigate(['/panel/supervisor']);
    } else {
      // TODO enviar mensaje de mal creación de cuenta nueva
    }
  }
}
