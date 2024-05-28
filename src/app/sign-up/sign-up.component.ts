// src/app/sign-up/sign-up.component.ts

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  newUser: User = {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  };

  @ViewChild('myForm', { static: false }) myForm!: NgForm;

  constructor() {
    console.log('SignUpComponent initialized');
  }

  onSubmit(): void {
    // Traitement de la soumission du formulaire
    console.log('Utilisateur inscrit :', this.newUser);
    // Réinitialisation du formulaire après la soumission
    this.resetForm();
  }

  resetForm(): void {
    // Réinitialisation de l'utilisateur à un nouvel objet vide
    this.newUser = {
      email: '',
      firstname: '',
      lastname: '',
      password: ''
    };
    // Réinitialisation du formulaire via le ViewChild
    if (this.myForm) {
      this.myForm.resetForm();
    }
  }
}
