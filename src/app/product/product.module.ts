import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: ProductListComponent },
  { path: 'add-Product', component: AddProductComponent },
  { path: 'edit-product/:id', component: AddProductComponent }
];

@NgModule({
  declarations: [ProductListComponent, AddProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductModule {}
