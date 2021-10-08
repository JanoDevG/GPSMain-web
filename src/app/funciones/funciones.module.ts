import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionesRoutingModule } from './funciones-routing.module';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import {ControlConductoresComponent} from './paginas/usuarios/control-conductores/control-conductores.component';
import { ControlSoporteComponent } from './paginas/usuarios/control-soporte/control-soporte.component';
import { ControlAdminstradoresComponent } from './paginas/usuarios/control-adminstradores/control-adminstradores.component';
import { ControlDespachoComponent } from './paginas/usuarios/control-despacho/control-despacho.component';
import { ControlVehiculosComponent } from './paginas/usuarios/control-vehiculos/control-vehiculos.component';
import { ControlEmpresasComponent } from './paginas/usuarios/control-empresas/control-empresas.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    ControlConductoresComponent,
    ControlSoporteComponent,
    ControlAdminstradoresComponent,
    ControlDespachoComponent,
    ControlVehiculosComponent,
    ControlEmpresasComponent
  ],
  imports: [
    CommonModule,
    FuncionesRoutingModule
  ]
})
export class FuncionesModule { }
