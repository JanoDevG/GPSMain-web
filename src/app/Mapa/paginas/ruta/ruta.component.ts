import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MapcustomService} from '../../../services/mapcustom.service';
import {Socket} from 'ngx-socket-io';
import {CoordenadasService} from '../../../services/supervisor/coordenate.service';

@Component({
  selector: 'gpsmain-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  @ViewChild('asGeoCoder') asGeoCoder: any;

  modeInput = 'start';

  wayPoints: Waypoints = {start: null, end: null};

  constructor(private MapcustomService: MapcustomService, private renderer2: Renderer2,
              private socket: Socket,
              private coordinatesService: CoordenadasService) {
  }

  viaje: Viaje = new Viaje(new Partida('', new Array<Number>()), '', new Destino('', new Array<Number>()), new Array<Coordenadas>());


  ngOnInit(): void {
    this.MapcustomService.buildMap()
      .then(({geocoder, map}) => {
        this.renderer2.appendChild(this.asGeoCoder.nativeElement,
          geocoder.onAdd(map)
        );
        console.log('todo biennn');
      })
      .catch((err) => {
        console.log('****************Error****************', err);
      });
    this.MapcustomService.cbAddress.subscribe((getPoint) => {
      if(this.modeInput=== 'start'){
        this.wayPoints.start = getPoint;
      }
      if(this.modeInput=== 'end'){
        this.wayPoints.end = getPoint;
      }
    });
    // @ts-ignore
    this.socket.fromEvent('position').subscribe(({coords}) => {
      let date: Date = new Date();
      console.log('desde server: ' + String(new Date()), coords);
      this.MapcustomService.addMarkerCustom(coords);
      this.viaje.coordenadas.push(new Coordenadas(coords, date.getHours(), date.getMinutes(), date.getSeconds(), date.getDay(), date.getMonth()));

      this.coordinatesService.agregarCoordendas(this.viaje).subscribe();
    });
  }

  drawRoute(): void {
    console.log('*******puntos de origen y destino', this.wayPoints);
    const coords = [
      this.wayPoints.start.center,
      this.wayPoints.end.center
    ];
    this.MapcustomService.loadCoords(coords);
    this.viaje.partida.partida = this.wayPoints.start.place_name_es;
    this.viaje.partida.coordenadas = this.wayPoints.start.center;
    this.viaje.destino.destino = this.wayPoints.end.place_name_es;
    this.viaje.destino.coordenadas = this.wayPoints.end.center;
    this.viaje.patente = String(localStorage.getItem('patente'));
    this.coordinatesService.crearRuta(this.viaje).subscribe();
  }

  cargarruta(): void {
    const coords = [
      this.wayPoints.start.center,
      this.wayPoints.end.center
    ];
    this.MapcustomService.guardarcoord(coords);
  }

  Rescatarnombre(): void {
    const coords = [
      this.wayPoints.start.place_name,
      this.wayPoints.end.place_name
    ];
    this.MapcustomService.nombreslugares(coords);
  }

  changeMode(mode: string): void {
    this.modeInput = mode;
  }

  testMarker(): void {
    this.MapcustomService.addMarkerCustom([-70.60833957104123, -33.55410112177]);
  }

  guardarRuta() {
    alert('Ruta guardada.');
  }
}

export class Waypoints {
  start: any;
  end: any;
}

export class Viaje {
  constructor(public partida: Partida,
              public patente: String,
              public destino: Destino,
              public coordenadas: Array<Coordenadas>) {
  }

}

export class Partida {
  constructor(public partida: String,
              public coordenadas: Array<String>) {
  }
}

export class Destino {
  constructor(public destino: String,
              public coordenadas: Array<String>) {
  }
}

export class Coordenadas {
  constructor(public coordenada: Array<String>,
              public hora: Number,
              public minuto: Number,
              public segundo: Number,
              public dia: Number,
              public mes: Number) {
  }
}
