import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosComponent} from './paginas/usuarios/usuarios.component';
import {ControlSoporteComponent} from './paginas/usuarios/control-soporte/control-soporte.component';
import {ControlVehiculosComponent} from './paginas/usuarios/control-vehiculos/control-vehiculos.component';
import {ControlEmpresasComponent} from './paginas/usuarios/control-empresas/control-empresas.component';
import { ControlBackofficeComponent } from './paginas/usuarios/control-backoffice/control-backoffice.component';
import { AgregarBackofficeComponent } from './paginas/usuarios/control-backoffice/agregar-backoffice/agregar-backoffice.component';
import { ControlGerentesComponent } from './paginas/usuarios/control-gerentes/control-gerentes.component';
import { AgregarGerentesComponent } from './paginas/usuarios/control-gerentes/agregar-gerentes/agregar-gerentes.component';
import { ControlGpsComponent } from './paginas/usuarios/control-gps/control-gps.component';
import { AgregarGpsComponent } from './paginas/usuarios/control-gps/agregar-gps/agregar-gps.component';






const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'usuarios', component: UsuariosComponent },
      {path: 'soporte-control', component: ControlSoporteComponent },
      {path: 'vehiculos-control', component: ControlVehiculosComponent },
      {path: 'empresas-control', component: ControlEmpresasComponent },
      {path: 'backoffice-control', component: ControlBackofficeComponent },
      {path: 'backoffice-agregar', component: AgregarBackofficeComponent },
      {path: 'gerentes-control', component: ControlGerentesComponent },
      {path: 'gerentes-agregar', component: AgregarGerentesComponent },
      {path: 'gps-control', component: ControlGpsComponent },
      {path: 'gps-agregar', component: AgregarGpsComponent },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionesRoutingModule { }
