import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import {AuthenticateService} from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { TodoService } from './../services/todo.service';

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
    }
  ];

  selectedPath = '';

  constructor(private router: Router, private authService : AuthenticateService,private todo: TodoService ,private navCtrl: NavController,) { 
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

  logOut(){
   
    this.navCtrl.navigateBack('/inicio');
  }

}
