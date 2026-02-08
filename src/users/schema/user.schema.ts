import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserRole = 'user' | 'admin';

@Schema({ timestamps: true })
export class User extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, default: 'user', enum: ['user', 'admin'] })
    role: UserRole;

    @Prop({ required: true, unique: true, lowercase: true })
    email: string;

    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);