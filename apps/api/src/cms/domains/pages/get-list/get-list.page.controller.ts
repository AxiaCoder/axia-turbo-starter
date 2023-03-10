import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { Page } from '@axia/data';
import GetListPagesQuery from '../../../libs/queries/pages/get-list.query';

@Controller('pages')
export default class GetListPageController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async execute(): Promise<Page[]> {
    return this.queryBus.execute(new GetListPagesQuery());
  }
}
