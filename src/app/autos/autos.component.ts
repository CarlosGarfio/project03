import { Component, OnInit } from '@angular/core';
import { Auto } from './auto';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {

  // Declaracion de arreglo de la clase Contacto
  autos : any = [

    new Auto(1, 'Autos'),
    new Auto(2, 'Moda'),
    new Auto(3, 'Rock N Roll')
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
