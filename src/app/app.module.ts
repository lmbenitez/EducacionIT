import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormularioComponent } from './components/formulario/formulario.component';

import {RouterModule, Routes} from '@angular/router'

const appRoutes:Routes = [
  {path:"principal", component: PrincipalComponent},
  {path:"contacto", component:FormularioComponent},
  {path:"configuracion", component: ConfiguracionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ConfiguracionComponent,
    PrincipalComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
