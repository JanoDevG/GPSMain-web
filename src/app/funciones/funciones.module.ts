import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionesRoutingModule } from './funciones-routing.module';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import {ControlConductoresComponent} from './paginas/usuarios/control-conductores/control-conductores.component';
import { ControlSoporteComponent } from './paginas/usuarios/control-soporte/control-soporte.component';
import { ControlVehiculosComponent } from './paginas/usuarios/control-vehiculos/control-vehiculos.component';
import { ControlEmpresasComponent } from './paginas/usuarios/control-empresas/control-empresas.component';
import { ControlBackofficeComponent } from './paginas/usuarios/control-backoffice/control-backoffice.component';
import { AgregarBackofficeComponent } from './paginas/usuarios/control-backoffice/agregar-backoffice/agregar-backoffice.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    ControlConductoresComponent,
    ControlSoporteComponent,
    ControlVehiculosComponent,
    ControlEmpresasComponent,
    ControlBackofficeComponent,
    AgregarBackofficeComponent
  ],
  imports: [
    CommonModule,
    FuncionesRoutingModule
  ]
})
export class FuncionesModule { }
