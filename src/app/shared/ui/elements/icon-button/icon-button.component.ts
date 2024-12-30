import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { CustomElement, customElementParams } from '@app/core/application/custom-element/custom-element';
import CustomElementBaseComponent from '@app/core/application/custom-element/custom-element-base-component';
import GlobalStyleLoader from '@app/core/application/custom-element/global-style-loader';

const { encapsulation, schemas } = customElementParams;

@Component({
    selector: CustomElementBaseComponent.ngPrefix + '-' + IconButtonComponent.customElementName,
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.scss'],
    encapsulation,
    schemas,
})
@CustomElement()
export class IconButtonComponent extends CustomElementBaseComponent implements OnChanges {
  public static override readonly customElementName = 'app-icon-button';

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
