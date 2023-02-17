import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    // eslint-disable-next-line prefer-regex-literals
    origin: [new RegExp(/localhost:[0-9]+$/), new RegExp(/localhost$/)],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
