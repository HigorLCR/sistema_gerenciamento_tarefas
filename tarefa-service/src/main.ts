import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';

async function bootstrap() {
  const app = await NestFactory.create(TarefasModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
