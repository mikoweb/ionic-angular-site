import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { customElementParams } from '@app/core/application/custom-element/custom-element';

@Component({
    selector: 'app-lorem-ipsum-page',
    templateUrl: './lorem-ipsum-page.component.html',
    styleUrls: ['./lorem-ipsum-page.component.scss'],
    schemas: customElementParams.schemas,
    imports: [
        NgTemplateOutlet,
    ]
})
export class LoremIpsumPageComponent {
}
