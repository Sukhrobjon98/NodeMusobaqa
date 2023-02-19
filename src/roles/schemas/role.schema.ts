import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

export enum RoleEnum {
  ADMIN = 'admin',
  MASTER = 'master',
  USER = 'user',
}

export class Role {
  @Prop({})
  telegram_id: number;
  @Prop({ type: String, enum: RoleEnum })
  role: RoleEnum;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
