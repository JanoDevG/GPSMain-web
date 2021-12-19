import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CrearUsuarioComponent} from './components/crear-usuario/crear-usuario.component';
import {ListarUsuarioComponent} from './components/listar-usuario/listar-usuario.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import { RutaComponent } from './Mapa/paginas/ruta/ruta.component';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {NgxChartsModule} from '@swimlane/ngx-charts';


const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};


@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    RutaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
