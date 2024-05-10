import { Routes } from '@angular/router';
import { pagesRoutes } from './pages.routes';

export const routes: Routes = [
  {
    path: '',
    children: pagesRoutes
  }
];
