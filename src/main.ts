import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';
import { configure } from 'mobx';

configure({
  enforceActions: 'never',
});

import { routes } from '@app/shared/infrastructure/routes/app.routes';
import { AppComponent } from '@app/app.component';
import { environment } from './environments/environment';

import * as allIcons from 'ionicons/icons';
import { addIcons } from 'ionicons';

addIcons(allIcons);

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'md' }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
