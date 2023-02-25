import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Page } from '@axia/data';
import CreatePageCommand from '../../../libs/commands/pages/create.command';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';

@CommandHandler(CreatePageCommand)
export default class CreatePageHandler
  implements ICommandHandler<CreatePageCommand>
{
  constructor(private pagesRepository: PagesRepository) {}

  async execute({ dto }: CreatePageCommand): Promise<Page> {
    return this.pagesRepository.create(dto);
  }
}
