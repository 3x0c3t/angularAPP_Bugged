// formulaire_reactif.component.ts //

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire-reactif',
  templateUrl: './formulaire-reactif.component.html',
  styleUrls: ['./formulaire-reactif.component.css']
})
export class FormulaireReactifComponent {
  order: any = {};

  onSubmit(form: NgForm): void {
    console.log('Formulaire envoyé !');
    console.log('Formulaire soumis avec les données :', this.order);
    this.resetForm(form);
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.order = {};
  }
}
