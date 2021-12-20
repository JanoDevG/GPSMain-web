import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../services/supervisor/account.service';
import {account} from '../../../models/account';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'gpsmain-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  constructor(private apiAccount: AccountService,
              private route: ActivatedRoute, private router: Router) {

  }

  users: Array<account> = new Array<account>();

  ngOnInit(): void {
    this.apiAccount.getAllAccounts().subscribe(value => {
      this.users = value.body;
    });
  }

  verLogs(account: account) {
    localStorage.setItem('mailLog', String(account.mail));
    this.router.navigate(['/panel/logs']);
  }

}
