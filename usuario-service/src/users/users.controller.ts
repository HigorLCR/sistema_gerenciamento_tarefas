import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
} from '@nestjs/common';
import { AuthenticateDto } from './dtos/authenticate.dto';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UsersService } from './users.service';


@Controller('/users')
export class UsersController {

    constructor(public usersService: UsersService) { }

    @Get()
    async listUsers() {
        try {
            console.log('ENTROU LIST')
            let response = await this.usersService.listUsers();
            
            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }

    @Post('/auth')
    async authenticate(@Body() body: AuthenticateDto) {
        try {
            const { login, senha } = body;
            let response = await this.usersService.authenticate(login, senha);

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }

    @Get('/:id')
    async getUser(@Param('id') id: string) {
        try {
            console.log('ENTROU GET')
            const response = await this.usersService.getUser(id);

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }

    @Post()
    async createUser(@Body() body: CreateUserDto) {
        try {
            console.log('ENTROU CREATE')
            const { login, senha } = body;

            const response = await this.usersService.createUser(
                login,
                senha
            );

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        try {
            console.log('ENTROU UPDATE')
            const { login, senha } = body;

            const response = await this.usersService.updateUser(
                id,
                login,
                senha
            );

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        try {
            console.log('ENTROU DELETE')
            const response = await this.usersService.deleteUser(id);

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }
}
