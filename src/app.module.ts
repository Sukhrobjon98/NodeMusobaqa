import { MongooseModule } from '@nestjs/mongoose';
import { TelegramModule } from './TelegramBot/telegram.module';
import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { ServicesModule } from './services/services.module';
import { MasterModule } from './master/master.module';
import { OrdersModule } from './orders/orders.module';

import { TelegrafModule } from 'nestjs-telegraf';
@Module({
  imports: [
    TelegramModule,
    ClientModule,
    ServicesModule,
    MasterModule,
    MongooseModule.forRoot('mongodb://127.0.0.1/elektron_navbat'),
    OrdersModule,
    TelegramModule, TelegrafModule.forRoot({
      token: '5854102071:AAHQVvTYpZs5rFFozFG8uOaQHerzoTrD0gA',
    })
  ],
})


export class AppModule { }
