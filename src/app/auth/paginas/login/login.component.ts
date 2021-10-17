import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../services/login.service';
import {LoginI} from '../../../models/login.interface';
import {UserLogin} from './login';
import {response} from './account';

@Component({
  selector: 'gpsmain-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  constructor(private apilogin: LoginService) {
  }

  ngOnInit(): void {
  }
  userL: UserLogin = new UserLogin('', '');

  onLogin() {
    let account: response;
    this.apilogin.loginByEmail(this.userL).subscribe((response: response) => {
      account = response;
      console.log("body: " + JSON.stringify(response))
      console.log("nombre empresa:" + account.body.businessName)
    }, error => console.log('error en llamada a Login: ' + error));
  }


}
