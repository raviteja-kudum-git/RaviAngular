import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string="";
  password:string="";
  OnSubmit(form:NgForm){
    console.log(form)
    this.username=form.value.username;
    this.password=form.value.password;
  }
}
