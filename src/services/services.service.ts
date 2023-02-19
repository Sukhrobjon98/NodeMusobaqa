import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service, ServiceDocument } from './schemas/service.schema';

@Injectable()
export class ServicesService {
    constructor(
        @InjectModel('Service') private serviceModel: Model<ServiceDocument>,
    ) {}

    async createService(service: ServiceDocument): Promise<ServiceDocument> {
        const newService = new this.serviceModel(service);
        return newService.save();
    }

    async getAllServices(): Promise<Service[]> {
        const services = this.serviceModel.find().exec();
        return services;
    }
}
