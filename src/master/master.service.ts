import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/orders/schemas/order.schema';
import { Master, MasterDocument } from './schemas/master.schema';

@Injectable()
export class MasterService {
    constructor(
        @InjectModel(Master.name)
        private masterModel: Model<MasterDocument>,
        @InjectModel(Order.name)
        private orderModel: Model<Order>,
    ) {}

    async createMaster(master: Master): Promise<Master> {
        const newMaster = new this.masterModel(master);
        return await newMaster.save();
    }

    async getAllMasters(): Promise<Master[]> {
        const masters = await this.masterModel.find().exec();
        return masters;
    }

    async getMasterByTelegramId(telegram_id: number): Promise<Master> {
        return await this.masterModel.findOne({ telegram_id }).exec();
    }

    async getMasterById(id: string): Promise<Master> {
        return await this.masterModel.findById(id).exec();
    }

    async updateMasterById(id: string, master: Master): Promise<Master> {
        return await this.masterModel.findByIdAndUpdate(id, master).exec();
    }

    async updateMasterByTelegramId(telegram_id: number, master: Master): Promise<Master> {
        return await this.masterModel.findOneAndUpdate({ telegram_id }, master).exec();
    }

    async getAllOrdersByTelegramId(telegram_id: number): Promise<Order[]> {
        let master = await this.getMasterByTelegramId(telegram_id);
        return master.orders;
    }

    async getOrdersByTelegramIdInPeriod(telegram_id: number, start: Date, end: Date): Promise<Order[]> {
        return (await this.getAllOrdersByTelegramId(telegram_id)).filter(order => {
            return order.date >= start && order.date <= end;
        });
    }  
}