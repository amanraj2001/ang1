import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormguardGuard } from './formguard.guard';
import { FormsMainComponent } from './forms-main/forms-main.component';

const routes: Routes = [
  {path:'forms',component:FormsMainComponent},
  {path:'list',component:FormListComponent,canActivate:[FormguardGuard],
 children:[
  {path:'detail/:id',component:FormDetailComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
