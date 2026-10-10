import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(process.env.PORT ?? 3000);
  console.log(`profile: ${process.env.NODE_ENV}`);
  console.log(`port: ${process.env.PORT}`);
}
void bootstrap();
