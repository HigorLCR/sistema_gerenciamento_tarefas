import { IsString } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    login: string;

    @IsString()
    senha: string
}