// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksPageComponent } from './links-page/links-page.component';
import { Blocs4Component } from './blocs4/blocs4.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

const routes: Routes = [
  { path: 'links', component: LinksPageComponent },
  { path: 'blocs4', component: Blocs4Component },
  { path: 'mon-composant', component: MonComposantComponent },
  { path: 'contact-card', component: ContactCardComponent },
  { path: '', redirectTo: '/links', pathMatch: 'full' },
  { path: '**', redirectTo: '/links' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
