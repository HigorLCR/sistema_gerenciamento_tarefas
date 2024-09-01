import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Tarefa {

    @Prop({ required: true, unique: true })
    titulo: string;

    @Prop({ required: true })
    descricao: string;

    @Prop({ required: true })
    status: string;

    @Prop({  required: true })
    dataCriacao: string;
};

export const TarefaSchema = SchemaFactory.createForClass(Tarefa);
