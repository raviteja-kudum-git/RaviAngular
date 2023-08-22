import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MystringService } from './mystring.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private service:MystringService){
  //     //title='';
  //     this.title=service.getText();
  // }
  title:String='';
  constructor(private router:Router,public service:MystringService){
      
      this.title=service.getText();
      

  }
  //title = 'AngularBasics';
  message='This is string interpolation.'
  IsDisabled:boolean=false;
  ButtonClicked(){
    console.log('i am clicked');
  }
  DynamicText:string='Enter something';
  MainButtonClicked(){
     this.router.navigate(['abc']);
  }
  ChildButtonClicked(){
    this.router.navigate(['xyz']);
  }
  LogInClicked(){
    this.router.navigate(['LogIn'])
  }
  DashboardClicked(){
     this.router.navigate(['Dashboard'])
  }
}
