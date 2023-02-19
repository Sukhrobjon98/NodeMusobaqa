import { RolesModule } from './../roles/roles.module';
import { TelegramUpdate } from './telegram.update';
import { Module } from "@nestjs/common";
import { ServicesModule } from 'src/services/services.module';

@Module({
    imports: [RolesModule,ServicesModule],
    controllers: [],
    providers: [TelegramUpdate],
})
export class TelegramModule {}