import { Component } from '@angular/core';
import { UsuariosServices } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miAPI';
  usuarios:any = [];

  constructor(private usuarioservice: UsuariosServices) {
    this.usuarios = this.usuarioservice.obtenerUsuarios();
  }
}
