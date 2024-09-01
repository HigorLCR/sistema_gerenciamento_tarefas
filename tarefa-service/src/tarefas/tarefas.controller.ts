import { 
    Controller, 
    Get, 
    Post, 
    Put, 
    Delete,
    Body,
    Param,
} from '@nestjs/common';
import { PostTarefaDto } from './dtos/post-tarefa.dto';

@Controller('/tarefas')
export class TarefasController {

    @Get()
    listTarefas() {

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
