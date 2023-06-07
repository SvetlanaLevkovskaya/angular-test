import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular test';
  loading = false
  term: ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.loading = true
    /* this.products$ = this.productsService.getAll().pipe(
     tap(() => this.loading = false)
     )*/
    this.productsService.getAll().subscribe(products => {
      this.loading = false
    })

  }
}
