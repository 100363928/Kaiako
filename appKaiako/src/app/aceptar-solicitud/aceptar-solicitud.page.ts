import { Solicitud, TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aceptar-solicitud',
  templateUrl: './aceptar-solicitud.page.html',
  styleUrls: ['./aceptar-solicitud.page.scss'],
})

export class AceptarSolicitudPage implements OnInit {
  private solicitudesCollection: AngularFirestoreCollection<Solicitud>;
  private solici: Observable<Solicitud[]>;
  
  solicitudes: Solicitud[];
  solicitud: Solicitud = {
    key: ' ',
    nombre: ' ',
    altura: 0,
    peso: 0,
    dias: 0,
    objetivo: ' ',
    mensaje: ' ',
    solicitante: '',
    entrenador: ''
  }
 
  constructor(private todoService: TodoService, private lc: LoadingController, private db: AngularFirestore) {}
  
  async ngOnInit() {
     const loading = await this.lc.create({
      message: 'Cargandouuu datooos'
     });
     await loading.present();
      loading.dismiss();

      this.todoService.getSolicitudes().subscribe(res => {
        console.log(res);
        console.log('Pidiendo solicitudes');
        this.solicitudes = res;
     });
     
     console.log(this.solicitudes.length);
  }

  rechazar(item){
    console.log(item.id);
    this.todoService.removeSolicitud(item.id);
  }

  aceptar(item){
    this.todoService.removeSolicitud(item.id);
  }
  
}
