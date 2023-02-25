import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { Page } from '@axia/data';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';
import GetByRefQuery from '../../../libs/queries/pages/get-by-ref.query';

@QueryHandler(GetByRefQuery)
export default class GetByRefPageHandler
  implements IQueryHandler<GetByRefQuery>
{
  constructor(private pagesRepository: PagesRepository) {}

  async execute({ dto }: GetByRefQuery): Promise<Page> {
    return this.pagesRepository.getByRef(dto.ref);
  }
}
