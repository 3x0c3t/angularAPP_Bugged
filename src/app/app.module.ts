import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Importez AppRoutingModule depuis le fichier approprié

// LIENS VERS LES PAGES
import { AppComponent } from './app.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { Blocs4Component } from './blocs4/blocs4.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { CatalogComponent } from './catalog/catalog.component'; // CATALOGUE
import { MyFormComponent } from './my-form/my-form.component'; // Importez MyFormComponent depuis le bon chemin
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksPageComponent,
    Blocs4Component,
    MonComposantComponent,
    ContactCardComponent,
    CatalogComponent,
    MyFormComponent, // Ajoutez une virgule ici
    SignUpComponent // Ajoutez SignUpComponent ici
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Ajoutez AppRoutingModule ici pour utiliser les routes définies dans ce module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
