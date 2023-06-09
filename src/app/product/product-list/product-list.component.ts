import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Route, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res.products;
    });
  }

  AddProduct() {
    this.router.navigateByUrl('/add-Product');
 }
 
 editProduct(id:string){
   this.router.navigate(['edit-product', id]);
 }

 deleteProduct(id:string){
   this.productService.deleteProduct(id).subscribe((res:any) => {
     this.products = res;
   })
 }

}

