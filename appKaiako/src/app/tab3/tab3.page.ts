import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  nombre:any;
  descrip:any;
  usuario:any;
  exp:any;
  constructor() {
    this.nombre = [
      'Mareclo Peroni'
    ]
    this.descrip = [
      '360'
    ]
    this.usuario = [
      'mp4ever'
    ]
    this.exp = [
      '5'
    ];
    
   }
}
