import { Component, OnInit } from '@angular/core';

import { IBarChart } from 'src/app/models/charts.interface';

import { DATA_BAR_CHAR } from 'src/app/models/data-charts';
import { DATA_BAR_CHARR } from 'src/app/models/data-charts';



@Component({
  selector: 'gpsmain-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {


  name: any;
  apellidos: any;
  clientsecret: string = "";



  constructor() {

    this.name = localStorage.getItem('clave');
    this.apellidos = localStorage.getItem('apellidos');


  }

  cerrarsesion(){

    localStorage.removeItem('clave');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('clientsecret');
    localStorage.removeItem('supervisorMail');
    localStorage.removeItem('clientSecret');


  }



  data: IBarChart[] = [];
  datas: IBarChart[] = [];

  view: [number, number] = [1200, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Conductor';
  showYAxisLabel = true;
  yAxisLabel = 'velocidad K/M';

  colorScheme = {
    domain: ['#21d912', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  colorSchemes = {
    domain: ['#e0572e', '#360f72', '#18699b', '#911a1a']
  };

  ngOnInit(): void {
    this.data = DATA_BAR_CHAR;
    this.datas = DATA_BAR_CHARR;
    setTimeout(() => {
      console.log('******');
      const dataPeru = {
        name: 'Perú',
        value: 2000,
        extra: {
          code: 'pe'
        }
      };
      this.data = [...this.data, dataPeru];
    }, 10000);

  }



  onSelect(event: Event): void {
    console.log(event);
  }
}

