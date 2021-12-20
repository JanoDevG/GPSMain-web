import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { DespachoComponent } from './paginas/despacho/despacho.component';
import { SupervisorComponent } from './paginas/supervisor/supervisor.component';
import { EliminarEmpresaComponent } from './paginas/principal/eliminar-empresa/eliminar-empresa.component';
import {FormsModule} from '@angular/forms';
import { GerenteComponent } from './paginas/gerente/gerente.component';
import { FlotaComponent } from './paginas/flota/flota.component';
import { VerComponent } from './paginas/despacho/ver/ver.component';
import { HorarioComponent } from './paginas/despacho/horario/horario.component';
import { DestinosComponent } from './paginas/despacho/destinos/destinos.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReporteComponent} from './paginas/reporte/reporte.component';
import {RegistrosComponent} from './paginas/registros/registros.component';
import {AgregarFlotaComponent} from '../funciones/paginas/usuarios/control-vehiculos/agregar-flota/agregar-flota.component';
import {MostrarComponent} from './paginas/registros/mostrar/mostrar.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    DespachoComponent,
    SupervisorComponent,
    EliminarEmpresaComponent,
    GerenteComponent,
    FlotaComponent,
    AgregarFlotaComponent,
    VerComponent,
    HorarioComponent,
    DestinosComponent,
    ReporteComponent,
    RegistrosComponent,
    VerComponent,
    MostrarComponent


  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    NgxChartsModule,
    NgxPaginationModule
  ]
})
export class PanelModule { }
