import { Inject, Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { Tarefa } from '../interfaces/tarefas.interface';
import { PostTarefaDto } from './dtos/post-tarefa.dto'

@Injectable()
export class TarefasRepository {
    
    constructor(
        @Inject('TAREFA_MODEL')
        private TarefaModel: Model<Tarefa>
    ) {}

    async getTarefa(id: string) {
    }

    async listTarefas(): Promise<any> {
        return this.TarefaModel.find();
    }

    async createTarefa(dados: any) {

    }

    async updateTarefa(id: string, dados: any) {

    }

    async deleteTarefa(id: string) {

    }
}