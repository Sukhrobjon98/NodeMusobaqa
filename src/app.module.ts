import { TelegramModule } from './TelegramBot/telegram.module';
import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { ServicesModule } from './services/services.module';
import { MasterModule } from './master/master.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TelegramModule,
    ClientModule,
    ServicesModule,
    MasterModule,
    MongooseModule.forRoot('mongodb://127.0.0.1/elektron_navbat'),
    OrdersModule,
  ],
})
export class AppModule {}
