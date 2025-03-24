import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  @Input() id: string = '';
  product: IProduct | null = null;
  // constructor(private  activatedRoute:ActivatedRoute){}
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    console.log(this.id);
    this.product = this.productsService.getProductById(+this.id);

    //  console.log(this.activatedRoute.snapshot.params['id']);
  }
}
