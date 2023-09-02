import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MystringService {
private apiUrl='https://dummyjson.com/products';
constructor(private http:HttpClient){
  
 }
 getDummyData():Observable<any>{
  const Newurl='${this.apiUrl}/https://dummyjson.com/products';
  return this.http.get(Newurl);}

  Items=[
    {name:'IPhone 14 Pro Max',description:'Excellent to use',price:'90000'},
    {name:'IPhone 14',description:'Excellent to use',price:'80000'},
    {name:'IPhone 13 Pro Max',description:'Excellent to use',price:'70000'},
    {name:'IPhone 13',description:'Excellent to use',price:'60000'},
    {name:'IPhone 12',description:'Excellent to use',price:'50000'},
    {name:'IPhone 11',description:'Excellent to use',price:'40000'},
    {name:'IPhone 10',description:'Excellent to use',price:'30000'},
    {name:'IPhone 9',description:'Excellent to use',price:'20000'}
    
        ]
    
    public getText(){
     return 'New Dashboard';
  }
}
