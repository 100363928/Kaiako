import { Component } from '@angular/core';
import { Solicitud,Usuario, TodoService } from './../services/todo.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  entrenador: Usuario[];
  entrFiltered: Usuario[];
  constructor(private todoService:TodoService,private lc:LoadingController) { 
    this.initializeItems();
  }

  ngOnInit() {
    this.todoService.getEntrenadores().subscribe(res => {
     console.log(res);
    console.log("Pidiendo entrenadores");
   this.entrenador = res;
   });
}

initializeItems(){
  this.entrFiltered = this.entrenador;

}
getEntrenadores(ev: any){
  //Inicializar de nuevo el array en caso de que haya cambiado algo
  this.initializeItems();
  let val = ev.target.value;

  if(val && val.trim() != ''){
    this.entrFiltered = this.entrenador.filter((ev) => {
      return (ev.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}

  //UID entrenador de ver mas
  verMas(entrenador){
    console.log(entrenador.id);
    return entrenador
  }
}
