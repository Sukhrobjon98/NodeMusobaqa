import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Master } from "src/master/schemas/master.schema";

export type ServiceDocument = HydratedDocument<Service>;

@Schema()
export class Service {
    @Prop({type:String, required:true})
    title: string;
    @Prop({type: Number, required:true})
    service_id: number;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);