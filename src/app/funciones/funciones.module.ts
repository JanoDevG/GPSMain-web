import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionesRoutingModule } from './funciones-routing.module';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { ControlSoporteComponent } from './paginas/usuarios/control-soporte/control-soporte.component';
import { ControlVehiculosComponent } from './paginas/usuarios/control-vehiculos/control-vehiculos.component';
import { ControlEmpresasComponent } from './paginas/usuarios/control-empresas/control-empresas.component';
import { ControlBackofficeComponent } from './paginas/usuarios/control-backoffice/control-backoffice.component';
import { AgregarBackofficeComponent } from './paginas/usuarios/control-backoffice/agregar-backoffice/agregar-backoffice.component';
import { ControlGerentesComponent } from './paginas/usuarios/control-gerentes/control-gerentes.component';
import { AgregarGerentesComponent } from './paginas/usuarios/control-gerentes/agregar-gerentes/agregar-gerentes.component';
import { ControlGpsComponent } from './paginas/usuarios/control-gps/control-gps.component';
import { AgregarGpsComponent } from './paginas/usuarios/control-gps/agregar-gps/agregar-gps.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UsuariosComponent,
    ControlSoporteComponent,
    ControlVehiculosComponent,
    ControlEmpresasComponent,
    ControlBackofficeComponent,
    AgregarBackofficeComponent,
    ControlGerentesComponent,
    AgregarGerentesComponent,
    ControlGpsComponent,
    AgregarGpsComponent
  ],
    imports: [
        CommonModule,
        FuncionesRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class FuncionesModule { }
