import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LayoutReady } from './module/layout/application/layout-ready';
import { LayoutInitializer } from './module/layout/application/layout-initializer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterOutlet],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    LayoutReady.init();
    LayoutInitializer.init();
  }
}
