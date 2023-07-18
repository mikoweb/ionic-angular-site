import { Component, ElementRef } from '@angular/core';
import { NavBehavior } from './nav-behavior';
import { Router } from '@angular/router';
import { CustomElement, customElementParams } from '@app/module/core/application/custom-element/custom-element';
import CustomElementBaseComponent from '@app/module/core/application/custom-element/custom-element-base-component';

const { encapsulation, schemas } = customElementParams;

@Component({
  selector: NavComponent.customElementName,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  encapsulation,
  schemas,
})
@CustomElement()
export class NavComponent extends CustomElementBaseComponent {
  public static override readonly customElementName = 'app-nav';
  private readonly hostElement: Element;

  constructor(
    ele: ElementRef,
    router: Router,
  ) {
    super();
    this.hostElement = ele.nativeElement;
    new NavBehavior(ele.nativeElement, router);
  }
}
