import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LayoutReady } from '@app/module/layout/application/layout-ready';
import { LayoutInitializer } from '@app/module/layout/application/layout-initializer';
import { RouterOutlet } from '@angular/router';
import commandBusLoader from '@app/config/command-bus/loaders';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterOutlet],
})
export class AppComponent {
  constructor() {
    commandBusLoader();
    LayoutReady.init();
    LayoutInitializer.init();
  }
}
