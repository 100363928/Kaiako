import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import {ejercicio,rutina,CrearRutinasService} from '../../app/services/crear-rutinas.service';
import { NavController,LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../services/todo.service';


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
})
export class RutinaPage implements OnInit {

  usuario: Usuario = null;

  constructor(private navCtrl:NavController ,private router:ActivatedRoute,private loadingController: LoadingController, private cr:CrearRutinasService, private todoService: TodoService) { }
  rutina:ejercicio[]=[];
  nombre='';
  solicitante:any;
  rutinaFinal:rutina={
    nombre:'',
    solicitante:'',
    entrenador:''
  };
  solicitanteId:any;
  
  ngOnInit() {
    
 
    this.cr.getRutina().map(res=>{
      this.rutina.push(res);
      console.log(res.nombre+" "+ res.reps);
    });
    this.solicitanteId = this.router.snapshot.params['id'];
   
    this.traerUsuario();
  }

  async traerUsuario(){

    this.todoService.getUsuario(this.solicitanteId).subscribe(res=>{
      this.usuario = res;
    });

  }
 
  crear(){
    this.navCtrl.navigateBack("/menu/aceptar-solicitud");
    this.rutinaFinal.entrenador=firebase.auth().currentUser.uid;
    this.rutinaFinal.solicitante=this.solicitanteId;
    this.cr.saveRutina(this.rutina,this.rutinaFinal);
    this.guardarUsuario();
  }

  guardarUsuario(){
    this.usuario.notificacion=true;
    console.log(this.usuario);
    this.cargarUsuario();
  }

  async cargarUsuario(){
    this.todoService.updateUsuario(this.usuario, this.solicitanteId);
  }

}
