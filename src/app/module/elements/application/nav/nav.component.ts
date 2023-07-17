import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewEncapsulation } from '@angular/core';
import { NavBehavior } from './nav-behavior';
import { Router } from '@angular/router';

@Component({
  selector: NavComponent.componentName,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavComponent {
  public static readonly componentName = 'app-nav';
  private readonly hostElement: Element;

  constructor(
    ele: ElementRef,
    router: Router,
  ) {
    this.hostElement = ele.nativeElement;
    new NavBehavior(ele.nativeElement, router);
  }
}
