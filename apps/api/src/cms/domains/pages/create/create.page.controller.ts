import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import CreatePageInputDto from '../../../libs/dtos/page/create/input.dto';
import CreatePageCommand from '../../../libs/commands/pages/create.command';
import { ClerkAuthGuard } from '../../../../shared/libs/guards/clerk-auth.guard';
import { ClerkAdminGuard } from '../../../../shared/libs/guards/clerk-admin.guard';
import { Page } from '@axia/data';

@Controller('pages')
export default class CreatePageController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @UseGuards(ClerkAuthGuard, ClerkAdminGuard)
  public async execute(@Body() body: CreatePageInputDto): Promise<Page> {
    return this.commandBus.execute(new CreatePageCommand(body));
  }
}
