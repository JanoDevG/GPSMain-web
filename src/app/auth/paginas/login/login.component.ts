import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../services/login.service';
import {LoginI} from '../../../models/login.interface';
import {UserLogin} from './login';

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
    return this.apilogin.loginByEmail(this.userL).subscribe(data => {
      console.log(data);
    }, error => console.log('error en llamada a Login: ' + error));
  }


}
