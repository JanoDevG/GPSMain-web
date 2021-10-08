import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosComponent} from './paginas/usuarios/usuarios.component';
import {ControlConductoresComponent} from './paginas/usuarios/control-conductores/control-conductores.component';
import {ControlDespachoComponent} from './paginas/usuarios/control-despacho/control-despacho.component';
import {ControlSoporteComponent} from './paginas/usuarios/control-soporte/control-soporte.component';
import {ControlAdminstradoresComponent} from './paginas/usuarios/control-adminstradores/control-adminstradores.component';
import {ControlVehiculosComponent} from './paginas/usuarios/control-vehiculos/control-vehiculos.component';
import {ControlEmpresasComponent} from './paginas/usuarios/control-empresas/control-empresas.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'usuarios', component: UsuariosComponent },
      {path: 'conductores-control', component: ControlConductoresComponent },
      {path: 'despacho-control', component: ControlDespachoComponent },
      {path: 'soporte-control', component: ControlSoporteComponent },
      {path: 'administrador-control', component: ControlAdminstradoresComponent },
      {path: 'vehiculos-control', component: ControlVehiculosComponent },
      {path: 'empresas-control', component: ControlEmpresasComponent },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionesRoutingModule { }
