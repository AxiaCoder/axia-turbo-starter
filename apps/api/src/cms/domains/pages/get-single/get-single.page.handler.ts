import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import PagesRepository from '../../../infrastructure/repositories/pages.repository';
import GetSinglePageQuery from '../../../libs/queries/pages/get-single.query';
import PageDto from '../../../libs/dtos/prisma/page.dto';

@QueryHandler(GetSinglePageQuery)
export default class GetSinglePageHandler
  implements IQueryHandler<GetSinglePageQuery>
{
  constructor(private pagesRepository: PagesRepository) {}

  async execute({ dto }: GetSinglePageQuery): Promise<PageDto> {
    return this.pagesRepository.get(dto.id);
  }
}
