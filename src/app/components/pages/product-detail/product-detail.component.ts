import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Product } from '../../../shared/interfaces/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  index: number = 0;
  imageToShow: string = '';
  numberOfImages: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id)
        this.dataService
          .getProductByID(params.id)
          .subscribe((serverItem: Product) => {
            this.product = serverItem;
            this.imageToShow = this.product.images[0];
            this.numberOfImages = this.product.images.length
          });
    });
  }

  salePrice(): number {
    let salePrice = this.product.price - (this.product.price * this.product.discountPercentage/100);
    return salePrice;
  }

  prevImage() {
    if (this.index !== 0) this.index--;
    this.imageToShow = this.product.images[this.index];
  }

  nextImage() {
    if (this.index < this.product.images.length - 1) this.index++;
    this.imageToShow = this.product.images[this.index];
  }
}
