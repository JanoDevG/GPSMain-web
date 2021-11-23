import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MapcustomService} from "../../../services/mapcustom.service";
import {any} from "codelyzer/util/function";
import {promise} from "protractor";
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'gpsmain-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  @ViewChild('asGeoCoder') asGeoCoder: any;

  modeInput='start';


  wayPoints:Waypoints= {start:null, end: null};

  constructor(private MapcustomService: MapcustomService, private renderer2: Renderer2,
              private socket:Socket) {

  }


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

console.log('desde server',coords);
this.MapcustomService.addMarkerCustom(coords);
    })

  }


  drawRoute():void{



console.log('*******puntos de origen y destino',this.wayPoints);
const coords =[
  this.wayPoints.start.center,
  this.wayPoints.end.center


];


this.MapcustomService.loadCoords(coords)
  }










  changeMode(mode: string):void{

    this.modeInput = mode;

  }


  testMarker() : void{
    this.MapcustomService.addMarkerCustom([-70.60833957104123,-33.55410112177]);

  }
}




export class Waypoints{

  start:any
  end:any


}
