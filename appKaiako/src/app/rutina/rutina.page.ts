import { Component, OnInit } from '@angular/core';
import {ejercicio,rutina,CrearRutinasService} from '../../app/services/crear-rutinas.service';
import { NavController,LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
})
export class RutinaPage implements OnInit {

  constructor(private navCtrl:NavController ,private loadingController: LoadingController, private cr:CrearRutinasService) { }
  rutina:ejercicio[]=[];
  nombre:any;
  solicitante:any;
  rutinaFinal:rutina;
  solicitanteId:any;
  ngOnInit() {
    // FALTA ESTO
    this.cr.getRutina().map(res=>{
      this.rutina.push(res);
      console.log(res.nombre+" "+ res.reps);
    })
    /*this.solicitanteId = this.route.snapshot.params['id'];
    if (this.solicitanteId)  {
  
    }*/
  }

  crear(){
    this.navCtrl.navigateBack("/menu/aceptar-solicitud");
    this.rutinaFinal.nombre=this.nombre;
    this.rutinaFinal.entrenador=firebase.auth().currentUser.uid;

    this.cr.saveRutina(this.rutina,this.rutinaFinal);
  }

}
