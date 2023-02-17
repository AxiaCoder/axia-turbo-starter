import { IQueryHandler } from '@nestjs/cqrs';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';
import PageDto from '../../../libs/dtos/prisma/page.dto';
import GetListPagesQuery from '../../../libs/queries/pages/get-list.query';
export default class GetListPageHandler implements IQueryHandler<GetListPagesQuery> {
    private pagesRepository;
    constructor(pagesRepository: PagesRepository);
    execute(): Promise<PageDto[]>;
}
//# sourceMappingURL=get-list.page.handler.d.ts.map