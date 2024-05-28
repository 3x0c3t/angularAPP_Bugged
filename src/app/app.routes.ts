// src/app/app.routes.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksPageComponent } from './links-page/links-page.component';
import { Blocs4Component } from './blocs4/blocs4.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { SignUpComponent } from './sign-up/sign-up.component'; // Importe SignUpComponent depuis le bon chemin


const routes: Routes = [
  { path: 'links', component: LinksPageComponent },
  { path: 'blocs4', component: Blocs4Component },
  { path: 'mon-composant', component: MonComposantComponent },
  { path: 'contact-card', component: ContactCardComponent },
  { path: 'signup', component: SignUpComponent },  // Ajoute la route pour SignUpComponent

  { path: '', redirectTo: '/links', pathMatch: 'full' },
  { path: '**', redirectTo: '/links' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
