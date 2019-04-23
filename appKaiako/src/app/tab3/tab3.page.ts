import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService, Usuario } from '../services/todo.service';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuarioId = null;

  usuario: Usuario = {
    nombre: '',
    nombreUsr: '',
    apellido: '',
    email: '',
    tipo: '',
    certificado: '',
    anosExperiencia: '',
    numEstrellas: 0,
    descripcion: ''
  };

  constructor(private route: ActivatedRoute, private todoService: TodoService, private loadingController: LoadingController) {}

  ngOnInit() {
    this.usuarioId = firebase.auth().currentUser.uid;
    if (this.usuarioId)  {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.todoService.getUsuario(this.usuarioId).subscribe(res => {
      loading.dismiss();
      this.usuario = res;
    });
  }

}
