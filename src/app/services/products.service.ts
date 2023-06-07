import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, retry, throwError } from 'rxjs';
import { Product } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: { limit: 5 },
      }),
    }).pipe(
      delay(200),
      retry(2),
      catchError(this.errorHandler.bind(this)),
    )
  }

  private errorHandler(err: any) {
    console.log(err.message)
    this.errorService.handle(err.message)
    return throwError(() => err.message);
  }
}
