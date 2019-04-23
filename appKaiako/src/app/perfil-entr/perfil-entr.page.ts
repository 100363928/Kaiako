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

}
