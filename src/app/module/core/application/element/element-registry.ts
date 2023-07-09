import { ApplicationRef, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';

export default class ElementRegistry {
  private registry: Map<string, object>;

  constructor(
    private readonly appRef: ApplicationRef
  ) {
    this.registry = new Map<string, object>();
  }

  public register(component: Type<any>, name: string): object {
    const element = createCustomElement(component, {injector: this.appRef.injector});
    customElements.define(name, element);
    this.registry.set(name, element);

    return element;
  }
}
