import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, SchemaMetadata, Type, ViewEncapsulation } from '@angular/core';
import { createCustomElement } from '@angular/elements';

type DefaultCustomElementParams = {
  standalone: boolean;
  encapsulation: ViewEncapsulation;
  schemas: SchemaMetadata[]
};

export const customElementParams: DefaultCustomElementParams = {
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

type ToRegister = {
  component: Type<any>,
  name?: string,
};

export class CustomElementRegistry {
  private static readonly registry: Map<string, object> = new Map<string, object>();
  private static appRef: ApplicationRef;
  private static bootstrapLoaded: boolean = false;
  private static toRegister: ToRegister[] = [];

  public static onBootstrapApplication(appRef: ApplicationRef): void {
    if (!CustomElementRegistry.bootstrapLoaded) {
      CustomElementRegistry.appRef = appRef;
      CustomElementRegistry.bootstrapLoaded = true;

      for (const params of CustomElementRegistry.toRegister) {
        CustomElementRegistry.register(params.component, params.name);
      }

      CustomElementRegistry.toRegister = [];
    }
  }

  public static register(component: Type<any> & any, name?: string): void {
    name = name ?? component.customElementName;

    if (!CustomElementRegistry.registry.has(name as string)) {
      if (CustomElementRegistry.bootstrapLoaded) {
        const element = createCustomElement(component, {injector: CustomElementRegistry.appRef.injector});
        customElements.define(name as string, element);
        CustomElementRegistry.registry.set(name as string, element);
      } else {
        CustomElementRegistry.toRegister.push({component, name})
      }
    }
  }
}

export function CustomElement(params?: any): Function {
  params = params ?? {};

  return function(target: any): void {
    if (params.hasOwnProperty('name')) {
      CustomElementRegistry.register(target, params.name);
    } else {
      CustomElementRegistry.register(target);
    }
  }
}
