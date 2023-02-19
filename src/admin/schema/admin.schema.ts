import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
    telegram_id: number;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);