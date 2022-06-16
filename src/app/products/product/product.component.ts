import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input()
  product!: Product;
  @Output() hideProduct: EventEmitter<Product> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  hide(product: Product) {
    this.hideProduct.emit(product);
  }
}
