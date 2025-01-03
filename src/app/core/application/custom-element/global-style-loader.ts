import { ApplicationRef, Injectable } from '@angular/core';
import { ShadowDomStyleComponent } from '@app/shared/ui/elements/shadow-dom-style/shadow-dom-style.component';
import { createCustomElement } from '@angular/elements';
import { CustomElementRegistry } from '@app/core/application/custom-element/custom-element';

@Injectable({
  providedIn: 'root',
})
export default class GlobalStyleLoader {
  private shadowDomStyleElement?: HTMLElement & ShadowDomStyleComponent;
  private template?: HTMLTemplateElement;

  constructor(
    private readonly appRef: ApplicationRef
  ) {
    this.init();
  }

  public load(element: Document | HTMLElement): void {
    for (const style of this.getStyle()) {
      element.appendChild(style);
    }
  }

  public getStyle(): NodeListOf<HTMLStyleElement> | HTMLStyleElement[] {
    if (!this.template) {
      return [];
    }

    const fragment = this.template.content.cloneNode(true) as HTMLElement;

    return fragment.querySelectorAll('style, link');
  }

  public init(): void {
    const elementName = ShadowDomStyleComponent.customElementName;

    if (!CustomElementRegistry.hasElement(elementName)) {
      this.createElement();
      this.createTemplate();
    }
  }

  private createElement(): void {
    const elementName = ShadowDomStyleComponent.customElementName;
    const element = createCustomElement(ShadowDomStyleComponent, {injector: this.appRef.injector});
    CustomElementRegistry.setElement(elementName, element);

    const shadowDomStyleElement = document.createElement(elementName) as HTMLElement & ShadowDomStyleComponent;
    shadowDomStyleElement.style.display = 'none';
    document.body.appendChild(shadowDomStyleElement);

    this.shadowDomStyleElement = shadowDomStyleElement;
  }

  private createTemplate(): void {
    const template: HTMLTemplateElement = document.createElement('template');
    const styles: NodeListOf<HTMLStyleElement> =
      this.shadowDomStyleElement?.shadowRoot?.querySelectorAll('style') as NodeListOf<HTMLStyleElement>;
    const links: NodeListOf<HTMLLinkElement> =
      this.shadowDomStyleElement?.shadowRoot?.querySelectorAll('link') as NodeListOf<HTMLLinkElement>;

    for (const style of styles) {
      template.content.appendChild(style)
    }

    for (const link of links) {
      template.content.appendChild(link)
    }

    this.template = template;
    document.body.removeChild(this.shadowDomStyleElement as Node);
  }
}
