import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../../models/usuario';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'gpsmain-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  titulo = 'crear Usuario';

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: UsuarioService,
              private aRouter:a
  ) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      empresa: ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }

  agregarUsuario() {
    console.log(this.usuarioForm);

 const USUARIO: Usuario = {
  nombre: this.usuarioForm.get('nombre')?.value,
  apellido: this.usuarioForm.get('apellido')?.value,
  edad: this.usuarioForm.get('edad')?.value,
  empresa: this.usuarioForm.get('empresa')?.value,


}
this._usuarioService.guardarUsuario(USUARIO).subscribe(data => {
  this.router.navigate(['/listar-usuario']);
  }, error => {

  console.log(error)
  this.usuarioForm.reset();

})

  }

}
