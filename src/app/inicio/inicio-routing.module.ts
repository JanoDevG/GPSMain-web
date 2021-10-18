import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './paginas/home/home.component';


const routes: Routes = [
  {
  path: '',
  children: [
  {path: 'home', component: HomeComponent }
]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
