import { ICommandHandler } from '@nestjs/cqrs';
import PageDto from '../../../libs/dtos/prisma/page.dto';
import UpdatePageCommand from '../../../libs/commands/pages/update.command';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';
export default class UpdatePageHandler implements ICommandHandler<UpdatePageCommand> {
    private pagesRepository;
    constructor(pagesRepository: PagesRepository);
    execute({ dto }: UpdatePageCommand): Promise<PageDto>;
}
//# sourceMappingURL=update.page.handler.d.ts.map