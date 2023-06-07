import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[] {
    if (!search) {
      return products;
    }

    const searchTerm = search.toLowerCase();

    return products.filter(product => product.title.toLowerCase().includes(searchTerm));
  }

}
