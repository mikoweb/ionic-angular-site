import { Injectable } from '@angular/core';
import CommandHandler from '@app/module/core/application/command-bus/command-handler';
import SaveUserDataCommand from '@app/module/user/application/command/save-user-data-command';
import UserDataStore from '@app/module/user/infrastructure/store/user-data-store';
import UserDataPersistence from '@app/module/user/infrastructure/persistence/user-data-persistence';

@Injectable({
  providedIn: 'root',
})
export default class SaveUserDataHandler implements CommandHandler<SaveUserDataCommand> {
  public readonly commandType: string = SaveUserDataCommand.commandName;

  constructor(
    private readonly userDataStore: UserDataStore,
    private readonly userDataPersistence: UserDataPersistence
  ) {}

  public async execute(command: SaveUserDataCommand) {
    this.userDataStore.loadFromDTO(command.userDataDTO);
    this.userDataPersistence.save(command.userDataDTO);
  }
}
