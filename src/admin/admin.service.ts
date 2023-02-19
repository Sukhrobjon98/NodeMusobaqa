import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './schema/admin.schema';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel(Admin.name) private adminModel: Model<Admin>,
    ) {}

    async getAdmins(): Promise<Admin[]> {
        return await this.adminModel.find().exec();
    }

}
