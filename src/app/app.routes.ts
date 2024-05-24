// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LinksPageComponent } from './links-page/links-page.component';
import { Blocs4Component } from './blocs4/blocs4.component';

export const appRoutes: Routes = [
  { path: 'links', component: LinksPageComponent },
  { path: 'blocs4', component: Blocs4Component },
  { path: '', redirectTo: '/links', pathMatch: 'full' }
];
