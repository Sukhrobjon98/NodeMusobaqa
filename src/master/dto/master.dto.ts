import { Client } from "src/client/dto/client.dto";
import { Order } from "src/orders/schemas/order.schema";

export class Master {
  id: number;
  name: string;
  phone_number: string;
  orders: Order[];
  clients: Client[];
}
