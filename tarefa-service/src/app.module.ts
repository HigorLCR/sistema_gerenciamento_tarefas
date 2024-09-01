import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TarefasModule } from './tarefas/tarefas.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/conhecimento'),
        TarefasModule,
    ],
    controllers: [],
    providers: [],
})

export class AppModule {}