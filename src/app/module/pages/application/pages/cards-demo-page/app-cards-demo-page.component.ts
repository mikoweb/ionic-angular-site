import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-app-cards-demo-page',
  templateUrl: './app-cards-demo-page.component.html',
  styleUrls: ['./app-cards-demo-page.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgForOf
  ]
})
export class AppCardsDemoPageComponent {
  protected cols: number[] = new Array(3).fill(0);
  protected rows: number[] = new Array(10).fill(0);
}
