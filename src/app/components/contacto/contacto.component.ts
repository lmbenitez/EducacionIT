import { Component, OnInit } from '@angular/core';
import {
  Validators, 
  FormControl, 
  FormGroup 
} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  reactiveForm(){
    return new FormGroup({
      nombre: new FormControl('',Validators.pattern('[a-zA-Z]{3,5}')),
      Correo: new FormControl('', Validators.required),
      telefono: new FormControl('',Validators.pattern('\d{3}[\-]\d{4}[\-]\d{4}')),
      mensaje: new FormControl('')
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
