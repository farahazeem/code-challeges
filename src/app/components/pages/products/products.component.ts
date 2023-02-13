import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Product } from '../../../shared/interfaces/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private service: DataService) {}
  products: any[] = [];

  ngOnInit() {
    this.service.getAllProducts().subscribe((products: any) => {
      this.products = products.products;
    });
  }
}
