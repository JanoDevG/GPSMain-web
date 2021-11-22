import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpsmain-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  constructor() { }

  nameBackOffice : String = '';
  businessName : String = '';

  ngOnInit(): void {
    this.nameBackOffice = String(localStorage.getItem('clave'));
    this.businessName = String(localStorage.getItem('businessName'));
  }

}
