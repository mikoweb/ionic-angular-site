import { inject } from '@angular/core';
import CommandHandlerRegistry from '@app/core/application/command-bus/command-handler-registry';
import SaveUserDataHandler from '@app/module/user/application/interaction/command/save-user-data/handler/save-user-data-handler';
import LoadUserDataHandler from '@app/module/user/application/interaction/command/load-user-data/handler/load-user-data-handler';

export default function userLoader() {
  inject(CommandHandlerRegistry).registerAny([
    inject(SaveUserDataHandler),
    inject(LoadUserDataHandler),
  ]);
}
