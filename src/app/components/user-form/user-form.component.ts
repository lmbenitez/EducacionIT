import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userForm',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user = {
    name: "",
    email:"",
    address: "",
    zipcode: "",
    phone: ""
  }
  constructor(){}
  ngOnInit(): void {
  }

  validarForm(){
    console.log(this.user)
  }
}

