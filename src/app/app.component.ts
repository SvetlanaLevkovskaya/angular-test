import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductsService } from './sevices/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular test';
  //products: Product[]
  loading = false
  products$: Observable<Product[]>
  term: ''

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
  }

/*  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe((products) => {
      this.products = products
      this.loading = false
    })
  }*/
}
