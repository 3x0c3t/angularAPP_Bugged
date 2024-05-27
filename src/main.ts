// src/main.ts

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import '@angular/compiler'; // Assurez-vous que le compilateur est correctement chargé

// Vérifiez si vous êtes en mode production (à remplacer par votre propre mécanisme)
const isProduction = true;

if (isProduction) {
  enableProdMode(); // Activer le mode production
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
