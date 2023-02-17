import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import UpdatePageCommand from '../../../libs/commands/pages/update.command';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';
import { Page } from '@axia/data';

@CommandHandler(UpdatePageCommand)
export default class UpdatePageHandler
  implements ICommandHandler<UpdatePageCommand>
{
  constructor(private pagesRepository: PagesRepository) {}

  async execute({ dto }: UpdatePageCommand): Promise<Page> {
    return this.pagesRepository.update(dto.item, dto.id);
  }
}
