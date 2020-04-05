import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  product: ProductModel = new ProductModel();

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    if (form.invalid) {
      console.log('Invalid form');
      return;
    }

    Swal.fire({
      title: 'Wait',
      text: 'Saving information',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let petition: Observable<any>

    // console.log(form);
    // console.log(this.product);

    if (this.product.id) {
      petition = this.productsService.updateProduct(this.product);
    } else {
      petition = this.productsService.createProduct(this.product);
    }
    petition.subscribe(res => {
      Swal.fire({
        title: this.product.name,
        text: 'The information was updated',
        icon: 'success'
      });
    });
  }

}
