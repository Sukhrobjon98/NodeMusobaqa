import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Master } from "src/master/schemas/master.schema";

export type ServiceDocument = HydratedDocument<Service>;

export class Service {
    @Prop({
        type: String,
        required: true,
    })
    title: string;

    action: string;

    @Prop({
        type: String,
        required: true,
    })
    open_time: string;

    @Prop({
        type: String,
        required: true,
    })
    close_time: string;

    @Prop({
        type: String,
        required: true,
    })
    location: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Master',
    })
    master: Master;


}

export const ServiceSchema = SchemaFactory.createForClass(Service);