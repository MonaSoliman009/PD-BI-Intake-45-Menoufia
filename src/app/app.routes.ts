import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { DetailsComponent } from '../components/details/details.component';

export const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent ,title:'Home'},
  {path:'products',component:ProductsComponent , title:'Products'},
  {path:'details/:id',component:DetailsComponent,title:'Product Details'},
  {path:'about',component:AboutUsComponent , title:'About'},
  {path:'contact',component:ContactUsComponent,title:'Contact'},
  /*wild card */
  {path:'**',component:NotFoundComponent}
];
