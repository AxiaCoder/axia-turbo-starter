import { IQueryHandler } from '@nestjs/cqrs';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';
import GetSinglePageQuery from '../../../libs/queries/pages/get-single.query';
import PageDto from '../../../libs/dtos/prisma/page.dto';
export default class GetSinglePageHandler implements IQueryHandler<GetSinglePageQuery> {
    private pagesRepository;
    constructor(pagesRepository: PagesRepository);
    execute({ dto }: GetSinglePageQuery): Promise<PageDto>;
}
//# sourceMappingURL=get-single.page.handler.d.ts.map