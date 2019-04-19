import { Solicitud, TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceptar-solicitud',
  templateUrl: './aceptar-solicitud.page.html',
  styleUrls: ['./aceptar-solicitud.page.scss'],
})
export class AceptarSolicitudPage implements OnInit {
 
  solicitudes: Solicitud[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getSolicitudes().subscribe(res => {
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
