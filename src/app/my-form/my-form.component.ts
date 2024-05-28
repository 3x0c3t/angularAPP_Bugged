// my-form.component.ts

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  order: any = {};

  onSubmit(form: NgForm): void {
    // Formulaire soumis
    console.log('Formulaire envoyé !');
    console.log('Formulaire soumis avec les données :', this.order);
    
    // Réinitialiser le formulaire
    this.resetForm(form);
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.order = {}; // Réinitialiser également l'objet order
  }
}
