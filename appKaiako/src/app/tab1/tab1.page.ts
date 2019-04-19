import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  entrenador: Array<Object>
  constructor() { 
  this.entrenador=[
    { nombre:'Pepe Morat', descr:'Running',img: '/assets/Perfil.jpeg'},
    { nombre:'Juan Tequila', descr:'Gym',img: 'assets/Perfil.jpeg'},
    { nombre:'Javier Pompa', descr:'Gym',img: 'assets/Perfil.jpeg'},
  ]

  }
}
