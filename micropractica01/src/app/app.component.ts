import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Micropráctica ANGULAR - 01';

  private productos:Array<[string,number]>=[['Hamburguesa',4.50],['Tacos al pastor',2.00],['Chilaquiles',4.50],['Langosta',7.50],['California-roll',4.25],['Paella',5.50],['Hot-dog',2.00]];

  public importe=0;
  public codigo=-1;
  public precio:number=0.0;

  public agregados:Array<[string,number]>=[];

  public agregar()
  {
	  var producto=this.productos[this.codigo][0];
	  var precio:number=this.productos[this.codigo][1];
    this.importe +=precio;
	  this.agregados.push([producto,precio]);
	  this.precio=this.precio+precio;
  }

  public borrar(i)
  {
    this.importe -= this.agregados[i][1];
	  this.precio-=this.agregados[i][1];
	  this.agregados.splice(i,1);
  }
}
