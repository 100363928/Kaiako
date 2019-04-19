import { Component, OnInit } from '@angular/core';
import { AnyTxtRecord } from 'dns';

@Component({
  selector: 'app-clientes-entr',
  templateUrl: './clientes-entr.page.html',
  styleUrls: ['./clientes-entr.page.scss'],
})
export class ClientesEntrPage implements OnInit {

  clientes: any;
  constructor() { 
    this.clientes = [
      'Andrea Perez',
      'Pedro Gonzalez'
    ]
  }

  ngOnInit() {
  }

}
