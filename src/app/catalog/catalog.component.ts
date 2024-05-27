// src/app/catalog/catalog.component.ts

import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price?: number;
  promo?: boolean;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, promo: true },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5', price: 300 },
    { id: 6, name: 'Product 6', price: 999, promo: true }
  ];

  productsToDefine: Product[] = [];
  productsOnPromo: Product[] = [];
  otherProducts: Product[] = [];

  ngOnInit(): void {
    this.productsToDefine = this.products.filter(product => product.price === undefined || isNaN(product.price));
    this.productsOnPromo = this.products.filter(product => product.promo === true && product.price !== undefined);
    this.otherProducts = this.products.filter(product => 
      product.price !== undefined && !product.promo && !isNaN(product.price));
  }
}
