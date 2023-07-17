import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import UserDataStore from '../../../infrastructure/store/user-data-store';
import { autorun } from 'mobx';

@Component({
  selector: UserDataFormComponent.componentName,
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, ReactiveFormsModule]
})
export class UserDataFormComponent implements OnInit {
  public static readonly componentName = 'app-user-data-form';

  protected readonly form = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
  });

  constructor(
    protected readonly userDataStore: UserDataStore
  ) {}

  public ngOnInit(): void {
    autorun(() => this.updateFormFromStore());
  }

  protected onSubmit(): void {
    if (this.form.valid) {
      // TODO
      // TODO data persistence

      // TODO delete it
      console.log('!!! SUBMIT !!!');
      console.log(this.form.value);
    }
  }

  private updateFormFromStore(): void
  {
    this.form.setValue({
      firstName: this.userDataStore.firstName ?? '',
      lastName: this.userDataStore.lastName ?? '',
      email: this.userDataStore.email ?? '',
    });
  }
}
