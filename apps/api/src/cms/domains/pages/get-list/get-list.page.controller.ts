import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { I18n, I18nContext } from 'nestjs-i18n';

import PageDto from '../../../libs/dtos/prisma/page.dto';
import GetListPagesQuery from '../../../libs/queries/pages/get-list.query';

@Controller('pages')
export default class GetListPageController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async execute(@I18n() i18n: I18nContext): Promise<PageDto[]> {
    const message = await i18n.t('test.test');
    const message2 = await i18n.t('test.sub.test');
    console.log(message);
    console.log(message2);
    return this.queryBus.execute(new GetListPagesQuery());
  }
}
