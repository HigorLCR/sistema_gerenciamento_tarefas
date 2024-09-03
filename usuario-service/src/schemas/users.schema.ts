import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {

    @Prop({ required: true, unique: true })
    login: string;

    @Prop({ required: true })
    senha: string;
};

export const UserSchema = SchemaFactory.createForClass(User);
