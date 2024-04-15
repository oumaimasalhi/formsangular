import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class LoginModel {
  id: number;
  email: string;
  password: string;
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {


  public login: LoginModel;

  constructor() {
    this.login = new LoginModel(); 
  }

  onSubmit(form: NgForm){ 
    console.log(this.login)
  }
  
}
