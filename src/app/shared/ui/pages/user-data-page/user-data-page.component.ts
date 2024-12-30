import { Component } from '@angular/core';
import { UserDataFormComponent } from '@app/module/user/ui/elements/user-data-form/user-data-form.component';
import { customElementParams } from '@app/core/application/custom-element/custom-element';

@Component({
    selector: 'app-user-data-page',
    templateUrl: './user-data-page.component.html',
    styleUrls: ['./user-data-page.component.scss'],
    schemas: customElementParams.schemas,
    imports: [
        UserDataFormComponent
    ]
})
export class UserDataPageComponent {
}
