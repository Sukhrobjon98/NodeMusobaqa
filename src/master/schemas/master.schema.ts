import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Order } from "src/orders/schemas/order.schema";

export type MasterDocument = HydratedDocument<Master>;




export class Master {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  phone_number: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  is_active: boolean;

  @Prop()
  service_name: string;

  @Prop({ type: Number, required: true })
  service_id: number;

  @Prop({
    type: String,
  })
  service_location: string;

  @Prop({
    type: String,
  })
  service_description: string;

  @Prop({})
  open_time: string;

  @Prop({})
  close_time: string;

  @Prop({
    required: true,
    type: Number,
  })
  service_price: number;

  @Prop({
    required: true,
  })
  spend_time: number;

  @Prop({default: 0})
  service_rating: number;

  @Prop({required: true, type: Number})
  telegram_id: number;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Orders'})
  orders: Order[];
}

export const MasterSchema = SchemaFactory.createForClass(Master);