import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Tarefa } from '../schemas/tarefas.schema';
import { Model } from "mongoose";

@Injectable()
export class TarefasRepository {
    
    constructor(@InjectModel(Tarefa.name) private tarefaModel: Model<Tarefa>) {}

    async getTarefa(id: string) {
        return this.tarefaModel.findOne({
            _id: id
        });
    }

    async listTarefas() {
        return await this.tarefaModel.find().lean();
    }

    async createTarefa(titulo: string, descricao: string, status: string, dataCriacao: string) {
        const dados = {
            titulo: titulo,
            descricao: descricao,
            status: status,
            dataCriacao: dataCriacao
        };
        
        const tarefa = new this.tarefaModel(dados);

        return await tarefa.save();
    }

    async updateTarefa(id: string, titulo: string, descricao: string, status: string, dataCriacao: string) {
        const dados = {
            titulo: titulo,
            descricao: descricao,
            status: status,
            dataCriacao: dataCriacao
        }

        return this.tarefaModel.updateOne(
            {
                _id: id
            },
            dados
        );
    }

    async deleteTarefa(id: string) {
        return this.tarefaModel.deleteOne({
            _id: id
        });
    }
}