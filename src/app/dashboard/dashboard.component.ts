import { Component } from '@angular/core';
import { MystringService } from '../mystring.service';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
 
export class DashboardComponent {
  
  //dataSource=datasource;
  dashboard:any=[];
  displayedColumns=['Name','Description','Price']
   //dashboard=['item','item1','item2']
   constructor(private service:MystringService){
    this.dashboard=service.Items;
  
   }
//dataSource=this.dashboard;
   
}
