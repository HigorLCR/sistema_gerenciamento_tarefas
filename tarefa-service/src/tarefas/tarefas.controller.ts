import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    NotFoundException
} from '@nestjs/common';
import { CreateTarefaDto } from './dtos/createTarefa.dto';
import { UpdateTarefaDto } from './dtos/updateTarefa.dto';
import { TarefasService } from './tarefas.service';

//adicionar try catch blocks
@Controller('/tarefas')
export class TarefasController {

    constructor(public tarefasService: TarefasService) { }

    @Get()
    async listTarefas() {
        try {
            let response = await this.tarefasService.listTarefas();
            
            response = response.map((item) => {
                const dataFormatada = item.dataCriacao.split('T');
                
                return { 
                    id: item._id,
                    titulo: item.titulo,
                    descricao: item.descricao,
                    status: item.status,
                    dataCriacao: dataFormatada[0]
                }
            });

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }

    @Get('/:id')
    async getTarefa(@Param('id') id: string) {
        try {
            const response = await this.tarefasService.getTarefa(id);

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }

    @Post()
    async createTarefa(@Body() body: CreateTarefaDto) {
        try {
            const { titulo, descricao, status, dataCriacao } = body;

            const response = await this.tarefasService.createTarefa(
                titulo,
                descricao,
                status,
                dataCriacao
            );

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }

    @Put('/:id')
    async updateTarefa(@Param('id') id: string, @Body() body: UpdateTarefaDto) {
        try {
            const { titulo, descricao, status, dataCriacao } = body;

            const response = await this.tarefasService.updateTarefa(
                id,
                titulo,
                descricao,
                status,
                dataCriacao
            );

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }

    @Delete('/:id')
    async deleteTarefa(@Param('id') id: string) {
        try {
            const response = await this.tarefasService.deleteTarefa(id);

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }
}
