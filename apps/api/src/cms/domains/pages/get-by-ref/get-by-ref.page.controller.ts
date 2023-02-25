import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Page } from '@axia/data';
import GetByRefQuery from '../../../libs/queries/pages/get-by-ref.query';

@Controller('pages-by-ref')
export default class GetByRefPageController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(':ref')
  @HttpCode(HttpStatus.OK)
  public async execute(@Param('ref') ref): Promise<Page> {
    return this.queryBus.execute(new GetByRefQuery({ ref }));
  }
}
