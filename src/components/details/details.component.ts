import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/iproduct';
import { ProductsApiService } from '../../services/products-api.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  @Input() id: string = '';
  product: IProduct | null = null;
  constructor(private productsApiService:ProductsApiService) {}
  ngOnInit(): void {
    this.productsApiService.getProductById(this.id).subscribe({
      next:(res)=>{
        this.product=res
      },
      error:(err)=>console.error(err)
    })
  }


}
