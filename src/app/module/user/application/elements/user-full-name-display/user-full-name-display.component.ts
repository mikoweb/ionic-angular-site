import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MobxAngularModule } from 'mobx-angular';
import UserDataStore from '../../../infrastructure/store/user-data-store';

@Component({
  selector: UserFullNameDisplayComponent.componentName,
  templateUrl: './user-full-name-display.component.html',
  styleUrls: ['./user-full-name-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, MobxAngularModule]
})
export class UserFullNameDisplayComponent {
  public static readonly componentName = 'app-user-full-name-display';

  constructor(
    protected readonly userDataStore: UserDataStore
  ) {
    // TODO delete it

    (window as any).userDataStore = userDataStore;

    setTimeout(() => {
      this.userDataStore.firstName = 'John';
      this.userDataStore.lastName = 'Doe';
    }, 2000);
  }
}
