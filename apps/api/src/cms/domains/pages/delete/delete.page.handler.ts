import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import DeletePageCommand from '../../../libs/commands/pages/delete.command';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';

@CommandHandler(DeletePageCommand)
export default class DeletePageHandler
  implements ICommandHandler<DeletePageCommand>
{
  constructor(private pagesRepository: PagesRepository) {}

  async execute({ dto }: DeletePageCommand): Promise<void> {
    await this.pagesRepository.delete(dto.id);
  }
}
