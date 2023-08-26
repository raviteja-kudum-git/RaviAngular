import { Component } from '@angular/core';
import { MystringService } from '../mystring.service';
import {MatTableModule} from '@angular/material/table';
import { Observable, Subscription, of } from 'rxjs';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
 
export class DashboardComponent implements OnInit {
  List=["Item1","Item2"];
  ListO:Observable<string[]>=of(this.List);
  lis:string[]=[];
  ngOnInit():void{
      const Subscription=this.ListO.subscribe({
        next:(data)=>{this.lis=data},
        error:()=>console.log('error occured')
      })
  }
  ButtonClicked(){
    this.List.push('Item3');
    console.log(this.List);
  }
  //dataSource=datasource;
  dashboard:any=[];
  displayedColumns=['Name','Description','Price']
   //dashboard=['item','item1','item2']
   constructor(private service:MystringService){
    this.dashboard=service.Items;
  
   }
//dataSource=this.dashboard;
   
}
