import { Component, OnInit } from '@angular/core';
import { Solicitud, Usuario, TodoService, Anuncio } from './../services/todo.service';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-clientes-entr',
  templateUrl: './clientes-entr.page.html',
  styleUrls: ['./clientes-entr.page.scss'],
})


export class ClientesEntrPage implements OnInit {
  notificacion:boolean;
  clientes: any;
  constructor(private todoService: TodoService, private lc: LoadingController) { 
    this.clientes = [
      'Andrea Perez',
      'Pedro Gonzalez',
      'Farid Wanis',
      'Sofia Wanis',
      'Amanda Lopez',
      'Alicia Brujez',
      'Ofelia Arean',
    ]
  }

  ngOnInit() {
    this.loadTodo()
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
