import { Component } from '@angular/core';
import {FormGroup, FormArray,FormControl,Validator,Validators } from '@angular/forms';
import { FormservService } from '../formserv.service';

@Component({
  selector: 'app-forms-main',
  templateUrl: './forms-main.component.html',
  styleUrls: ['./forms-main.component.css']
})
export class FormsMainComponent {


    constructor(private demo:FormservService) {
        this.demo.array=this.arr
    }


  check=['cric','football']
  arr:Array<any>=[]
  form= new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    address: new FormGroup({
      state:new FormControl(''),
      city:new FormControl('')
    }),
    phone: new FormControl(''),
    hobbies: new FormArray([new FormGroup({
      indoor:new FormControl(''),
      outdoor:new FormControl('')
    })])

  })
  get hob(){
    return this.form.get('hobbies') as FormArray
  }





  addData(){
    this.arr.push({id:this.form.value.id,name:this.form.value.name,address:{state:this.form.value.address?.state,city:this.form.value.address?.city},phone:this.form.value.phone,hobbies:[...this.hob.value]})

    this.demo.auth()
  }



}
