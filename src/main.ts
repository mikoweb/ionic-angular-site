import { ApplicationRef, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { configure } from 'mobx';

configure({
  enforceActions: 'never',
});

import { routes } from '@app/app.routes';
import { AppComponent } from '@app/app.component';
import { environment } from './environments/environment';

import './import-global-elements';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
  ],
});
