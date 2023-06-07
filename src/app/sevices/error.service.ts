import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error$ = new Subject<string | any>()

  handle(message: string | any) {
    this.error$.next(message)
  }

  clear() {
    this.error$.next('')
  }
}
