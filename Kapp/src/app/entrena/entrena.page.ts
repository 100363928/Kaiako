import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service'
import { Todo, TodoService } from '../services/todo.service';
@Component({
  selector: 'app-entrena',
  templateUrl: './entrena.page.html',
  styleUrls: ['./entrena.page.scss'],
})
export class EntrenaPage implements OnInit {

  constructor(
    private navCtrl: NavController,) { }

  ngOnInit() {
  }
  goToEntrena(){
    console.log("explora");
    this.navCtrl.navigateForward('/explora');
  }
}
