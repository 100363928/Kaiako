import { Component } from '@angular/core';
import {ejercicio,rutina,CrearRutinasService} from '../../app/services/crear-rutinas.service';
import * as firebase from 'firebase/app';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
rutina:rutina[]=[];
open:any=[{nombre:'',ejer:[],open:false}];
ejercicios:ejercicio[]=[];
constructor(private cr:CrearRutinasService,){
  this.cr.getMisRutinas().subscribe(res => {
    console.log('Pidiendo rutinas');
    this.rutina= res;
    console.log(this.rutina.length);
    console.log(this.rutina[0].ejer[0].nombre);
  });
}

ngOnInit(){

this.rutina.map(res=>{
  this.open.nombre=res.nombre;
  this.open.ejer=res.ejer;
})
  
}

toggleSection(index){
  this.open[index].open=!this.open[index].open;
}


}
