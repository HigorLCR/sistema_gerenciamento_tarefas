import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';
import { TarefasRepository } from './tarefas.repository';
import { tarefasProviders } from './tarefas.providers';
import { DatabaseModule } from 'src/database/database.module';


@Module({
    imports: [DatabaseModule],
    controllers: [TarefasController],
    providers: [TarefasService, TarefasRepository, ...tarefasProviders],
})

export class TarefasModule {}
