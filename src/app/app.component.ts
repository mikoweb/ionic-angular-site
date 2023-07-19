import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LayoutReady } from '@app/module/layout/application/layout-ready';
import { LayoutInitializer } from '@app/module/layout/application/layout-initializer';
import { RouterOutlet } from '@angular/router';
import commandBusLoader from '@app/config/command-bus/loaders';
import CommandBus from '@app/module/core/application/command-bus/command-bus';
import LoadUserDataCommand from '@app/module/user/application/command/load-user-data-command';

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
    const commandBus = inject(CommandBus);

    commandBus.execute(new LoadUserDataCommand());

    LayoutReady.init();
    LayoutInitializer.init();
  }
}
