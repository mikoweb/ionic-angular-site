import { ApplicationRef } from '@angular/core';
import ElementRegistry from '@app/module/core/application/element/element-registry';

import { IconButtonComponent } from '@app/module/elements/application/icon-button/icon-button.component';
import { NavComponent } from '@app/module/elements/application/nav/nav.component';

import {
  UserFullNameDisplayComponent
} from '@app/module/user/application/elements/user-full-name-display/user-full-name-display.component';
import { UserDataFormComponent } from '@app/module/user/application/elements/user-data-form/user-data-form.component';

export default function registerElements(appRef: ApplicationRef) {
  const registry = new ElementRegistry(appRef);

  // elements module
  registry.register(IconButtonComponent, IconButtonComponent.componentName);
  registry.register(NavComponent, NavComponent.componentName);

  // user module
  registry.register(UserFullNameDisplayComponent, UserFullNameDisplayComponent.componentName);
  registry.register(UserDataFormComponent, UserDataFormComponent.customElementName);
}
