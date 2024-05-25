import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log('Current wd: ', process.cwd());
  console.log('dirname: ', join(__dirname, '..', 'public'));
  await app.listen(3002);
}
bootstrap();
