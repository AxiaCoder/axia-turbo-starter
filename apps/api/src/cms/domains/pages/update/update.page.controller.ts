import {
  Controller,
  Put,
  HttpCode,
  HttpStatus,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Page, PageEditData } from '@axia/data';
import UpdatePageCommand from '../../../libs/commands/pages/update.command';
import { ClerkAuthGuard } from '../../../../shared/libs/guards/clerk-auth.guard';
import { ClerkAdminGuard } from '../../../../shared/libs/guards/clerk-admin.guard';

@Controller('pages')
export default class UpdatePageController {
  constructor(private readonly commandBus: CommandBus) {}

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(ClerkAuthGuard, ClerkAdminGuard)
  public async execute(
    @Param('id', ParseIntPipe) id,
    @Body() body: PageEditData,
  ): Promise<Page> {
    return this.commandBus.execute(
      new UpdatePageCommand({
        id,
        item: body,
      }),
    );
  }
}
