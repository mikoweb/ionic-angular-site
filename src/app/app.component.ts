import { AfterViewInit, ApplicationRef, Component, inject } from '@angular/core';
import { customElementParams } from '@app/core/application/custom-element/custom-element';
import { CommonModule } from '@angular/common';
import { CustomElementRegistry } from '@app/core/application/custom-element/custom-element';
import commandBusLoader from '@app/shared/infrastructure/config/command-bus/loaders';
import CommandBus from '@app/core/application/command-bus/command-bus';
import LoadUserDataCommand from '@app/module/user/application/interaction/command/load-user-data/load-user-data-command';
import { LayoutReady } from '@app/module/layout/ui/layout-ready';
import { LayoutInitializer } from '@app/module/layout/ui/layout-initializer';
import { RouterOutlet } from '@angular/router';
import { AppLayoutComponent } from '@app/module/layout/ui/elements/app-layout/app-layout.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    schemas: customElementParams.schemas,
  imports: [
    CommonModule,
    RouterOutlet,
    AppLayoutComponent
  ]
})
export class AppComponent implements AfterViewInit {
  constructor(appRef: ApplicationRef) {
    this.initApp(appRef);
  }

  private async initApp(appRef: ApplicationRef) {
    commandBusLoader();
    const commandBus = inject(CommandBus);

    CustomElementRegistry.init(appRef);

    commandBus.execute(new LoadUserDataCommand());
  }

  ngAfterViewInit(): void {
    LayoutReady.init();
    LayoutInitializer.init();
  }
}
