import {
  Component,
  EventEmitter,
  Input,
  Output,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ElementRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IconButton } from '@material/mwc-icon-button/mwc-icon-button';

@Component({
  selector: IconButtonComponent.componentName,
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule]
})
export class IconButtonComponent implements OnChanges {
  public static readonly componentName = 'app-icon-button';
  private readonly shadowRoot: Document;

  @Input() name?: string;
  @Input() size?: string;
  @Input() color?: string;
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter();

  constructor(ele: ElementRef) {
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
