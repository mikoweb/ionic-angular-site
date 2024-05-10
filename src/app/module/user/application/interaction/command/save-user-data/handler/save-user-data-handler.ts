import { Injectable } from '@angular/core';
import CommandHandler from '@app/core/application/command-bus/command-handler';
import SaveUserDataCommand from '@app/module/user/application/interaction/command/save-user-data/save-user-data-command';
import UserDataStore from '@app/module/user/domain/store/user-data-store';
import UserDataPersistence from '@app/module/user/infrastructure/persistence/user-data-persistence';
import MessageService from '@app/core/application/message/message-service';

@Injectable({
  providedIn: 'root',
})
export default class SaveUserDataHandler implements CommandHandler<SaveUserDataCommand> {
  public readonly commandType: string = SaveUserDataCommand.commandName;

  constructor(
    private readonly userDataStore: UserDataStore,
    private readonly userDataPersistence: UserDataPersistence,
    private readonly messageService: MessageService
  ) {}

  public async execute(command: SaveUserDataCommand) {
    try {
      this.userDataStore.loadFromDTO(command.userDataDTO);
      this.userDataPersistence.save(command.userDataDTO);

      await this.messageService.createSuccess({message: 'User data saved!'});
    } catch (error) {
      await this.messageService.createError({message: 'Saving error...'});
    }
  }
}
