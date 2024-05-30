// formulaire_reactif.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireReactifComponent } from './formulaire-reactif.component';

describe('FormulaireReactifComponent', () => { // Modifier le nom de la classe
  let component: FormulaireReactifComponent; // Modifier le nom de la classe
  let fixture: ComponentFixture<FormulaireReactifComponent>; // Modifier le nom de la classe

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireReactifComponent] // Modifier le nom de la classe
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireReactifComponent); // Modifier le nom de la classe
    component = fixture.componentInstance; // Modifier le nom de la classe
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
