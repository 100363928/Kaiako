import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Coche,EstadoCoche } from './coche';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Micropráctica ANGULAR - 02';
  
  public EstadoCoche:any = EstadoCoche;
  
  public coches:Array<Coche>=[	new Coche('Renault','Scenic',new Date(2007,10,1),new Date(2018,3,1),5000,'coche01.jpg',EstadoCoche.BUENO),
							new Coche('Seat','Ibiza',new Date(2003,4,12),new Date(2018,2,1),1200,'coche02.jpg',EstadoCoche.BUENO),
							new Coche('Renault','Megane',new Date(2006,12,23),new Date(2018,2,1),3500,'coche03.jpg',EstadoCoche.MALO),
							new Coche('Tesla','model 3',new Date(2006,12,23),new Date(2018,2,1),4000,'coche04.jpg',EstadoCoche.BUENO),
              new Coche('Citroen','c3',new Date(2017,2,13),new Date(2018,3,7),3850,'coche05.jpg',EstadoCoche.MALO)];

  public filtro:string='';
   
  public getFiltrados():Array<number>{
	  var filtrados:Array<number>=[];
	  var indice:number=0;
	  for(var coche of this.coches)
	  {
		  if (coche.marca.lastIndexOf(this.filtro, 0) === 0) filtrados.push(indice);
		  indice=indice+1;
	  }
	return filtrados;
  }
 
  public cmd_vender(id)
  {
	  this.coches.splice(id,1);
  }
  
  public cmd_rebajar(id)
  {
	  this.coches[id].rebajar(); 
  }
  

}
