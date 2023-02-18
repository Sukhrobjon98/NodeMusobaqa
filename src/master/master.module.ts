import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Master, MasterSchema } from './schemas/master.schema';

@Module({
    imports: [MongooseModule.forFeature([{name:Master.name,schema: MasterSchema}])],
    controllers: [],
})
export class MasterModule {}
