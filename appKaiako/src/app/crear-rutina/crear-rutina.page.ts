import { Component, OnInit } from '@angular/core';
import {ejercicio,zona,CrearRutinasService} from '../../app/services/crear-rutinas.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.page.html',
  styleUrls: ['./crear-rutina.page.scss'],
})
export class CrearRutinaPage implements OnInit {
  tipo: zona[];
  ej: ejercicio[];
  lista: ejercicio[]=[];
  clienteId = null;

  constructor(private navCtrl: NavController , private cr: CrearRutinasService, private route: ActivatedRoute) {
    this.tipo = [
      {tipo:"Tren Superior", zona:"Brazo",open:false,
          ej:[
          {nombre:"Flexiones", reps:0,series:0,check:false,img:"/assets/felxb.jpg"},
          {nombre:"Curl con barra", reps:0,series:0,check:false,img:"/assets/curl.jpg"},
          {nombre:"Curl invertido", reps:0,series:0,check:false,img:"/assets/rcurl.jpg"}]},
      {tipo:"Tren Superior", zona:"Pecho",open:false,
        ej:[
          {nombre:"Press", reps:0,series:0,check:false,img:"/assets/press.jpg"},
          {nombre:"Fly", reps:0,series:0,check:false,img:"/assets/fly.jpg"},
          {nombre:"Flexion", reps:0,series:0,check:false,img:"/assets/pecho3.jpg"}]
        },
      {tipo:"Tren Superior", zona:"Espalda",open:false,
      ej:[
        {nombre:"Barra", reps:0,series:0,check:false,img:"/assets/espalda1.jpg"},
        {nombre:"Pull cable", reps:0,series:0,check:false,img:"/assets/espalda2.jpg"},
        {nombre:"Dominada", reps:0,series:0,check:false,img:"/assets/espalda3.jpg"}]
        },
      {tipo:"Tren Superior", zona:"Hombros",open:false,
      ej:[
        {nombre:"Rise", reps:0,series:0,check:false,img:"/assets/hombro1.jpg"},
        {nombre:"Rise vertical", reps:0,series:0,check:false,img:"/assets/hombro2.jpg"},
        {nombre:"Rise lateral", reps:0,series:0,check:false,img:"/assets/hombro3.jpg"}]  
      },
      {tipo:"Tren Inferior", zona:"Pierna",open:false,
      ej:[
        {nombre:"Escalon", reps:0,series:0,check:false,img:"/assets/pierna1.jpg"},
        {nombre:"Lungee", reps:0,series:0,check:false,img:"/assets/pierna2.jpg"},
        {nombre:"Squat", reps:0,series:0,check:false,img:"/assets/pierna3.jpg"}]  
      },
      {tipo:"Tren Inferior", zona:"Gluteo",open:false,
      ej:[
        {nombre:"KickBack", reps:0,series:0,check:false,img:"/assets/glut1.jpg"},
        {nombre:"DonkeyKick", reps:0,series:0,check:false,img:"/assets/glut2.jpg"},]
      },
      {tipo:"Cardio", zona:"Cardio",open:false,
      ej:[
        {nombre:"Correr", reps:0,series:0,check:false,img:"/assets/cardio1.jpg"},
        {nombre:"Eliptica", reps:0,series:0,check:false,img:"/assets/cardio2.jpg"},
        {nombre:"Bici", reps:0,series:0,check:false,img:"/assets/cardio3.jpeg"}]
      },
      {tipo:"Tronco", zona:"Abdomen",open:false,
      ej:[
        {nombre:"Levantamiento", reps:0,series:0,check:false,img:"/assets/abs1.jpg"},
        {nombre:"Toque lateral", reps:0,series:0,check:false,img:"/assets/abs2.jpg"},
        {nombre:"Plancha lateral", reps:0,series:0,check:false,img:"/assets/abs3.jpg"}]
      },
    ] 
  }

  ngOnInit() {
    this.clienteId = this.route.snapshot.params['id'];
  }

  toggleSection(index){
    this.tipo[index].open=!this.tipo[index].open;
  }

  add(i, j) {
  this.lista.push(this.tipo[i].ej[j]);
  console.log("added "+ this.tipo[i].ej[j].nombre);
  console.log(this.lista.length);
  }

  remove(i, j) {
   this.lista.splice(this.lista.indexOf(this.tipo[i].ej[j]),1);
   console.log("deleted "+ this.tipo[i].ej[j].nombre);
   console.log(this.lista.length);
   }

 check(i, j) {
   this.tipo[i].ej[j].check=!this.tipo[i].ej[j].check;
   console.log("its "+ this.tipo[i].ej[j].check);
 }
 crear(){
   //this.navCtrl.navigateForward(("/rutina"));
   this.cr.setRutina(this.lista);
 }

 getEjercicios(){
  return this.lista;
 }
  

}
