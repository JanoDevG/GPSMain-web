import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from './paginas/principal/principal.component';
import {DespachoComponent} from './paginas/despacho/despacho.component';
import {VerComponent} from './paginas/despacho/ver/ver.component';
import {HorarioComponent} from './paginas/despacho/horario/horario.component';
import {DestinosComponent} from './paginas/despacho/destinos/destinos.component';
import {SupervisorComponent} from './paginas/supervisor/supervisor.component';
import {EliminarEmpresaComponent} from './paginas/principal/eliminar-empresa/eliminar-empresa.component';
import {GerenteComponent} from './paginas/gerente/gerente.component';
import {AuthGuard} from '../guards/auth.guard';
import { FlotaComponent } from './paginas/flota/flota.component';
import { AgregarFlotaComponent } from './paginas/Flota/agregar-flota/agregar-flota.component';







const routes: Routes = [
  {
    path: '',
    canActivate:[AuthGuard],
    children: [
      {path: 'principal', component: PrincipalComponent },
      {path: 'despacho', component: DespachoComponent },
      {path: 'supervisor', component: SupervisorComponent },
      {path: 'eliminarEmpresa', component: EliminarEmpresaComponent },
      {path: 'despacho/Ver', component: VerComponent },
      {path: 'despacho/Horario', component: HorarioComponent },
      {path: 'despacho/Destinos', component: DestinosComponent },
      {path: 'Flota', component: FlotaComponent },
      {path: 'agregar-flota', component: AgregarFlotaComponent },
      {path: 'Gerente', component: GerenteComponent },
      { path: '**', redirectTo: 'panel'}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
