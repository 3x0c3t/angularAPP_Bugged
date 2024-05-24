import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blocs4Component } from './blocs4.component';

describe('Blocs4Component', () => {
  let component: Blocs4Component;
  let fixture: ComponentFixture<Blocs4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blocs4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blocs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
