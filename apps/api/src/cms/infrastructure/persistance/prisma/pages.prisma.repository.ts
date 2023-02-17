import { Injectable } from '@nestjs/common';
import { CorePersistanceInterface } from '../../../../shared/infrastructures/interfaces/core.persistance.interface';
import InputBodyPageDto from '../../../libs/dtos/page/input.body.page.dto';
import PrismaService from '../../../../prisma.service';
import { Page } from '@axia/data';
import { I18nContext } from 'nestjs-i18n';

@Injectable()
export default class PagesPrismaRepository
  implements CorePersistanceInterface<Page, InputBodyPageDto>
{
  constructor(protected prisma: PrismaService) {}

  async create(item: InputBodyPageDto): Promise<Page> {
    const obDate = {
      created_at: new Date(),
    };
    return this.prisma.pages.create({
      data: { ...item, ...obDate },
    });
  }

  delete(id: number): Promise<Page> {
    return this.prisma.pages.delete({
      where: {
        id,
      },
    });
  }

  get(id: number): Promise<Page> {
    return this.prisma.pages.findUnique({
      where: {
        id,
      },
    });
  }

  getByRef(ref: string): Promise<Page> {
    const i18n = I18nContext.current();

    return this.prisma.pages.findFirst({
      where: {
        reference: ref,
        locale: i18n?.lang ?? 'en_GB',
      },
    });
  }

  list(): Promise<Page[]> {
    return this.prisma.pages.findMany();
  }

  update(item: InputBodyPageDto, id: number): Promise<Page> {
    const obDate = {
      updated_at: new Date(),
    };
    return this.prisma.pages.update({
      where: {
        id,
      },
      data: { ...item, ...obDate },
    });
  }
}
