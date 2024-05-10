import Command from '@app/core/application/command-bus/command';
import UserDataDTO from '@app/module/user/ui/dto/user-data-dto';

export default class SaveUserDataCommand extends Command {
  constructor(
    public readonly userDataDTO: UserDataDTO
  ) {
    super();
  }
}
