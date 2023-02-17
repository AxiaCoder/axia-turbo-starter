import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';
import GetListPagesQuery from '../../../libs/queries/pages/get-list.query';
import { Page } from '@axia/data';

@QueryHandler(GetListPagesQuery)
export default class GetListPageHandler
  implements IQueryHandler<GetListPagesQuery>
{
  constructor(private pagesRepository: PagesRepository) {}

  async execute(): Promise<Page[]> {
    return this.pagesRepository.list();
  }
}
