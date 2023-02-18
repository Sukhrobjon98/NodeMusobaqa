import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Service } from "src/services/schemas/service.schema";

export type ClientDocument = HydratedDocument<Client>;


@Schema()
export class Client {
    @Prop(
        {
            type: String,
            required: true,
        }
    )
    name: string;

    @Prop({
        type: String,
        required: true,
    })
    phone_number: string;

}

export const ClientSchema = SchemaFactory.createForClass(Client);