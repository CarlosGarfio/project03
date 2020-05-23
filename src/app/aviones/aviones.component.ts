import { Component, OnInit } from '@angular/core';
import { Avion } from './avion';

@Component({
  selector: 'app-aviones',
  templateUrl: './aviones.component.html',
  styleUrls: ['./aviones.component.css']
})
export class AvionesComponent implements OnInit {

  aviones : any = [
    new Avion(1, 'Salinas'),
    new Avion(2, 'Mato'),
    new Avion(3, 'Colosio')
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
