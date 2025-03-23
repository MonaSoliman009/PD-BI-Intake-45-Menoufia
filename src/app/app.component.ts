import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HomeComponent } from "../components/home/home.component";
import { FooterComponent } from "../components/footer/footer.component";
import { ProductsComponent } from "../components/products/products.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, FooterComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';





}
