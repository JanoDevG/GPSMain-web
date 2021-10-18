import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { DespachoComponent } from './paginas/despacho/despacho.component';
import { SupervisorComponent } from './paginas/supervisor/supervisor.component';
import { AgregarEmpresaComponent } from './paginas/principal/agregar-empresa/agregar-empresa.component';
import { EliminarEmpresaComponent } from './paginas/principal/eliminar-empresa/eliminar-empresa.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    DespachoComponent,
    SupervisorComponent,
    AgregarEmpresaComponent,
    EliminarEmpresaComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
