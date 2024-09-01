import { IsString, IsDateString } from 'class-validator';

export class PostTarefaDto {

    @IsString()
    titulo: string;

    @IsString()
    descricao: string;

    @IsString()
    status: string;

    @IsDateString()
    dataCriacao: any;
}