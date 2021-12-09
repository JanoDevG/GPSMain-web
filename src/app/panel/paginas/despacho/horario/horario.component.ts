import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'gpsmain-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  constructor(private router: Router) {
  }

  horaInicio: String = '';
  horaFin: String = '';

  ngOnInit(): void {
  }

  configurarHorario() {
    alert('Horario hábil configurado.');
    this.router.navigate(['/panel/despacho/Ver']);
  }

}
