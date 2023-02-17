import { Injectable } from '@nestjs/common';
import { CorePersistanceInterface } from '../../../../shared/infrastructures/interfaces/core.persistance.interface';
import PageDto from '../../../libs/dtos/prisma/page.dto';
import InputBodyPageDto from '../../../libs/dtos/page/input.body.page.dto';
import PrismaService from '../../../../prisma.service';

@Injectable()
export default class PagesPrismaRepository
  implements CorePersistanceInterface<PageDto, InputBodyPageDto>
{
  constructor(protected prisma: PrismaService) {}

  create(item: InputBodyPageDto): Promise<PageDto> {
    const obDate = {
      created_at: new Date(),
    };
    return this.prisma.pages.create({
      data: { ...item, ...obDate },
    });
  }

  delete(id: number): Promise<PageDto> {
    return this.prisma.pages.delete({
      where: {
        id,
      },
    });
  }

  get(id: number): Promise<PageDto> {
    return this.prisma.pages.findUnique({
      where: {
        id,
      },
    });
  }

  list(): Promise<PageDto[]> {
    return this.prisma.pages.findMany();
  }

  update(item: InputBodyPageDto, id: number): Promise<PageDto> {
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
