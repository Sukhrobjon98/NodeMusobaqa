import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Master, MasterSchema } from './schemas/master.schema';
import { MasterService } from './master.service';
import { OrdersModule } from 'src/orders/orders.module';
import { Order, OrderSchema } from 'src/orders/schemas/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Master.name, schema: MasterSchema }]),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    OrdersModule,
  ],
  controllers: [],
  providers: [MasterService],
  exports: [MasterService],
})
export class MasterModule {}
