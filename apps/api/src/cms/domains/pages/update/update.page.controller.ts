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
import InputBodyPageDto from '../../../libs/dtos/page/input.body.page.dto';
import PageDto from '../../../libs/dtos/prisma/page.dto';
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
    @Body() body: InputBodyPageDto,
  ): Promise<PageDto> {
    return this.commandBus.execute(
      new UpdatePageCommand({
        id,
        item: body,
      }),
    );
  }
}
