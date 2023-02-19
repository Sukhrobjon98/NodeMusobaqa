import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Master, MasterSchema } from './schemas/master.schema';
import { MasterService } from './master.service';

@Module({
    imports: [MongooseModule.forFeature([{name:Master.name,schema: MasterSchema}])],
    controllers: [],
    providers: [MasterService],
})
export class MasterModule {}
