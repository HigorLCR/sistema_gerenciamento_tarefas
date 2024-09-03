import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from '../schemas/users.schema';
import { Model } from "mongoose";

@Injectable()
export class UsersRepository {
    
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async getUser(id: string) {
        return this.userModel.findOne({
            _id: id
        });
    }

    async authenticate(login: string, senha: string) {
        const users = await this.userModel.find().lean();

        const isAuth = users.some((usuario) => {
            return (usuario.login === login && usuario.senha === senha);
        });
        
        return isAuth;
    }

    async listUsers() {
        return await this.userModel.find().lean();
    }

    async createUser(login: string, senha: string) {
        const dados = {
            login,
            senha
        };
        
        const user = new this.userModel(dados);

        return await user.save();
    }

    async updateUser(id: string, login: string, senha: string) {
        const dados = {
            login,
            senha
        }

        return this.userModel.updateOne(
            {
                _id: id
            },
            dados
        );
    }

    async deleteUser(id: string) {
        return this.userModel.deleteOne({
            _id: id
        });
    }
}