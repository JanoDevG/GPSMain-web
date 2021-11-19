import {EventEmitter, Injectable } from '@angular/core';
// @ts-ignore
import * as mapboxgl from 'mapbox-gl';
// @ts-ignore
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder' ;
import {rejects} from "assert";
import {environment} from '../../environments/environment';
import {join} from "path";
import {HttpClient} from "@angular/common/http";
import {Socket} from "ngx-socket-io";
import {find} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MapcustomService {

  cbAddress:EventEmitter<any> = new EventEmitter<any>();



  mapbox = (mapboxgl as typeof mapboxgl);
   map: mapboxgl.Map;
   style = 'mapbox://styles/mapbox/streets-v11';
   lat = -33.52246269292288;
   lng = -70.59823898797629;
   zoom = 3;
   wayPoints: Array <any>=[];
   markerDriver: any = null;



  constructor(private httpClient: HttpClient,private socket:Socket) {
    this.mapbox.accessToken = environment.mapPk;


  }

  buildMap(): Promise<any>{

    return new Promise<any>((resolve, rejects) => {
try{
  this.map = new mapboxgl.Map({
  container:'map',
  style: this.style,
  zoom: this.zoom,



  center: [this.lng, this.lat]


});
  this.map.addControl(new mapboxgl.NavigationControl());



  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl



  });

  geocoder.on('result',($event: any) => {

    const {result}= $event;

    geocoder.clear();
    console.log('event',result)
    this.cbAddress.emit(result);

  })


  resolve({

    map: this.map,
    geocoder
  });


}catch (e) {
  rejects(e);

}
    });

  }


  loadCoords(coords: any[][]): void {
    console.log('--------',coords);

    const url = [
      `https://api.mapbox.com/directions/v5/mapbox/driving/`,
      `${coords[0][0]},${coords[0][1]};${coords[1][0]},${coords[1][1]}`,
      `?steps=true&geometries=geojson&access_token=${environment.mapPk}`,
    ].join('');

this.httpClient.get(url).subscribe((res:any)=>{
  const data = res.routes[0];
const route = data.geometry.coordinates;

  this.map.addSource('route',{
    type:'geojson',
    data:{
      type:'Feature',
      properties:{},
      geometry: {
        type: 'LineString',
        coordinates: route

      }

    }


  });


  this.map.addLayer({

    id:'route',
    type:'line',
    source: 'route',
    layout:{
      'line-join':'round',
      'line-cap':'round'


    },

    paint:{
      'line-color':'red',
      'line-width':5



    }




  });



this.wayPoints = route;
this.map.fitBounds([route[0],route[route.length-1]],{

  padding:100

})


  this.socket.emit('find-driver',{points:route});


});












console.log('*********',url)
  }


// @ts-ignore
  addMarkerCustom(coords):void   {

    console.log('----------->', coords);



     const el = document.createElement('div');
     el.className= 'marker';
this.markerDriver = new mapboxgl.Marker(el);
this.markerDriver.setLngLat(coords).addTo(this.map);



}




}