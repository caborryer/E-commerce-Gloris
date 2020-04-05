import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { map, delay} from 'rxjs/operators';
import { AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private imagesFile = 'img';
  private url = 'https://ecommerce-5a318.firebaseio.com'

  constructor(private http: HttpClient,
              private db: AngularFirestore) { }

  private saveImage( image: {name: string, url: string}) {
    this.db.collection(`${this.imagesFile}`)
      .add(image);
  }

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

  getProduct(id: string) {
    return this.http.get(`${this.url}/products/${id}.json`);
  }

  getProducts() {
    return this.http.get(`${this.url}/products.json`)
      .pipe(
        map(this.createArray),
        delay(1500)
      );
  }

  private createArray(productsObj: object) {
    const products: ProductModel[] = [];
    if (productsObj === null) {return []; }
    Object.keys(productsObj).forEach(key => {
      const product: ProductModel = productsObj[key];
      product.id = key;
      products.push(product);
    });

    return products;
  }
}
