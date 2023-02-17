import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';
import PageDto from '../../../libs/dtos/prisma/page.dto';
import GetListPagesQuery from '../../../libs/queries/pages/get-list.query';

@QueryHandler(GetListPagesQuery)
export default class GetListPageHandler
  implements IQueryHandler<GetListPagesQuery>
{
  constructor(private pagesRepository: PagesRepository) {}

  async execute(): Promise<PageDto[]> {
    return this.pagesRepository.list();
  }
}
