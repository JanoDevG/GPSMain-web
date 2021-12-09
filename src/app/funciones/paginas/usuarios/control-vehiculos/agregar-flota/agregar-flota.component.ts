import {Component, OnInit} from '@angular/core';
import {Fleet} from '../../../../../models/Fleet';
import {FleetService} from '../../../../../services/supervisor/fleet.service';
import {ResponseString} from '../../../../../models/ResponseString';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'gpsmain-agregar-flota',
  templateUrl: './agregar-flota.component.html',
  styleUrls: ['./agregar-flota.component.css']
})
export class AgregarFlotaComponent implements OnInit {

  constructor(private apiFlota: FleetService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  flota: Fleet = new Fleet('', '', '', '', '', '', false, 0);

  ngOnInit(): void {
  }

  agregarFlota() {
    this.apiFlota.crearFlota(this.flota).subscribe((res: ResponseString) => {
      if (res.status === 'CREATED') {
        this.router.navigate(['/panel/supervisor']);
      } else {
        console.log(res.status);
        console.log(res.body);
      }
    }, error => {
      console.log('No se puede agregar flota nueva');
      console.error(error);
    });
  }

}
