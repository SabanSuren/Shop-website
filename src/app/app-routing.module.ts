import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'product-add-1',component:ProductAddForms1Component},
  {path:'product-add-2',component:ProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/category/:categoryId',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
