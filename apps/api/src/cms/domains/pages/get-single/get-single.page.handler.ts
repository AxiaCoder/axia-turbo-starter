import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';
import GetSinglePageQuery from '../../../libs/queries/pages/get-single.query';
import { Page } from '@axia/data';

@QueryHandler(GetSinglePageQuery)
export default class GetSinglePageHandler
  implements IQueryHandler<GetSinglePageQuery>
{
  constructor(private pagesRepository: PagesRepository) {}

  async execute({ dto }: GetSinglePageQuery): Promise<Page> {
    return this.pagesRepository.get(dto.id);
  }
}
