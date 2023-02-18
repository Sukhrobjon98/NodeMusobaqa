import { Client } from "src/client/dto/client.dto";
import { Service } from "src/services/dto/service.dto";

export class Master {
  id: number;
  name: string;
  phone_number: string;
  services: Service[];
  clients: Client[];
}
