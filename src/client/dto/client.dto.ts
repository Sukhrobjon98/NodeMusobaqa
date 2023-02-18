import { Service } from "src/services/dto/service.dto";

export class Client {
    id: number;
    name: string;
    phone_number: string;
    services: Service[];
}