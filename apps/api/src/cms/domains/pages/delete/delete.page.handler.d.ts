import { ICommandHandler } from '@nestjs/cqrs';
import DeletePageCommand from '../../../libs/commands/pages/delete.command';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';
export default class DeletePageHandler implements ICommandHandler<DeletePageCommand> {
    private pagesRepository;
    constructor(pagesRepository: PagesRepository);
    execute({ dto }: DeletePageCommand): Promise<void>;
}
//# sourceMappingURL=delete.page.handler.d.ts.map