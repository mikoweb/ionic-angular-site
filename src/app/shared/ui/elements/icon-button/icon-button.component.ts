import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CustomElement, customElementParams } from '@app/core/application/custom-element/custom-element';
import CustomElementBaseComponent from '@app/core/application/custom-element/custom-element-base-component';
import GlobalStyleLoader from '@app/core/application/custom-element/global-style-loader';

const { encapsulation, schemas } = customElementParams;

@Component({
  selector: IconButtonComponent.ngSelectorName,
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  standalone: true,
  encapsulation,
  schemas,
  imports: [IonicModule]
})
@CustomElement()
export class IconButtonComponent extends CustomElementBaseComponent implements OnChanges {
  public static override readonly customElementName = 'app-icon-button';
  public static override readonly ngSelectorName: string
    = `${CustomElementBaseComponent.ngPrefix}-${IconButtonComponent.customElementName}`;

  @Input() name?: string;
  @Input() size: string = 'small'
  @Input() color: string = 'black';
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter();

  constructor(ele: ElementRef, gsl: GlobalStyleLoader) {
    super(ele, gsl);
  }

  public get button(): HTMLButtonElement | null {
    return this.getShadowRoot().querySelector('.app-icon-button');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('disabled')) {
      this.button!.disabled = changes['disabled'].currentValue !== null;
    }
  }

  protected onClick(): void {
    this.click.emit();
  }
}
