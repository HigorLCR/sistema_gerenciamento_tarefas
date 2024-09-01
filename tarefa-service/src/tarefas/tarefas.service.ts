import { Injectable } from '@nestjs/common';
import { TarefasRepository } from "./tarefas.repository";

@Injectable()
export class TarefasService {

    constructor(public tarefasRepo: TarefasRepository) {}

    async getTarefa(id: string) {
        return await this.tarefasRepo.getTarefa(id);
    }

    async listTarefas() {
        return await this.tarefasRepo.listTarefas();
    }

    async createTarefa(titulo: string, descricao: string, status: string, dataCriacao: string) {
        return await this.tarefasRepo.createTarefa(titulo, descricao, status, dataCriacao);
    }

    async updateTarefa(id: string, dados: any) {
        return await this.tarefasRepo.updateTarefa(id, dados);
    }

    async deleteTarefa(id: string) {
        return await this.tarefasRepo.deleteTarefa(id);
    }
}