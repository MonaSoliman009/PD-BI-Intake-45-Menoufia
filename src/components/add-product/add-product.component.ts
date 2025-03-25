import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Icategory } from '../../models/icategory';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ProductsApiService } from '../../services/products-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule,JsonPipe],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{
  categories:Icategory[]=[]
  product:IProduct={} as IProduct
  constructor(private categoriesService:CategoriesService,
    private productsApiService:ProductsApiService,private router:Router){}
  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.categoriesService.getCategories().subscribe({
      next:(res)=>{
      this.categories=res
      },
      error:(err)=>console.error(err)
    })
  }

  addNewProduct(){
   this.productsApiService.addProduct(this.product).subscribe({
    next:(res)=>{
     this.router.navigateByUrl('/products')
    },
    error:(err)=>{
      alert(err)
    }
   })
  }

}
