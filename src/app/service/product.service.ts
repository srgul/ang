import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  apiUrl = "http://localhost:3000/products"; 

  getProducts(categoryId):Observable<Product[]> {

    let newUrl = this.apiUrl;

    if(categoryId) {
      newUrl += "?categoryId="+categoryId
    }

    return this.http.get<Product[]>(newUrl).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product:Product):Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }

    return this.http.post<Product>(this.apiUrl,product, httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if(err.error instanceof ErrorEvent) {
      errorMessage = 'bir Hata oluştu ' +err.error.message
    } else { 
      errorMessage = 'sistemsel bir hata'
    }
    return throwError(errorMessage) ;
  }

}
