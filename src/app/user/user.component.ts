import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { ProductsService } from '../Services/products.service';

interface Product {
  productName: string;
  productPrice: number;
  productQuantity: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent {

  tableData: Product[] = [];
  constructor(private router: Router ,private productService :ProductsService) {
    this.getProduct();
  }



  GoToRegister(){
    this.router.navigate(['/register']);
  }

  getProduct(){
    this.tableData=this.productService.productTable;
  }

 
}