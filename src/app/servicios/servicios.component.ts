import { Component, OnInit } from '@angular/core';
import { Servicio } from './servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  servicios : any = [

    new Servicio(1, 'Carlos'),
    new Servicio(2, 'Daniel'),
    new Servicio(3, 'Garfio')
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
