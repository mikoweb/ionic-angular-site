import { Routes } from '@angular/router';
import { pagesRoutes } from './module/pages/application/pages.routes';

export const routes: Routes = [
  {
    path: '',
    children: pagesRoutes
  }
];
