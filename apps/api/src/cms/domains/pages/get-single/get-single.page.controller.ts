import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Page } from '@axia/data';
import GetSinglePageQuery from '../../../libs/queries/pages/get-single.query';

@Controller('pages')
export default class GetSinglePageController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async execute(@Param('id', ParseIntPipe) id): Promise<Page> {
    return this.queryBus.execute(new GetSinglePageQuery({ id }));
  }
}
