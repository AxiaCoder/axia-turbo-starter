import { Injectable } from '@nestjs/common';
import { Page, PageEditData, PageForm } from '@axia/data';
import { CorePersistanceInterface } from '../../../shared/infrastructures/interfaces/core.persistance.interface';
import PagesPrismaRepository from '../persistance/prisma/pages.prisma.repository';
import { NotFoundException } from '../../../shared/libs/exceptions/not-found.exception';

@Injectable()
export default class PagesRepository
  implements CorePersistanceInterface<Page, PageForm>
{
  constructor(protected pagesPrismaRepository: PagesPrismaRepository) {}

  create(item: PageForm): Promise<Page> {
    return this.pagesPrismaRepository.create(item);
  }

  delete(id: number): Promise<Page> {
    return this.pagesPrismaRepository.delete(id);
  }

  get(id: number): Promise<Page> {
    return this.pagesPrismaRepository.get(id).then((page) => {
      if (!page) {
        throw new NotFoundException();
      }

      return page;
    });
  }

  getByRef(ref: string): Promise<Page> {
    return this.pagesPrismaRepository.getByRef(ref).then((page) => {
      if (!page) {
        throw new NotFoundException();
      }

      return page;
    });
  }

  list(): Promise<Page[]> {
    return this.pagesPrismaRepository.list();
  }

  update(item: PageEditData, id: number): Promise<Page> {
    return this.pagesPrismaRepository.update(item, id);
  }
}
