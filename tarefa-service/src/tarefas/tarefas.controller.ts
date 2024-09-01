import { 
    Controller, 
    Get, 
    Post, 
    Put, 
    Delete,
    Body,
    Param,
} from '@nestjs/common';

@Controller('/tarefas')
export class TarefasController {

    @Get()
    listTarefas() {

    }

    @Get('/:id')
    getTarefa(@Param('id') id: String) {
    }

    @Post()
    postTarefa(@Body() body: any) {
        console.log("body:", body)
    }

    @Put('/:id')
    updateTarefa() {

    }

    @Delete('/:id')
    deleteTarefa() {

    }
}
