// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes'; // Utilisez appRoutes au lieu de routes

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)] // Utilisez appRoutes ici
};
