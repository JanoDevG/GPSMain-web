import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './paginas/login/login.component';
import {RegistroComponent} from './paginas/registro/registro.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: '**', redirectTo: 'login'}
    ]
  }
  ];


@NgModule({

  imports: [
RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
