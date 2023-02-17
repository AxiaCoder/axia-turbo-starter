import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import JwtAuthGuard from '../../../../shared/libs/guards/jwt-auth.guard';
import GetSinglePageQuery from '../../../libs/queries/pages/get-single.query';
import PageDto from '../../../libs/dtos/prisma/page.dto';

@Controller('pages')
export default class GetSinglePageController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async execute(@Param('id', ParseIntPipe) id): Promise<PageDto> {
    return this.queryBus.execute(new GetSinglePageQuery({ id }));
  }
}
