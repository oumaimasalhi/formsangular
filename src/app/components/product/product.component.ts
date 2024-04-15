import { Component } from '@angular/core';
import { ProductsService } from '../../Services/products.service';


interface Product {
  productName: string;
  productPrice: number;
  productQuantity: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  table: Product[] = [];

  constructor(private productService : ProductsService){
    this.getProduct();
  }

  

  getProduct(){
    this.table = this.productService.productTable;
    console.log("myproduct",this.table)
  }
}
