// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importez RouterModule depuis @angular/router

import { AppComponent } from './app.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { Blocs4Component } from './blocs4/blocs4.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { AppRoutingModule } from './app-routing.module'; // Assurez-vous que ce fichier existe

@NgModule({
  declarations: [
    AppComponent,
    LinksPageComponent,
    Blocs4Component,
    MonComposantComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule, // Importez RouterModule ici
    AppRoutingModule // Assurez-vous que ce fichier existe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
