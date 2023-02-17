import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CmsModule from './cms/cms.module';
import UserModule from './users/user.module';

@Module({
  imports: [CmsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
