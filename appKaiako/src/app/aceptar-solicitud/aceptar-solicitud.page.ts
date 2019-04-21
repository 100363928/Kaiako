import { Solicitud, TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { SolicitudPage } from '../solicitud/solicitud.page';
import { LoadingController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-aceptar-solicitud',
  templateUrl: './aceptar-solicitud.page.html',
  styleUrls: ['./aceptar-solicitud.page.scss'],
})

export class AceptarSolicitudPage implements OnInit {
  private solicitudesCollection: AngularFirestoreCollection<Solicitud>;
  private solici: Observable<Solicitud[]>;
  
  solicitudes: Solicitud[];
  solicitud:Solicitud={
    key: ' ',
  nombre: ' ',
  altura: 0,
  peso: 0,
  dias: 0,
  objetivo: ' ',
  mensaje: ' ',
}
 
  constructor(private todoService: TodoService, private lc:LoadingController, private db:AngularFirestore) {
   this.solicitudesCollection = this.db.collection('usuarios').doc(firebase.auth().currentUser.uid).collection('solicitudes');
   this.solici = this.solicitudesCollection.snapshotChanges()
   .pipe(
     map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log(id);
         return { id, ...data};
       });
    })
  );
  }

   
  async ngOnInit() {
    //const loading = await this.lc.create({
    //  message: 'Cargandouuu datooos'
    //});
    //await loading.present();
     // this.todoService.getSol().subscribe(res => {
      // loading.dismiss();
      // console.log("RES"+ res.length);
      // console.log("Pidiendo solicitudes");
       // this.solicitudes = res;
       // console.log("que "+this.solicitudes);
      //});
     //this.solicitud.key = sol.key;
      this.solici.subscribe(res => {
       console.log(res);
      console.log("Pidiendo solicitudes");
     this.solicitudes = res;
     });
  }

  rechazar(item){
    console.log(item.id);
    this.todoService.removeSolicitud(item.id);
  }

  aceptar(item){}


}
