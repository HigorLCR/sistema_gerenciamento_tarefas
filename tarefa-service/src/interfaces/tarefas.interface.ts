import * as mongoose from 'mongoose';

export interface Tarefa extends mongoose.Document {
    titulo: String;
    descricao: String;
    status: String;
    dataCriacao: String;
}