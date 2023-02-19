import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from 'src/orders/orders.module';
import { ServicesModule } from 'src/services/services.module';
import { ClientService } from './client.service';
import { Client, ClientSchema } from './schemas/client.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]), ServicesModule, OrdersModule],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
