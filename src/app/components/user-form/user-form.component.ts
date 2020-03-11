import { Component, OnInit } from '@angular/core';
import { UsuariosServices } from 'src/app/services/user.service';

@Component({
  selector: 'userForm',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  usuarios = []

  user = {
    name: "",
    email:"",
    address: "",
    zipcode: "",
    phone: ""
  }
  
  ngOnInit(): void {
  }
}

