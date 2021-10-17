import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../services/login.service';
import {LoginI} from '../../../models/login.interface';
import {UserLogin} from './login';
import {response} from './account';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'gpsmain-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  constructor(private apilogin: LoginService,
              private route:ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
  }
  userL: UserLogin = new UserLogin('', '');

  onLogin() {
    let account: response;
    this.apilogin.loginByEmail(this.userL).subscribe((response: response) => {
      if (response.status == 'OK'){
        switch (response.body.profile) {
          case 'admin':
            this.router.navigate(['/panel/principal']);
            break;
          case 'supervisor':
            this.router.navigate(['/panel/supervisor']);
            break;
          case 'backoffice':
            this.router.navigate(['/panel/despacho']);
            break;
          case 'manager':
            this.router.navigate(['/panel/gerente']);
            break;
        }
      }else{
        // Enviar mensaje de error al intentar logear
      }
      account = response;
      console.log("body: " + JSON.stringify(response))
      console.log("nombre empresa:" + account.body.businessName)
    }, error => console.log('error en llamada a Login: ' + error));
  }


}
