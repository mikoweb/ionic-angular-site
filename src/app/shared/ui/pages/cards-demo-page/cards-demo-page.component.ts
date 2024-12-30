import { Component } from '@angular/core';
import { customElementParams } from '@app/core/application/custom-element/custom-element';
import { NgForOf } from '@angular/common';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
    selector: 'app-cards-demo-page',
    templateUrl: './cards-demo-page.component.html',
    styleUrls: ['./cards-demo-page.component.scss'],
    schemas: customElementParams.schemas,
  imports: [
    NgForOf,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  ]
})
export class CardsDemoPageComponent {
  protected cols: number[] = new Array(3).fill(0);
  protected rows: number[] = new Array(12).fill(0);
}
