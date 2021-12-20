import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../services/login.service';
import {UserLogin} from './login';
import {response} from '../../../models/account';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'gpsmain-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  usuForm : FormGroup;


  constructor(private fb: FormBuilder,
    private apilogin: LoginService,
              private route:ActivatedRoute,private router:Router) {

    this.usuForm= this.fb.group({
        email:['',Validators.required],
      password:['',Validators.required]


    }
  )}




  errorCredenciales: boolean = false;
  errormsj:string="******credenciales incorrectas******";

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
            this.apilogin.getClietnSecret(response.body).subscribe(value => {
              localStorage.setItem('clientSecret', String(value.body));
              localStorage.setItem('mailAccount', String(response.body.mail));
            }, error => {
              console.error('no se puede guardar clientSecret para backffice: ' + error);
            });
            this.router.navigate(['/panel/despacho']);
            break;
          case 'manager':
            this.apilogin.getClietnSecret(response.body).subscribe(value => {
              localStorage.setItem('clientSecret', String(value.body));
              localStorage.setItem('mailAccount', String(response.body.mail));
            }, error => {
              console.error('no se puede guardar clientSecret para backffice: ' + error);
            });
            this.router.navigate(['/panel/reporte']);
            break;
        }
      }
      account = response;
      console.log('body: ' + JSON.stringify(response));

      console.log('nombre empresa:' + account.body.businessName);


      localStorage.setItem('clave', String(account.body.names));
      localStorage.setItem('apellidos', String(account.body.surnames));
      localStorage.setItem('supervisorMail', String(account.body.mail));
      localStorage.setItem('businessName', String(account.body.businessName));

    }, error => {

      console.log('error en llamada a Login: ' + error)

   this.errorCredenciales= true;

    });
  }


}
