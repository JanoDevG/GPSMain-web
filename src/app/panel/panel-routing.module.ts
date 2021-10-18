import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from './paginas/principal/principal.component';
import {DespachoComponent} from './paginas/despacho/despacho.component';
import {SupervisorComponent} from './paginas/supervisor/supervisor.component';
import {AgregarEmpresaComponent} from './paginas/principal/agregar-empresa/agregar-empresa.component';
import {EliminarEmpresaComponent} from './paginas/principal/eliminar-empresa/eliminar-empresa.component';
import {AuthGuard} from '../guards/auth.guard';
const routes: Routes = [
  {

    path: '',
    canActivate:[AuthGuard],
    children: [
      {path: 'principal', component: PrincipalComponent },
      {path: 'despacho', component: DespachoComponent },
      {path: 'supervisor', component: SupervisorComponent },
      {path: 'agregarEmpresa', component: AgregarEmpresaComponent },
      {path: 'eliminarEmpresa', component: EliminarEmpresaComponent },
      { path: '**', redirectTo: 'panel'}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
