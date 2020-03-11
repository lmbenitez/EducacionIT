import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

//Componentes de mi Aplicaciones
import { UsuariosServices } from './services/user.service';
import { UserFormComponent } from './components/user-form/user-form.component'

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UsuariosServices
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
