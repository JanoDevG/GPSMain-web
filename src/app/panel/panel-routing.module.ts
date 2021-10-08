import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from './paginas/principal/principal.component';
import {DespachoComponent} from './paginas/despacho/despacho.component';

const routes: Routes = [
  {

    path: '',
    children: [
      {path: 'principal', component: PrincipalComponent },
      {path: 'despacho', component: DespachoComponent },
      { path: '**', redirectTo: 'panel'}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
