import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

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
  @Prop({
    type: String,
  })
  service_location: string;

    @Prop({
        type: String,
    })
    service_description: string;
    
    @Prop({
    })
    open_time: string;

    @Prop({
    })
    close_time: string;

    @Prop({
        required: true,
        type:Number,
    })
    service_price: number;

    @Prop({
        required: true,
    })
    spend_time: number;

    @Prop({
    })
    service_rating: number;

}

export const MasterSchema = SchemaFactory.createForClass(Master);