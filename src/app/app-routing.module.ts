import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component:UserLoginComponent
  },
  {
    path:'list',
    loadChildren: () => import('./product/product.module').then((module) => module.ProductModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
