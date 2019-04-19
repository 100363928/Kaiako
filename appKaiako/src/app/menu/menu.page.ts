import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Cliente',
      url: '/menu/tabs'
    },
    {
      title: 'Entrenador',
      url: '/menu/entrenador-tabs'
    },
    {
      title: 'Aceptar solicitud',
      url: '/menu/aceptar-solicitud'
    },
    {
      title: 'Notificaciones',
      url: '/menu/notificaciones'
    },
  ];

  selectedPath = '';

  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
