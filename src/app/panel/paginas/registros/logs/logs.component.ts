import {Component, OnInit} from '@angular/core';
import {account, Activity, GPS} from '../../../../models/account';
import {AccountService} from '../../../../services/supervisor/account.service';

@Component({
  selector: 'gpsmain-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  constructor(private apiAccout: AccountService) {
  }

  p: number = 1;

  account: account = new account('', '', '', new Array<Activity>(), new Array<GPS>(), '', '', '', '');


  ngOnInit(): void {
    this.apiAccout.getAccountFromlogger().subscribe(value => {
      this.account = value.body;
    });
  }

}
