import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { WsAdapter } from '@nestjs/platform-ws'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new WsAdapter(app))
  await app.listen(3000);
}
bootstrap();
