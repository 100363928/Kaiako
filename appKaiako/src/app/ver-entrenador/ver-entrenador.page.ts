import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { TodoService,Usuario } from './../services/todo.service';

@Component({
  selector: 'app-ver-entrenador',
  templateUrl: './ver-entrenador.page.html',
  styleUrls: ['./ver-entrenador.page.scss'],
})
export class VerEntrenadorPage implements OnInit {
  nombre:any;
  descrip:any;
  certificado:any;
  exp:any;
   entrenadorId = null;

   entrenador:Usuario= {
    nombre: '',
    nombreUsr:'',
    apellido:'',
    email:'',
    tipo:''
  }

  constructor(private route: ActivatedRoute,private todoService: TodoService,private loadingController: LoadingController) { 
      this.nombre = [
        'Pedro Pomm'
      ]
      this.descrip = [
        'Soy tal y tal y hago tal y tal y me gusta mucho el helado'
      ]
      this.certificado = [
        'CAFIT'
      ]
      this.exp = [
        '5'
      ];
  }

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
    });
  }

}
