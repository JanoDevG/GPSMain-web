export class Usuario {
  _id?: number;
  nombre: string;
  apellido: string;
  edad: number;
  empresa: string;


  constructor(nombre: string, apellido: string, sexo: string, edad: number, empresa: string ) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.empresa = empresa;

  }


}
