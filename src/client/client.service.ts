import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './schemas/client.schema';

@Injectable()
export class ClientService {
    constructor(
        @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
    ) {}
    
    async createClient(client: Client): Promise<Client> {
        const newClient =  new  this.clientModel(client);
        return await newClient.save();
    }

    async getAllClients(): Promise<Client[]> {
        const clients = await this.clientModel.find().exec();
        return clients;
    }

    async getClientById(telegram_id: string): Promise<Client> {
        return await this.clientModel.findOne({ telegram_id }).exec();
    }

}
