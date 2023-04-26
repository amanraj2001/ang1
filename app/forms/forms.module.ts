import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { FormsRoutingModule } from './forms-routing.module';
import { FormsMainComponent } from './forms-main/forms-main.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormDetailComponent } from './form-detail/form-detail.component';


@NgModule({
  declarations: [
    FormsMainComponent,
    FormListComponent,
    FormDetailComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
