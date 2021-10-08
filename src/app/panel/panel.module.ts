import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { DespachoComponent } from './paginas/despacho/despacho.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    DespachoComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
