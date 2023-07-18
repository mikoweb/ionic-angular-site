import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import UserDataStore from '@app/module/user/infrastructure/store/user-data-store';
import { autorun } from 'mobx';
import { CustomElement, customElementParams } from '@app/module/core/application/custom-element/custom-element';
import CustomElementBaseComponent from '@app/module/core/application/custom-element/custom-element-base-component';

const { encapsulation, schemas } = customElementParams;

@Component({
  selector: UserDataFormComponent.customElementName,
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  encapsulation,
  schemas,
  imports: [IonicModule, ReactiveFormsModule]
})
@CustomElement()
export class UserDataFormComponent extends CustomElementBaseComponent implements OnInit {
  public static override readonly customElementName: string = 'app-user-data-form';

  protected readonly form = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
  });

  constructor(
    protected readonly userDataStore: UserDataStore
  ) {
    super();
  }

  public ngOnInit(): void {
    autorun(() => this.updateFormFromStore());
  }

  protected onSubmit(): void {
    if (this.form.valid) {
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
