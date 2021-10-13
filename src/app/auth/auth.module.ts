import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './paginas/registro/registro.component';
import { LoginComponent } from './paginas/login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
