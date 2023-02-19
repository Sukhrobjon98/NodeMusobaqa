import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Order } from "src/orders/schemas/order.schema";

export type MasterDocument = HydratedDocument<Master>;

@Schema({ timestamps: true })
export class Master {
  // @Prop({type: mongoose.Schema.Types.ObjectId})
  // _id: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: String,
    required: false,
  })
  name: string;

  @Prop({
    type: String,
    required: false,
  })
  phone_number: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  is_active: boolean;

  @Prop()
  service_name: string;

  @Prop({ type: Number, required: false })
  service_id: number;

  @Prop({
    type: Object,
  })
  service_location: Object;

  @Prop({
    type: String,
  })
  service_description: string;

  @Prop({})
  open_time: string;

  @Prop({})
  close_time: string;

  @Prop({
    required: false,
    type: Number,
  })
  service_price: number;

  @Prop({
    required: false,
  })
  spend_time: number;

  @Prop({ default: 0 })
  service_rating: number;

  @Prop({ required: false, type: Number })
  telegram_id: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }] })
  orders: Order[];
}

export const MasterSchema = SchemaFactory.createForClass(Master);