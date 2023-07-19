import { Injectable } from '@angular/core';
import CommandHandler from '@app/module/core/application/command-bus/command-handler';
import SaveUserDataCommand from '@app/module/user/application/command/save-user-data-command';

@Injectable({
  providedIn: 'root',
})
export default class SaveUserDataHandler implements CommandHandler<SaveUserDataCommand> {
  public readonly commandType: string = SaveUserDataCommand.commandName;

  public async execute(command: SaveUserDataCommand) {
    // TODO
    console.log(command.type);
  }
}
