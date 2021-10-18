import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {Usuario} from '../../models/usuario';
import { ToastrService} from 'ngx-toastr';


@Component({
  selector: 'gpsmain-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  listarUsuarios: Usuario[] = [];

  constructor(private _usuarioService: UsuarioService,
              private toastr: ToastrService
             ) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }



  obtenerUsuario() {
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listarUsuarios = data;

    }, error => {
      console.log(error);

    })
  }

  eliminarUsuario(id: any) {
    this._usuarioService.eliminarUsuario(id).subscribe(data => {
      this.obtenerUsuario();
    }, error => {
      console.log(error);
    })
  }





}
