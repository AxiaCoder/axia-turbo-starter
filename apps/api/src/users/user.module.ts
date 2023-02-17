import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import GetMeController from './domain/get-me/get-me.controller';
import GetMeHandler from './domain/get-me/get-me.handler';
@Module({
  imports: [CqrsModule],
  controllers: [GetMeController],
  providers: [GetMeHandler],
})
export default class UserModule {}
