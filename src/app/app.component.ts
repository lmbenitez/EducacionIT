import { Component } from '@angular/core';

//Decorador Component
@Component({
  //Etiqueta definida
  selector: 'ProyectoAngular',
  //Ruta de la Vista
  templateUrl: './app.component.html',
  //Ruta de los estilos de la Vista
  styleUrls: ['./app.component.css']
})

//Exportacion de la Clase
export class AppComponent {
  //Variables utilizadas por la Clase
  titulo = 'Proyecto Angular 2';
}
