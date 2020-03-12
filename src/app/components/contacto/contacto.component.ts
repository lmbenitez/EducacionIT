import { Component, Output } from '@angular/core';
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
          Validators.maxLength(50)
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
    if(this.contactForm.valid){
      this.dbservice.guardarCollection(this.contactForm.value);
      console.log(this.contactForm.value)
      alert('Datos enviados Satisfactoriamente')
    } else {
      console.log(this.contactForm.value)
      alert ('Corrobore que todos los campos esten completados correctamente')
    }
  }

  getNombre(){
    return this.contactForm.get('nombre')
  }
  getCorreo(){
    return this.contactForm.get('correo')
  }
  getTelefono(){
    return this.contactForm.get('telefono')
  }
  getMensaje(){
    return this.contactForm.get('mensaje')
  }


}
