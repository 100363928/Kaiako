import { Component, OnInit } from '@angular/core';

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
