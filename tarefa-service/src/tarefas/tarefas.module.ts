import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';
import { TarefasRepository } from './tarefas.repository';
import { MongooseModule } from '@nestjs/mongoose'
import { Tarefa, TarefaSchema } from 'src/schemas/tarefas.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Tarefa.name,
            schema: TarefaSchema,
        }])
    ],
    controllers: [TarefasController],
    providers: [TarefasService, TarefasRepository],
})

export class TarefasModule {}
