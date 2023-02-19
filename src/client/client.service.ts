import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from 'src/orders/dto/create-order.dto';
import { OrdersService } from 'src/orders/orders.service';
import { Order } from 'src/orders/schemas/order.schema';
import { Client, ClientDocument } from './schemas/client.schema';

@Injectable()
export class ClientService {
    constructor(
        @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
        private orderService: OrdersService,
    ) {}
    
    async createClient(client: Client): Promise<Client> {
        const newClient =  new  this.clientModel(client);
        return await newClient.save();
    }

    async getAllClients(): Promise<Client[]> {
        const clients = await this.clientModel.find().exec();
        return clients;
    }

    async getClientByTelegramId(telegram_id: number): Promise<Client> {
        return await this.clientModel.findOne({ telegram_id }).exec();
    }

    async getClientById(id: string): Promise<Client> {
        return await this.clientModel.findById(id).exec();
    }

    async updateClientById(id: string, client: Client): Promise<Client> {
        let user = await this.clientModel.findById(id).exec();
        user.telegram_id = client.telegram_id || user.telegram_id;
        user.name = client.name || user.name;
        user.phone_number = client.phone_number || user.phone_number;
        return await user.save();
    }

    async updateClientByTelegramId(telegram_id: number, client: Client): Promise<Client> {
        let user = await this.clientModel.findOne({ telegram_id }).exec();
        user.telegram_id = client.telegram_id || user.telegram_id;
        user.name = client.name || user.name;
        user.phone_number = client.phone_number || user.phone_number;
        return await user.save();
    }

    async makeOrderByTelegramId(telegram_id: number, order: CreateOrderDto): Promise<Order> {
        let createdOrder = await this.orderService.createOrder(order);
        let client = await this.getClientByTelegramId(telegram_id);
        await this.updateClientByTelegramId(telegram_id, client);
        return createdOrder;
    }

    async getOrdersByTelegramId(telegram_id: number): Promise<Order[]> {
        let client = await this.getClientByTelegramId(telegram_id);
        return client.orders;
    }

    
    
}
