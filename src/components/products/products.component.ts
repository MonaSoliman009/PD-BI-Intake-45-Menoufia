import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: IProduct[];
  categories:Icategory[];
  totalOrderPrice: number = 0;
  selectedCatId: number = 0;
  x:string='width:100%'
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

    this.categories=[
      {id:1,name:'Laptop'},
      {id:2,name:'Ipad'},
      {id:3,name:'Tablet'}
    ]
  }

  buy(price:number,count:string){
    if(count){

      this.totalOrderPrice += price* parseInt(count)

    }
  // this.totalOrderPrice = price* +count
  // this.totalOrderPrice = price* Number(count)


  }

  trackByFun(index:number,prd:IProduct):number{

    return prd.id;
  }
}
