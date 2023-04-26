import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormservService {

  available:boolean=false
    array:any
  constructor() { }
  auth(){

    this.available=true
    return this.available
  }

  islogged(){
    return this.available
  }
}
