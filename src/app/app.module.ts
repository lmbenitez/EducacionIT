import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importamos los componentes que utiliza mi Aplicacion
import { AppComponent } from './app.component';
import { MiPrimerComponente } from './components/miprimercomponente'

//Composicion del Proyecto Angular
@NgModule({
  //Componentes instanciados en nuestra aplicacion
  declarations: [
    AppComponent,
    MiPrimerComponente
  ],
  //Dependencias del Proyecto - Modulos que utilice nuestra aplicacion
  imports: [
    BrowserModule
  ],
  //Proveedor de Servicio - Generalmente una conexion con un Servidor
  providers: [],
  //Componente Principal que conforma la estructura de nuestra aplicacion
  bootstrap: [AppComponent]
})

export class AppModule { }
