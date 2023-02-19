import { Order } from "src/orders/schemas/order.schema";

export class Client {
    id: number;
    name: string;
    phone_number: string;
    orders: Order[];
}