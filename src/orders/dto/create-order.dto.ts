import mongoose from "mongoose";

export class CreateOrderDto {
    master: mongoose.Schema.Types.ObjectId;
    client: mongoose.Schema.Types.ObjectId;
    date: Date;
    duration: number;
}