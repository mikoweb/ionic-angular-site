import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import {
  IonProgressBar,
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonHeader, IonItem, IonLabel, IonList,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar, IonPopover
} from '@ionic/angular/standalone';
import { NavComponent } from '@app/shared/ui/elements/nav/nav.component';
import { customElementParams } from '@app/core/application/custom-element/custom-element';
import { IconButtonComponent } from '@app/shared/ui/elements/icon-button/icon-button.component';
import {
  UserFullNameDisplayComponent
} from '@app/module/user/ui/elements/user-full-name-display/user-full-name-display.component';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  schemas: customElementParams.schemas,
  imports: [
    IonProgressBar,
    IonMenuButton,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonList,
    NavComponent,
    IonPopover,
    IconButtonComponent,
    UserFullNameDisplayComponent,
  ]
})
export class AppLayoutComponent implements AfterViewInit {
  @ViewChild('menuButtonTemplate') menuButtonTemplate!: TemplateRef<any>;
  @ViewChild('headerToolbarButtons') headerToolbarButtons!: any;
  @ViewChild('menuTemplate') menuTemplate!: TemplateRef<any>;

  ngAfterViewInit(): void {
    this.reloadLayoutElement('app-progress');
    this.replaceLayoutElement('app-menu-button', this.createTemplateElement(this.menuButtonTemplate));
    this.replaceLayoutElement('app-menu', this.createTemplateElement(this.menuTemplate), '.app-drawer__content');

    document.getElementById('app-header-toolbar-buttons')?.append(...this.headerToolbarButtons.nativeElement.children);
  }

  private createTemplateElement(ref: any): NodeListOf<ChildNode> {
    const template: HTMLTemplateElement = ref.nativeElement;

    return template.content.cloneNode(true).childNodes;
  }

  private replaceLayoutElement(id: string, nodes: NodeListOf<ChildNode>, moveTo: string | null = null): void {
    const element: HTMLElement | null = document.getElementById(id);

    if (element !== null) {
      const oldHTML = element.innerHTML;
      element.innerHTML = '';
      element.append(...nodes);
      element.classList.add('ready');

      if (moveTo !== null) {
        const target = element.querySelector(moveTo);

        if (target !== null) {
          target.innerHTML = oldHTML;
        }
      }
    }
  }

  private reloadLayoutElement(id: string): void {
    const element: HTMLElement | null = document.getElementById(id);

    if (element !== null) {
      const cloned = element.cloneNode(true);
      element.replaceWith(cloned);
      (cloned as Element).classList.add('ready');
    }
  }
}
