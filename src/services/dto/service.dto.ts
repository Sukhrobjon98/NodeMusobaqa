import { Client } from "src/client/dto/client.dto";
import { Master } from "src/master/dto/master.dto";

export class Service {
    id: number;
    title: string;
    open_time: string;
    close_time: string;
    master: Master;
    clients: Client[];
    location: string;
}