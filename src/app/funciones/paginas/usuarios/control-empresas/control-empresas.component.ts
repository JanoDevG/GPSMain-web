import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../../services/supervisor/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {account, Activity, GPS} from '../../../../models/account';
import {responseCRUDAccount} from '../control-backoffice/agregar-backoffice/responseCRUDAccount';
import {EnterpriseAdminService} from '../../../../services/admin/enterpriseAdmin.service';

@Component({
  selector: 'gpsmain-control-empresas',
  templateUrl: './control-empresas.component.html',
  styleUrls: ['./control-empresas.component.css']
})
export class ControlEmpresasComponent implements OnInit {

  constructor(private enterpriseAdminService: EnterpriseAdminService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  newAccount: account = new account('', '', '', new Array<Activity>(), new Array<GPS>(), '', '', '', '');


  onCreate() {
    this.newAccount.password = window.btoa(unescape(encodeURIComponent(this.newAccount.password.toString())));
    this.newAccount.profile = 'supervisor';
    this.enterpriseAdminService.createEnterprise(this.newAccount, this.newAccount.businessName).subscribe(() => {
      this.router.navigate(['/panel/principal']);
    });
  }

}
