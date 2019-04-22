import { Component, OnInit } from '@angular/core';
import { Solicitud,Usuario, TodoService } from './../services/todo.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-explora',
  templateUrl: './explora.page.html',
  styleUrls: ['./explora.page.scss'],
})
export class ExploraPage /*implements OnInit*/ {
  anuncio: Object[] = [];
  anuncioFiltered: Object[] = [];
  constructor(private todoService:TodoService,private lc:LoadingController) { 
  this.anuncio=[
    { nombre:'Cardio', descr:'Ejercicios nuevos',img: '/assets/anun2.jpeg'},
    { nombre:'Brazo', descr:'Rutina ganadora',img: 'assets/anun0.png'},
    { nombre:'Lo mejor', descr:'Runtina publica',img: 'assets/anun1.jpeg'},
    { nombre:'Lo más mejor', descr:'Mejores ejercicios semanales',img: 'assets/anun0.png'},
    { nombre:'Lo mazo más mejor', descr:'Runtina publica',img: 'assets/anun2.jpeg'},
  ]
  this.initializeItems();
  }
 
  //ngOnInit() {}

  initializeItems(){
    this.anuncioFiltered = this.anuncio;

  }

  getAnuncios(ev: any){
    //Inicializar de nuevo el array en caso de que haya cambiado algo
    this.initializeItems();
    let val = ev.target.value;

    if(val && val.trim() != ''){
      this.anuncioFiltered = this.anuncio.filter((ev) => {
        //no funciona porque aquí necesito acceder a la parte 'nombre' de cada objeto del array de anuncios para compararlo
        return (ev[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}