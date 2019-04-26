import { Component } from '@angular/core';
import {ejercicio,rutina,CrearRutinasService} from '../../app/services/crear-rutinas.service';
import * as firebase from 'firebase/app';
import { LoadingController } from '@ionic/angular';
import { Solicitud,Usuario, TodoService } from './../services/todo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

notificacion:boolean;
rutina:rutina[]=[];
open:any=[{nombre:'',ejer:[],open:false}];
ejercicios:ejercicio[]=[];

constructor(private cr:CrearRutinasService,private lc: LoadingController,private todoService: TodoService){
  this.cr.getMisRutinas().subscribe(res => {
    console.log('Pidiendo rutinas');
    this.rutina= res;
    console.log(this.rutina.length);
  });
}

ngOnInit(){

this.rutina.map(res=>{
  this.open.nombre=res.nombre;
  this.open.ejer=res.ejer;
})
  
}

toggleSection(index){
  this.open[index].open=!this.open[index].open;
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
