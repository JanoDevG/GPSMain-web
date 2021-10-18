import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrearUsuarioComponent} from './components/crear-usuario/crear-usuario.component';
import {ListarUsuarioComponent} from './components/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'panel',
    loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule)
  },
  {
    path: 'funciones',
    loadChildren: () => import('./funciones/funciones.module').then(m => m.FuncionesModule)
  },
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  {path: 'editar-usuario/:id', component: CrearUsuarioComponent},
  {path: 'listar-usuario', component: ListarUsuarioComponent},
  {
    path: '**',
    redirectTo: 'inicio/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
