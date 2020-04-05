import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { map, delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'https://ecommerce-5a318.firebaseio.com'

  constructor(private http: HttpClient) { }

  createProduct( product: ProductModel) {
    return this.http.post(`${this.url}/products.json`, product)
      .pipe(
        map((res: any) => {
          product.id = res.name;
          return product;
        })
      );
  }

  updateProduct(product: ProductModel) {
    const productTemp = {
      ...product
    };
    delete productTemp.id;
    return this.http.put(`${this.url}/products/${product.id}.json`, productTemp);
  }
}
