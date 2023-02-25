import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  UseGuards,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { User } from '@axia/data';
import GetMeQuery from '../../libs/queries/get-me.query';
import { ClerkAuthGuard } from '../../../shared/libs/guards/clerk-auth.guard';

@Controller('users')
export default class GetMeController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('me')
  @HttpCode(HttpStatus.OK)
  @UseGuards(ClerkAuthGuard)
  public async execute(@Req() req): Promise<User> {
    const user = req.headers.clerk_user;

    return this.queryBus.execute(
      new GetMeQuery({
        user,
      }),
    );
  }
}
