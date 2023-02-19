import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Order } from "src/orders/schemas/order.schema";

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

    @Prop({
        type: Number,
        required: true,
    })
    telegram_id: number;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]})
    orders: Order[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);