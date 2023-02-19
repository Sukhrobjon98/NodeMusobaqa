import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export enum RoleEnum {
  ADMIN = 'admin',
  MASTER = 'master',
  USER = 'user',
}

@Schema({ timestamps: true })
export class Role {
  @Prop({})
  telegram_id: number;
  @Prop({ type: String, enum: RoleEnum })
  role: RoleEnum;
}

export const RoleSchema = SchemaFactory.createForClass(Role);

export type RoleDocument = HydratedDocument<Role>;