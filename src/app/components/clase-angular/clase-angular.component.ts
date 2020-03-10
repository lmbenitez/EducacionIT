import { Component } from '@angular/core';

@Component({
  selector: 'clase-angular',
  templateUrl: './clase-angular.component.html',
  styleUrls: ['./clase-angular.component.css']
})
export class ClaseAngularComponent {
  /// Cargamos los Datos mediante Data Binding (interpolation)
  instructor:string = 'Cristian';
  curso:string = 'Angular';
  /// Cargamos una Ruta media Property Binding
  imagenURL = '../../assets/media/gatito-observando.jpg'
  
  //
  desactivado:boolean = false;

  ///Recorremos el Array de Objetos mediante la directiva ngFor
  alumnos = [
    {
      nombre:'Brian',
      edad:20,
      curso: 'angular'
  },
    
    {
      nombre:'Luis',
      edad:20,
      curso: 'angular'
  },
    {
      nombre:'Pedro',
      edad:20,
      curso: 'angular'
  },
    {
      nombre:'Juan',
      edad:20,
      curso: 'angular'
  },
    {
      nombre:'Laura',
      edad:20,
      curso: 'angular'
  },
    {
      nombre:'Jose',
      edad:20,
      curso: 'angular'
  },
    {
      nombre:'Ana Maria',
      edad:20,
      curso: 'angular'
  },
    {
      nombre:'Luis Alberto',
      edad:20,
      curso: 'angular'
  }
  ]
}
