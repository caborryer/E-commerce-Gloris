import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';
import Swal from "sweetalert2";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService,
              ) { }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe( res => {
        console.log(res)
        this.products = res;

      });

  }

  deleteProduct(product: ProductModel, i: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.products.splice(i, 1);
        this.productsService.deleteProduct(product.id).subscribe();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    })



  }



}
