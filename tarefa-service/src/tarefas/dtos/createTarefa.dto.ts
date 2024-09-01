import { IsString, IsDateString } from 'class-validator';

export class CreateTarefaDto {

    @IsString()
    titulo: string;

    @IsString()
    descricao: string;

    @IsString()
    status: string;

    @IsDateString()
    dataCriacao: string;
}