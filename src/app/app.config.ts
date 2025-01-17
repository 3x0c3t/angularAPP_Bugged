// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Utilisez appRoutes au lieu de routes

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)] // Utilisez appRoutes ici
};
