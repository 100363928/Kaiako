import { Component } from '@angular/core';
import { Solicitud,Usuario, TodoService } from './../services/todo.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  entrenadorr: Array<Object>
  constructor(private todoService:TodoService,private lc:LoadingController) { 
  this.entrenadorr=[
    { nombre:'Pepe Morat', descr:'Running',img: '/assets/Perfil.jpeg'},
    { nombre:'Juan Tequila', descr:'Gym',img: 'assets/Perfil.jpeg'},
    { nombre:'Javier Pompa', descr:'Gym',img: 'assets/Perfil.jpeg'},
  ]
  }
  entrenador: Usuario[];
  ngOnInit() {
    this.todoService.getEntrenadores().subscribe(res => {
     console.log(res);
     console.log("Pidiendo entrenadores");
     this.entrenador = res;
   });
}

  //UID entrenador de ver mas
  verMas(entrenador){
    console.log(entrenador.id);
    return entrenador
  }
}
