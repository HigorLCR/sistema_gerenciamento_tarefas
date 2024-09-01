import { Connection } from 'mongoose';
import { TarefaSchema } from '../schemas/tarefas.schema';

export const tarefasProviders = [
    {
        provide: 'TAREFA_MODEL',
        useFactory: (connection: Connection) => connection.model('Tarefa', TarefaSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];