import { Component, OnInit } from '@angular/core';
import { Solicitud, Usuario, TodoService, Anuncio } from './../services/todo.service';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-explora',
  templateUrl: './explora.page.html',
  styleUrls: ['./explora.page.scss'],
})
export class ExploraPage{
  anuncio: Anuncio[] = [];
  anuncioFiltered: Anuncio[] = [];
  notificacion:boolean=false;
  constructor(private todoService: TodoService, private lc: LoadingController) {
    this.anuncio = [
      { nombre: 'Cardio', descr: 'Ejercicios nuevos', img: '/assets/anun2.jpeg'},
      { nombre: 'Brazo', descr: 'Rutina ganadora', img: 'assets/anun0.png'},
      { nombre: 'Lo mejor', descr: 'Runtina publica', img: 'assets/anun1.jpeg'},
      { nombre: 'Lo más mejor', descr: 'Mejores ejercicios semanales', img: 'assets/anun0.png'},
      { nombre: 'Lo mazo más mejor', descr: 'Runtina publica', img: 'assets/anun2.jpeg'},
    ]
    this.initializeItems();
  }
 
  ngOnInit() {
    this.loadTodo();

  }

  initializeItems(){
    this.anuncioFiltered = this.anuncio;
  }

  getAnuncios(ev: any){
    //Inicializar de nuevo el array en caso de que haya cambiado algo
    this.initializeItems();
    let val = ev.target.value;

    if(val && val.trim() != ''){
      this.anuncioFiltered = this.anuncio.filter((ev) => {
        return (ev.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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