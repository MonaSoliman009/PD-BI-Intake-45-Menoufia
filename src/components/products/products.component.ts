import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CurrencyTransformPipe } from '../../pipes/currency-transform.pipe';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightDirective,CurrencyTransformPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: IProduct[];
  categories:Icategory[];
  totalOrderPrice: number = 0;
  selectedCatId: number = 0;
  x:string='width:100%'
  date:Date=new Date();
  constructor(private productsService:ProductsService , private router:Router) {
    this.products =this.productsService.products;

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

  filterProducts(){
    if(this.selectedCatId==0){
      this.products=this.productsService.products
    }else{
      this.products=this.productsService.getProductsByCatId(this.selectedCatId)

    }
  }

  navigateToDetails(id:number){
  //  this.router.navigate(['/details',id])
  this.router.navigateByUrl(`/details/${id}`)
  }
}
