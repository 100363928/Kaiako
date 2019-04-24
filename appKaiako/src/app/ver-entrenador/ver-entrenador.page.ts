import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { TodoService, Usuario } from './../services/todo.service';

@Component({
  selector: 'app-ver-entrenador',
  templateUrl: './ver-entrenador.page.html',
  styleUrls: ['./ver-entrenador.page.scss'],
})
export class VerEntrenadorPage implements OnInit {

 entrenadorId = null;
 numbers = [];
 numbersVacios = [];

 entrenador: Usuario = {
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
    this.entrenadorId = this.route.snapshot.params['id'];
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
