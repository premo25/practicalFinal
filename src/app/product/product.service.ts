import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get(`https://dummyjson.com/products`);
  }

  createProduct(product:any) {
    return this.http.post(`https://dummyjson.com/products/add`, product);
  }

  updateProduct(id:string,product:any){
    return this.http.put(`https://dummyjson.com/products/${id}`, product);
  }

  deleteProduct(id:string){
    return this.http.delete(`https://dummyjson.com/products/${id}`);
  }
  addProduct(id:string,product:any){
    return this.http.post(`https://dummyjson.com/products/add`,product);
  }

  
}
