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
import { PostTarefaDto } from './dtos/post-tarefa.dto';
import { TarefasService } from './tarefas.service';

//adicionar try catch blocks
@Controller('/tarefas')
export class TarefasController {

    constructor(public tarefasService: TarefasService) {}

    @Get()
    async listTarefas() {
        const response = await this.tarefasService.listTarefas();

        return { response: response };
    }

    @Get('/:id')
    async getTarefa(@Param('id') id: String) {

    }

    @Post()
    async postTarefa(@Body() body: PostTarefaDto) {
        const { titulo, descricao, status, dataCriacao } = body;

        const response = await this.tarefasService.createTarefa(
            titulo,
            descricao,
            status,
            dataCriacao
        );

        return { response: response };
    }

    @Put('/:id')
    async updateTarefa() {

    }

    @Delete('/:id')
    async deleteTarefa() {

    }
}
