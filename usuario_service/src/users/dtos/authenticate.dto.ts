import { IsString } from 'class-validator';

export class AuthenticateDto {

    @IsString()
    login: string;

    @IsString()
    senha: string
}