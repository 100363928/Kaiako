import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-entr',
  templateUrl: './perfil-entr.page.html',
  styleUrls: ['./perfil-entr.page.scss'],
})
export class PerfilEntrPage implements OnInit {
   
  nombre:any;
  descrip:any;
  certificado:any;
  exp:any;
  constructor() {
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
  }
 
}
