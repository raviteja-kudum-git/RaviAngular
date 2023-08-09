import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MystringService {

  constructor() { 
     
    }
    public getText(){
      return 'String from service';
  }
}
