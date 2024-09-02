import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UsersService } from './users.service';


@Controller('/users')
export class UsersController {

    constructor(public usersService: UsersService) { }

    @Get()
    async listUsers() {
        try {
            let response = await this.usersService.listUsers();
            
            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }

    @Get('/:id')
    async getUser(@Param('id') id: string) {
        try {
            const response = await this.usersService.getUser(id);

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }

    @Post()
    async createUser(@Body() body: CreateUserDto) {
        try {
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
            const response = await this.usersService.deleteUser(id);

            return { response: response };
        } catch (e: any) {
            return { error: e };
        }
    }
}
