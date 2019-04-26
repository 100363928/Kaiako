import { Component } from '@angular/core';
import { Solicitud,Usuario, TodoService } from './../services/todo.service';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  notificacion:boolean;
  entrenador: Usuario[];
  entrFiltered: Usuario[];
  numbers = [];
  numbersVacios = [];

  constructor(private todoService: TodoService, private lc: LoadingController) { 
    this.initializeItems();
  }

  ngOnInit() {
    this.todoService.getEntrenadores().subscribe(res => {
     console.log(res);
     console.log("Pidiendo entrenadores");
     this.entrenador = res;
     this.entrFiltered = res;
   });
   this.loadTodo();
}

initializeItems(){
  this.entrFiltered = this.entrenador;
}

arrayOne(n: number): any[] {
  return Array(n);
}

arrayTwo(n: number): any[] {
  return Array(5 - n);
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

  async loadTodo() {
    const loading = await this.lc.create({
      message: 'Loading Todo..'
    });

    this.todoService.getUsuario(firebase.auth().currentUser.uid).subscribe(res => {
      loading.dismiss();
      this.notificacion = res.notificacion;
      //this.notificacion = res.notificacion;
    });
    await loading.present();
   
    console.log("Valor"+this.notificacion);
  }
}
