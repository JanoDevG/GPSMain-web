import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../services/login.service';
import {LoginI} from '../../../models/login.interface';

@Component({
  selector: 'gpsmain-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  user = {
    Xusuario: '',
    Xpassword: ''
  }

  constructor(private apilogin:LoginService) { }

  ngOnInit(): void {
  }

  onLogin(user: LoginI){
    this.apilogin.loginByEmail(this.user).subscribe(data => {
      console.log(data);

    });
  }



}
