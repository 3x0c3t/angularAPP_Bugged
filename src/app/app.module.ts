// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LinksPageComponent } from './links-page/links-page.component'; // Importer le composant
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    // Ne pas déclarer LinksPageComponent ici si c'est un composant autonome
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LinksPageComponent // Importer le composant autonome ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
