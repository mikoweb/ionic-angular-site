import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewEncapsulation } from '@angular/core';
import { AppNavBehavior } from './app-nav-behavior';
import { Router } from '@angular/router';

@Component({
  selector: AppNavComponent.componentName,
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppNavComponent {
  public static readonly componentName = 'app-nav';
  private readonly hostElement: Element;

  constructor(
    ele: ElementRef,
    router: Router,
  ) {
    this.hostElement = ele.nativeElement;
    new AppNavBehavior(ele.nativeElement, router);
  }
}
