import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { DetailsComponent } from '../components/details/details.component';
import { VisionComponent } from '../components/vision/vision.component';
import { MissionComponent } from '../components/mission/mission.component';
import { AddProductComponent } from '../components/add-product/add-product.component';

export const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent ,title:'Home'},
  {path:'products',component:ProductsComponent , title:'Products'},
  {path:'details/:id',component:DetailsComponent,title:'Product Details'},
  {path:'add',component:AddProductComponent},
  {path:'about',component:AboutUsComponent , title:'About',
    children:[
   {path:'',redirectTo:'vision',pathMatch:'full'},
   {path:'vision',component:VisionComponent},
   {path:'mission',component:MissionComponent}
  ]},
  {path:'contact',component:ContactUsComponent,title:'Contact'},
  /*wild card */
  {path:'**',component:NotFoundComponent}
];
