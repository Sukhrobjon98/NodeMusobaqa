import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Client } from 'src/client/schemas/client.schema';
import { Master } from 'src/master/schemas/master.schema';

export type OrderDocument = HydratedDocument<Order>;

class RangeDate {
  @Prop({
    type: Date,
    required: true,
  })
  start: Date;

  @Prop({
    type: Date,
    required: true,
  })
  end: Date;
}

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
    type: RangeDate,
    required: true,
  })
  time_range: RangeDate;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
