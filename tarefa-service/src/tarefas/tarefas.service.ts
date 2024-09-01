import { Injectable } from '@nestjs/common';
import { TarefasRepository } from "./tarefas.repository";

@Injectable()
export class TarefasService {

    constructor(public tarefasRepo: TarefasRepository) {}

    async getTarefa(id: string) {
        try {
            return await this.tarefasRepo.getTarefa(id);
        } catch (e: any) {
            return e;
        }
    }

    async listTarefas() {
        try {
            return await this.tarefasRepo.listTarefas();
        } catch (e: any) {
            return e;
        }
    }

    async createTarefa(titulo: string, descricao: string, status: string, dataCriacao: string) {
        try {
            return await this.tarefasRepo.createTarefa(titulo, descricao, status, dataCriacao);
        } catch (e: any) {
            return e;
        }
    }

    async updateTarefa(id: string, titulo: string, descricao: string, status: string, dataCriacao: string) {
        try {
            return await this.tarefasRepo.updateTarefa(id, titulo, descricao, status, dataCriacao);
        } catch (e: any) {
            return e;
        }
    }

    async deleteTarefa(id: string) {
        try {
            return await this.tarefasRepo.deleteTarefa(id);
        } catch (e: any) {
            return e;
        }
    }
}