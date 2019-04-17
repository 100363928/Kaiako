import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service'
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 
  todos: Todo[];
  userEmail: string;
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    public todoService: TodoService
  ) {}
 
  ngOnInit(){
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(item){
    this.todoService.removeTodo(item.id);
  }

  goToSolicitud(){
    console.log("entrena");
    this.navCtrl.navigateForward('/entrena');
  }
 
  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }
}

