// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { Blocs4Component } from './blocs4/blocs4.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SignUpComponent } from './sign-up/sign-up.component'; // Correction de l'importation

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'links', component: LinksPageComponent },
  { path: 'blocs4', component: Blocs4Component },
  { path: 'mon-composant', component: MonComposantComponent },
  { path: 'contact-card', component: ContactCardComponent },
  { path: 'my-form', component: MyFormComponent },
  { path: 'sign-up', component: SignUpComponent }, // Correction du nom du chemin
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
