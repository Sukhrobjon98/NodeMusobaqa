import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesModule } from 'src/services/services.module';
import { ClientService } from './client.service';
import { Client, ClientSchema } from './schemas/client.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]), ServicesModule],
  providers: [ClientService]
})
export class ClientModule {}
