import { Injectable } from '@angular/core';
import CommandHandler from '@app/module/core/application/command-bus/command-handler';
import LoadUserDataCommand from '@app/module/user/application/command/load-user-data-command';

@Injectable({
  providedIn: 'root',
})
export default class LoadUserDataHandler implements CommandHandler<LoadUserDataCommand> {
  public readonly commandType: string = LoadUserDataCommand.commandName;

  public async execute(command: LoadUserDataCommand) {
    // TODO
  }
}
