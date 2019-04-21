import { Component, OnInit } from '@angular/core';
import { Solicitud,Usuario, TodoService } from './../services/todo.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-explora',
  templateUrl: './explora.page.html',
  styleUrls: ['./explora.page.scss'],
})
export class ExploraPage implements OnInit {
  anuncio: Array<Object>
  constructor(private todoService:TodoService,private lc:LoadingController) { 
  this.anuncio=[
    { nombre:'Cardio', descr:'ejercicios nuevos',img: '/assets/anun2.jpeg'},
    { nombre:'Brazo', descr:'Rutina ganadora',img: 'assets/anun0.png'},
    { nombre:'Lo mejor', descr:'Runtina publica',img: 'assets/anun1.jpeg'},
  ]

  }
  anunci: Usuario[];

  ngOnInit() {
      this.todoService.getEntrenadores().subscribe(res => {
       console.log(res);
      console.log("Pidiendo solicitudes");
     this.anunci = res;
     });
  }

}
