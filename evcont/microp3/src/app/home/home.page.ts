import { Component } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ModalController} from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todos: string[] = ["hola"];
  todo: string;
  public ishidden:boolean;
   
  constructor(public modalCtrl: ModalController) {

  }
  
  async presentModal(){
    const modal=await this.modalCtrl.create({
      component : ModalPage
    });
    await modal.present();
  }

   

  add() {
      this.todos.push(this.todo);
      this.todo = "";
  }
   

  
  troncosupf(){
    var formElement = <HTMLFormElement>document.getElementById('prueba');
    if(formElement.style.display=='none'){
      formElement.style.display='block';
    } else{formElement.style.display='none';}
  }

  public troncosup = [
    { val: 'Bicep', isChecked: false },
    { val: 'Pecho', isChecked: false },
    { val: 'Espalda', isChecked: false },
    { val: 'Hombro', isChecked: false }
  ];


  troncoinff(){
    var formElement = <HTMLFormElement>document.getElementById('prueba2');
    if(formElement.style.display=='none'){
      formElement.style.display='block';
    } else{formElement.style.display='none';}
  }

  public inf = [
    { val: 'Quadricep', isChecked: false },
    { val: 'Thighs', isChecked: false },
    { val: 'Calfs', isChecked: false },
  ];


  abdomen(){
    var formElement = <HTMLFormElement>document.getElementById('prueba3');
    if(formElement.style.display=='none'){
      formElement.style.display='block';
    } else{formElement.style.display='none';}
  }

  public abs = [
    { val: 'Lumbares', isChecked: false },
    { val: 'Centro', isChecked: false },
    { val: 'Todo', isChecked: false },
  ];


  cardio(){
    var formElement = <HTMLFormElement>document.getElementById('prueba4');
    if(formElement.style.display=='none'){
      formElement.style.display='block';
    } else{formElement.style.display='none';}
  }

  public car = [
    { val: 'HIIT', isChecked: false },
    { val: 'Series', isChecked: false },
    { val: 'Correr', isChecked: false },
    { val: 'Bici', isChecked: false }
  ];

 

  public fin=[];

  
  guardar(){
    var formElement = <HTMLFormElement>document.getElementById('rutina');
    formElement.style.display='block';
    this.troncosup.forEach( (element) => {
      if(element.isChecked==true){
        this.fin.push(element.val);
        console.log(element.val);
      }
  });
  this.inf.forEach( (element) => {
    if(element.isChecked==true){
      this.fin.push(element.val);
      console.log(element.val);
    }
});
this.abs.forEach( (element) => {
  if(element.isChecked==true){
    this.fin.push(element.val);
    console.log(element.val);
  }
});
this.car.forEach( (element) => {
  if(element.isChecked==true){
    this.fin.push(element.val);
    console.log(element.val);
  }
});
    
  }
  
  borrar(entry:any) {
    let index = this.fin.indexOf(entry);
    console.log(index);
    if (index > -1) {
      this.fin.splice(index, 1);
      }
    }

}
