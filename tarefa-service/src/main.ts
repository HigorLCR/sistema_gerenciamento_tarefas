import { NestFactory } from '@nestjs/core';
import { TarefasModule } from './tarefas/tarefas.module';

async function bootstrap() {
  const app = await NestFactory.create(TarefasModule);
  await app.listen(3000);
}
bootstrap();
