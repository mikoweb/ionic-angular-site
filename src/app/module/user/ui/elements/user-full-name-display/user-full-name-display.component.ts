import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MobxAngularModule } from 'mobx-angular';
import UserDataStore from '@app/module/user/domain/store/user-data-store';
import { CustomElement, customElementParams } from '@app/core/application/custom-element/custom-element';
import CustomElementBaseComponent from '@app/core/application/custom-element/custom-element-base-component';
import GlobalStyleLoader from '@app/core/application/custom-element/global-style-loader';

const { encapsulation, schemas } = customElementParams;

@Component({
  selector: UserFullNameDisplayComponent.ngSelectorName,
  templateUrl: './user-full-name-display.component.html',
  styleUrls: ['./user-full-name-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  encapsulation,
  schemas,
  imports: [IonicModule, MobxAngularModule]
})
@CustomElement()
export class UserFullNameDisplayComponent extends CustomElementBaseComponent {
  public static override readonly customElementName = 'app-user-full-name-display';
  public static override readonly ngSelectorName: string
    = `${CustomElementBaseComponent.ngPrefix}-${UserFullNameDisplayComponent.customElementName}`;

  constructor(
    ele: ElementRef,
    gsl: GlobalStyleLoader,
    protected readonly userDataStore: UserDataStore
  ) {
    super(ele, gsl);
  }

  protected override get useGlobalStyle(): boolean {
    return true;
  }
}
