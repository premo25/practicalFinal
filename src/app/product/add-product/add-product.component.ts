import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductService } from '../product.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addProductForm! :FormGroup;
 constructor(private http:HttpClient,private service:ProductService){}

 onSubmit(){

 }
}
