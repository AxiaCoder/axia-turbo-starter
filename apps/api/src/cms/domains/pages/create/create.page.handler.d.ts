import { ICommandHandler } from '@nestjs/cqrs';
import CreatePageCommand from '../../../libs/commands/pages/create.command';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';
import PageDto from '../../../libs/dtos/prisma/page.dto';
export default class CreatePageHandler implements ICommandHandler<CreatePageCommand> {
    private pagesRepository;
    constructor(pagesRepository: PagesRepository);
    execute({ dto }: CreatePageCommand): Promise<PageDto>;
}
//# sourceMappingURL=create.page.handler.d.ts.map