import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Service, ServiceSchema } from './schemas/service.schema';
import { ServicesService } from './services.service';

@Module({
    imports: [MongooseModule.forFeature([{name:Service.name,schema: ServiceSchema}])],
    providers: [ServicesService],
})
export class ServicesModule {}
