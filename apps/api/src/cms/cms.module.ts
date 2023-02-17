import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import PrismaService from '../prisma.service';
import PagesPrismaRepository from './infrastructure/persistance/prisma/pages.prisma.repository';
import PagesRepository from './infrastructure/repositories/pages.repository';
import CreatePageController from './domains/pages/create/create.page.controller';
import DeletePageController from './domains/pages/delete/delete.page.controller';
import GetListPageController from './domains/pages/get-list/get-list.page.controller';
import GetSinglePageController from './domains/pages/get-single/get-single.page.controller';
import UpdatePageController from './domains/pages/update/update.page.controller';
import GetSinglePageHandler from './domains/pages/get-single/get-single.page.handler';
import GetListPageHandler from './domains/pages/get-list/get-list.page.handler';
import UpdatePageHandler from './domains/pages/update/update.page.handler';
import DeletePageHandler from './domains/pages/delete/delete.page.handler';
import CreatePageHandler from './domains/pages/create/create.page.handler';

const NewsControllers = [];

const PageControllers = [
  CreatePageController,
  DeletePageController,
  GetListPageController,
  GetSinglePageController,
  UpdatePageController,
];

const Controllers = [...NewsControllers, ...PageControllers];

const NewsHandlers = [];

const PageHandlers = [
  CreatePageHandler,
  DeletePageHandler,
  GetListPageHandler,
  GetSinglePageHandler,
  UpdatePageHandler,
];

const Handlers = [...NewsHandlers, ...PageHandlers];

const Repositories = [PagesRepository];

const SqlRepositories = [PagesPrismaRepository];

const Services = [];

@Module({
  imports: [CqrsModule],
  controllers: [...Controllers],
  providers: [
    ...Handlers,
    ...Repositories,
    ...SqlRepositories,
    ...Services,
    PrismaService,
  ],
})
export default class CmsModule {}
