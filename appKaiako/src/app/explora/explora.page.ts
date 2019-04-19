import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explora',
  templateUrl: './explora.page.html',
  styleUrls: ['./explora.page.scss'],
})
export class ExploraPage implements OnInit {
  anuncio: Array<Object>
  constructor() { 
  this.anuncio=[
    { nombre:'Cardio', descr:'ejercicios nuevos',img: '/assets/anun2.jpeg'},
    { nombre:'Brazo', descr:'Rutina ganadora',img: 'assets/anun0.png'},
    { nombre:'Lo mejor', descr:'Runtina publica',img: 'assets/anun1.jpeg'},
  ]

  }

  ngOnInit() {
  }

}
