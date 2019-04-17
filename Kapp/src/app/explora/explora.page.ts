import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service'
import { Todo, TodoService } from '../services/todo.service';


@Component({
  selector: 'app-explora',
  templateUrl: './explora.page.html',
  styleUrls: ['./explora.page.scss'],
})
export class ExploraPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  goToEntrena(){
    console.log("entrena");
    this.navCtrl.navigateForward('/entrena');
  }

}
