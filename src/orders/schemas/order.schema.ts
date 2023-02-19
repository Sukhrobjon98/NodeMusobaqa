import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Client } from 'src/client/schemas/client.schema';
import { Master } from 'src/master/schemas/master.schema';

export type OrderDocument = HydratedDocument<Order>;


export class Order {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Master.name,
  })
  master: Master;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Client.name,
  })
  client: Client;

  @Prop({
    type: Date,
    required: true,
  })
  date: Date;

  @Prop({
    type: Number,
    required: true,
  })
  duration: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
