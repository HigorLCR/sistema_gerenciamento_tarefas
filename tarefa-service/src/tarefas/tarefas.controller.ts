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

    constructor(public TarefasService: TarefasService) {}

    @Get()
    listTarefas() {
        return { response: "teste" };
    }

    @Get('/:id')
    getTarefa(@Param('id') id: String) {

    }

    @Post()
    postTarefa(@Body() body: PostTarefaDto) {
        console.log("body:", body);
    }

    @Put('/:id')
    updateTarefa() {

    }

    @Delete('/:id')
    deleteTarefa() {

    }
}
