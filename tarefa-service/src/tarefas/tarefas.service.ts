import { Injectable } from '@nestjs/common';
import { TarefasRepository } from "./tarefas.repository";

@Injectable()
export class TarefasService {

    constructor(public tarefasRepo: TarefasRepository) {}

    async getTarefa(id: string) {
        return this.tarefasRepo.getTarefa(id);
    }

    async listTarefas() {
        return this.tarefasRepo.listTarefas();
    }

    async createTarefa(dados: any) {
        return this.tarefasRepo.createTarefa(dados);
    }

    async updateTarefa(id: string, dados: any) {
        return this.tarefasRepo.updateTarefa(id, dados);
    }

    async deleteTarefa(id: string) {
        return this.tarefasRepo.deleteTarefa(id);
    }
}