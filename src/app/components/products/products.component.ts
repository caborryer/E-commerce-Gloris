import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  product: ProductModel = new ProductModel();

  constructor() { }

  ngOnInit(): void {
  }

}
