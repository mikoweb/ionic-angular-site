import { Routes } from '@angular/router';
import { AppCardsDemoPageComponent } from './pages/cards-demo-page/app-cards-demo-page.component';

export const pagesRoutes: Routes = [
  {
    path: 'page/cards-demo',
    component: AppCardsDemoPageComponent
  },
  {
    path: '',
    redirectTo: 'page/cards-demo',
    pathMatch: 'full',
  },
];
