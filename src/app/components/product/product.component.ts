import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: ProductModel = new ProductModel();
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.productsService.getProducts()
      .subscribe( res => {
        console.log(res)
        this.products = res;

      });

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.productsService.getProduct(id)
        .subscribe((res: ProductModel) => {
          this.product = res;
          this.product.id = id;
        });

    }
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

    let petition: Observable<any>;

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



