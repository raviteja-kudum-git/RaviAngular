import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   dashboard:string[]
   //dashboard=['item','item1','item2']
   constructor(){
    this.dashboard=/*[{value:string='ravi'}]*/['item','item1','item2']
   }

   
}
