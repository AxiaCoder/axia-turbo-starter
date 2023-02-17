import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import DeletePageCommand from '../../../libs/commands/pages/delete.command';
import { ClerkAuthGuard } from '../../../../shared/libs/guards/clerk-auth.guard';
import { ClerkAdminGuard } from '../../../../shared/libs/guards/clerk-admin.guard';

@Controller('pages')
export default class DeletePageController {
  constructor(private readonly commandBus: CommandBus) {}

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(ClerkAuthGuard, ClerkAdminGuard)
  public async execute(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.commandBus.execute(
      new DeletePageCommand({
        id,
      }),
    );
  }
}
