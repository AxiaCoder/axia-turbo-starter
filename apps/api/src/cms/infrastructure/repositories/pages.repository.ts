import { Injectable } from '@nestjs/common';
import { CorePersistanceInterface } from '../../../shared/infrastructures/interfaces/core.persistance.interface';
import PageDto from '../../libs/dtos/prisma/page.dto';
import InputBodyPageDto from '../../libs/dtos/page/input.body.page.dto';
import PagesPrismaRepository from '../persistance/prisma/pages.prisma.repository';

@Injectable()
export default class PagesRepository
  implements CorePersistanceInterface<PageDto, InputBodyPageDto>
{
  constructor(protected pagesPrismaRepository: PagesPrismaRepository) {}

  create(item: InputBodyPageDto): Promise<PageDto> {
    return this.pagesPrismaRepository.create(item);
  }

  delete(id: number): Promise<PageDto> {
    return this.pagesPrismaRepository.delete(id);
  }

  get(id: number): Promise<PageDto> {
    return this.pagesPrismaRepository.get(id);
  }

  list(): Promise<PageDto[]> {
    return this.pagesPrismaRepository.list();
  }

  update(item: InputBodyPageDto, id: number): Promise<PageDto> {
    return this.pagesPrismaRepository.update(item, id);
  }
}
