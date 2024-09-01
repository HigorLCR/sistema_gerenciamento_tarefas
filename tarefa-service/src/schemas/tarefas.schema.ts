import * as mongoose from 'mongoose';

export const TarefaSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    status: String,
    dataCriacao: String,
});
