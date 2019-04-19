import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceptar-solicitud',
  templateUrl: './aceptar-solicitud.page.html',
  styleUrls: ['./aceptar-solicitud.page.scss'],
})
export class AceptarSolicitudPage implements OnInit {
 
  solicitud:Array<Object>
  constructor() { 
    this.solicitud=[
      {usuario:'Pepe Jj', peso:65,altura:175, objetivo:'Aumentar Masa', comentario:' te adoro y quiero entrenar contigo',img:'/assets/Perfil.jpeg'},
      {usuario:'Pamela Lopez', peso:60,altura:155, objetivo:'Bajar Peso', comentario:'No puedo sola',img:'/assets/Perfil.jpeg'}
    ]
  }
  
  ngOnInit() {
  }

}
