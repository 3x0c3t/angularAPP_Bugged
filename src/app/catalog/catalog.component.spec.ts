// src/app/catalog/catalog.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogComponent } from './catalog.component';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should categorize products correctly', () => {
    const testProducts = [
      { id: 1, name: 'Product 1', price: 100, promo: true },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3' },
      { id: 4, name: 'Product 4', promo: true },
      { id: 5, name: 'Product 5', price: 300 },
      { id: 6, name: 'Product 6', price: 999, promo: true }
    ];

    component.products = testProducts;
    component.ngOnInit();

    expect(component.productsToDefine.length).toBe(1);
    expect(component.productsToDefine[0].name).toBe('Product 3');

    expect(component.productsOnPromo.length).toBe(1);
    expect(component.productsOnPromo[0].name).toBe('Product 1');

    expect(component.otherProducts.length).toBe(2);
    expect(component.otherProducts.map(p => p.name)).toEqual(['Product 2', 'Product 5']);
  });
});
