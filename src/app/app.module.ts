// app.module.ts //

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router'; // Importez RouterModule depuis @angular/router

import { AppComponent } from './app.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { Blocs4Component } from './blocs4/blocs4.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FormulaireReactifComponent } from './formulaire-reactif/formulaire-reactif.component' ;
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LinksPageComponent,
    Blocs4Component,
    MonComposantComponent,
    ContactCardComponent,
    CatalogComponent,
    FormulaireReactifComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule, // Ajoutez RouterModule ici
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
