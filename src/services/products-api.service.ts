import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products`,
      // {
      // headers:{
      //   'Authorization':'sdfhjdg5454dsvcjhfdv54'
      // },
      // params:{
      //   limit:5,
      //   page:1
      // }
    // }
  );
  }

  getProductById(id: string): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }

  getProductsByCatId(catId: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${environment.baseUrl}/products?catId=${catId}`
    );
  }

  addProduct(product: IProduct):Observable<IProduct>{
   return this.httpClient.post<IProduct>(`${environment.baseUrl}/products`,product)
  }

}
