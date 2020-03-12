import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactForm: FormGroup
  constructor(private dbservice:DbService) {
    this.contactForm = this.crearFormGroup();
   }

  crearFormGroup(){
    return new FormGroup({
      nombre: new FormControl ('',[ 
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern('[a-zA-Z]')
        ]),
      correo: new FormControl ('',[
          Validators.required
      ]),
      telefono: new FormControl('',
          Validators.pattern('[0-9]')),
      mensaje: new FormControl('',[
          Validators.minLength(10),
          Validators.maxLength(300)
      ])
    });
  }
  Restablecer(){
    this.contactForm.reset();
  }

  guardarForm(){
    alert('Datos enviados');
    this.dbservice.guardarCollection(this.contactForm.value);

  }
}
