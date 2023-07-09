import { ApplicationRef } from '@angular/core';
import ElementRegistry from './app/module/core/application/element/element-registry';
import { AppIconButtonComponent } from './app/module/elements/application/app-icon-button/app-icon-button.component';
import { AppNavComponent } from './app/module/elements/application/app-nav/app-nav.component';

export default function registerElements(appRef: ApplicationRef) {
  const registry = new ElementRegistry(appRef);

  registry.register(AppIconButtonComponent, AppIconButtonComponent.componentName);
  registry.register(AppNavComponent, AppNavComponent.componentName);
}
