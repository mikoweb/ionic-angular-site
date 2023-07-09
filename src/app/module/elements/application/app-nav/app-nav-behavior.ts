import Behavior from '../../../core/application/behavior/behavior';
import BehaviorEvent from '../../../core/application/behavior/value-object/behavior-event';
import { Router } from '@angular/router';

export class AppNavBehavior extends Behavior {
  constructor(
    element: Element,
    private readonly router: Router
  ) {
    super(element);
    this.initNav();
  }

  protected get events(): BehaviorEvent[] {
    return [
      new BehaviorEvent('click', (event: Event) => this.onAnchorClick(event), 'a'),
    ];
  }

  private initNav(): void {
    for (const anchor of this.getAllAnchorsQuery()) {
      const href: string = this.getAnchorHref(anchor);

      if (href === this.router.url) {
        this.setActive(anchor);
        break;
      }
    }
  }

  private onAnchorClick(event: Event): void {
    event.preventDefault();

    const anchor: HTMLAnchorElement = event.target as HTMLAnchorElement;
    this.router.navigate([this.getAnchorHref(anchor)]);

    this.setActive(anchor);
  }

  private setActive(anchor: HTMLAnchorElement): void {
    for (const el of this.getAllAnchorsQuery()) {
      const elements = [el, el.closest('ion-item'), el.closest('li')];

      for (const item of elements) {
        if (item !== null) {
          item.classList.remove('active');
        }
      }
    }

    const elements = [anchor, anchor.closest('ion-item'), anchor.closest('li')];

    for (const item of elements) {
      if (item !== null) {
        item.classList.add('active');
      }
    }
  }

  private getAllAnchorsQuery(): NodeListOf<HTMLAnchorElement> {
    return this.element.querySelectorAll('a');
  }

  private getAnchorHref(anchor: HTMLAnchorElement): string {
    return anchor.getAttribute('href') ?? '';
  }
}
