import { Injectable } from '@nestjs/common';
import { UsersRepository } from "./users.repository";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {

    constructor(public usersRepo: UsersRepository) { }

    async getUser(id: string) {
        try {
            return await this.usersRepo.getUser(id);
        } catch (e: any) {
            return e;
        }
    }

    async authenticate(login: string, senha: string) {
        try {
            const isAuth = await this.usersRepo.authenticate(login, senha);

            if (isAuth) {
                const userData = { login, senha };
                const secretKey = 'chave_secreta';

                return jwt.sign(userData, secretKey, { expiresIn: '1h' });
            }

            return null;
        } catch (e: any) {
            return e;
        }
    }

    async listUsers() {
        try {
            return await this.usersRepo.listUsers();
        } catch (e: any) {
            return e;
        }
    }

    async createUser(login: string, senha: string) {
        try {
            return await this.usersRepo.createUser(login, senha);
        } catch (e: any) {
            return e;
        }
    }

    async updateUser(id: string, login: string, senha: string) {
        try {
            return await this.usersRepo.updateUser(id, login, senha);
        } catch (e: any) {
            return e;
        }
    }

    async deleteUser(id: string) {
        try {
            return await this.usersRepo.deleteUser(id);
        } catch (e: any) {
            return e;
        }
    }
}