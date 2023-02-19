import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import GetMeController from './domain/get-me/get-me.controller';
import GetMeHandler from './domain/get-me/get-me.handler';
import UsersRepository from './infrastructure/repositories/users.repository';
import UsersPrismaRepository from './infrastructure/persistance/prisma/users.prisma.repository';
import PrismaService from '../prisma.service';
@Module({
  imports: [CqrsModule],
  controllers: [GetMeController],
  providers: [
    GetMeHandler,
    UsersRepository,
    UsersPrismaRepository,
    PrismaService,
  ],
})
export default class UserModule {}
