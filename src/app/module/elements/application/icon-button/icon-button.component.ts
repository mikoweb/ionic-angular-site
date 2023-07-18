import { Component, EventEmitter, Input, Output, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IconButton } from '@material/mwc-icon-button/mwc-icon-button';
import { CustomElement, customElementParams } from '@app/module/core/application/custom-element/custom-element';
import CustomElementBaseComponent from '@app/module/core/application/custom-element/custom-element-base-component';

const { encapsulation, schemas } = customElementParams;

@Component({
  selector: IconButtonComponent.customElementName,
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
  private readonly shadowRoot: Document;

  @Input() name?: string;
  @Input() size?: string;
  @Input() color?: string;
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter();

  constructor(ele: ElementRef) {
    super();
    this.shadowRoot = ele.nativeElement.shadowRoot;
  }

  public get button(): IconButton | null {
    return this.shadowRoot.querySelector('.app-icon-button');
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
