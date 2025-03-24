import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[];
  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell laptop',
        price: 15000,
        quantity: 5,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 1,
      },
      {
        id: 200,
        name: 'ipdad',
        price: 30000,
        quantity: 0,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 2,
      },
      {
        id: 300,
        name: 'lenovo laptop',
        price: 8210,
        quantity: 1,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 1,
      },
      {
        id: 400,
        name: 'Huawei tablet',
        price: 25000,
        quantity: 2,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 3,
      },
      {
        id: 500,
        name: 'Ipad 2',
        price: 8000,
        quantity: 3,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 2,
      },
      {
        id: 600,
        name: 'Samsung tablet',
        price: 6000,
        quantity: 0,
        imgUrl: 'https://fakeimg.pl/250x100/',
        catId: 3,
      },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: number): IProduct | null {
    let foundedPrd = this.products.find((prd) => prd.id == id);
    return foundedPrd ? foundedPrd : null;
  }

  getProductsByCatId(catId:number):IProduct[]{
  return this.products.filter((prd)=>prd.catId==catId)
  }
}
