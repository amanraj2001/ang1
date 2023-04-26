import { Component } from '@angular/core';
import { FormservService } from '../formserv.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent {
  arr:any

      constructor(private demo:FormservService){
        this.arr=this.demo.array
      }
}
