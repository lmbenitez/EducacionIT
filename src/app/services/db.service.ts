import { Injectable } from '@angular/core';
import {Mensaje} from '../models/mensaje'

//Modulos para crear y vincular tablas y bases de datos de Firebase
import { 
  AngularFirestoreCollection, 
  AngularFirestore 
} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})

export class DbService {
  ///Definimos una nueva coleccion (TABLA)
  private contactCollection : AngularFirestoreCollection<Mensaje>;
  //Obtenemos una Instancia de la Conexion a traves del constructor
  constructor(private base: AngularFirestore) { 
    this.contactCollection = base.collection<Mensaje>('contacto');
  }
  //Metodo que agrega a la coleccion los datos obtenidos mediante los parametros (Agregar un Registro)
  guardarCollection(nuevoContacto:any):void{
    this.contactCollection.add(nuevoContacto);
  }
}
