import {Component, OnInit} from '@angular/core';
import {GpsService} from '../../../../../services/supervisor/gps.service';
import {ActivatedRoute, Router} from '@angular/router';
import {responseCRUDAccount} from '../../control-backoffice/agregar-backoffice/responseCRUDAccount';

@Component({
  selector: 'gpsmain-agregar-gps',
  templateUrl: './agregar-gps.component.html',
  styleUrls: ['./agregar-gps.component.css']
})
export class AgregarGpsComponent implements OnInit {

  constructor(private apiGps: GpsService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  crearGPS() {
    this.apiGps.crearGPS().subscribe(data => {
      this.router.navigate(['/panel/supervisor'])
    });
  }

}
