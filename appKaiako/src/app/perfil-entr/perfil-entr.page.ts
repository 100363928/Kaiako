import { Component, OnInit } from '@angular/core';
import { Usuario, TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-perfil-entr',
  templateUrl: './perfil-entr.page.html',
  styleUrls: ['./perfil-entr.page.scss'],
})
export class PerfilEntrPage implements OnInit {
  notificacion:boolean=false;
 entrenadorId = null;
 numbers = [];
 numbersVacios = [];

 entrenador: Usuario = {
    nombre: '',
    nombreUsr: '',
    apellido: '',
    email: '',
    tipo: '',
    puntuacion: 0
  };

  constructor(private route: ActivatedRoute, private todoService: TodoService, private loadingController: LoadingController) {}

  ngOnInit() {
    this.entrenadorId = firebase.auth().currentUser.uid;
    if (this.entrenadorId)  {
      this.loadTodo();
      this.loadTodo2();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.todoService.getEntrenador(this.entrenadorId).subscribe(res => {
      loading.dismiss();
      this.entrenador = res;
      this.numbers = Array(res.numEstrellas).fill(0).map((x, i) => i);
      this.numbersVacios = Array(5 - res.numEstrellas).fill(0).map((x, i) => i);
    });
  }
  async loadTodo2() {
    const loading = await this.loadingController.create({
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
